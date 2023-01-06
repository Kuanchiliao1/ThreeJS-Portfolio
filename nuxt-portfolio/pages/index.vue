<template>
  <div id="container--intro" class="absolute text-white text-center center-Y center-X">
        <h1 id="tony-liao" class="translate-Y-down opacity-0 text-xl font-mono uppercase tracking-wide">Tony Liao</h1>
        <p id="portfolio-description" class="translate-Y-down opacity-0 text-4xl font-exo">FRONTEND DEVELOPER AND EXPERIMENTER AT HEART</p>
        <a id="my-work-btn" class="translate-Y-down opacity-0 inline-block mt-8 border px-4 py-2 rounded-lg text-sm font-mono hover:bg-white hover:text-grey-800">View My Work</a>
      </div>
</template>

<script>
import gsap from "gsap";
import {
  PlaneGeometry,
  BufferAttribute,
  Raycaster,
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  MeshPhongMaterial,
  DoubleSide,
  FlatShading,
  Mesh,
  DirectionalLight,
  BufferGeometry,
  PointsMaterial,
  Float32BufferAttribute,
  Points
} from "three"
import OrbitControls from "orbit-controls-es6"

export default {
  mounted() {
    const dat = require('dat.gui')
    const gui = new dat.GUI();
    // For adding the properties we want in the GUI
    const world = {
      plane: {
        width: 400,
        height: 400,
        widthSegments: 50,
        heightSegments: 50,
      },
    };

    gui
      .add(world.plane, "width", 1, 500)
      .onChange(generatePlane);

    gui
      .add(world.plane, "height", 1, 500)
      .onChange(generatePlane);

    gui
      .add(world.plane, "widthSegments", 1, 100)
      .onChange(generatePlane);

    gui
      .add(world.plane, "heightSegments", 1, 100)
      .onChange(generatePlane);

    function generatePlane() {
      planeMesh.geometry.dispose();
      planeMesh.geometry = new PlaneGeometry(
        world.plane.width,
        world.plane.height,
        world.plane.widthSegments,
        world.plane.widthSegments
      );

      // Randomize vertices
      const { array } = planeMesh.geometry.attributes.position;
      const randomValues = [];
      // Iterate over sets of three coordinates(representing verticies)]
      for (let i = 0; i < array.length; i += 3) {
        const x = array[i];
        const y = array[i + 1];
        const z = array[i + 2];

        // Multiply Math.random value to increase randomness
        array[i] = x + (Math.random() - 0.5) * 3;
        array[i + 1] = y + (Math.random() - 0.5) * 3;
        // + 2 allows us to access the z coordinate
        array[i + 2] = z + (Math.random() - 0.5) * 4;

        // to push in 3x the random values for each vertices
        for (let i = 0; i < 3; i++) {
          // multiplying by 2pi gives full range of input to sine and cosine
          randomValues.push(Math.random() * Math.PI * 2);
        }
      }

      // Set array of random numbers as property value
      planeMesh.geometry.attributes.position.randomValues = randomValues;
      // Making new property to track the original coordinates of vertices
      planeMesh.geometry.attributes.position.originalPosition =
        planeMesh.geometry.attributes.position.array;

      const colors = [];
      for (let i = 0; i < planeMesh.geometry.attributes.position.count; i++) {
        colors.push(0, 0.19, 0.4);
      }

      // BufferAttribute must take Float32
      planeMesh.geometry.setAttribute(
        "color",
        new BufferAttribute(new Float32Array(colors), 3)
      );
    }

    //? Determine whether a laser would hit the object
    const raycaster = new Raycaster();
    // The 3D environment
    const scene = new Scene();
    // Determines the position from which the user "sees"
    const camera = new PerspectiveCamera(
      75,
      innerWidth / innerHeight,
      0.1,
      1000
    );
    // Converts 3D to 2D via calculations
    const renderer = new WebGLRenderer();

    renderer.setSize(innerWidth, innerHeight);

    // To remove the jagged edges of our shapes
    renderer.setPixelRatio(devicePixelRatio);
    document.body.appendChild(renderer.domElement);

    new OrbitControls(camera, renderer.domElement);

    // How far away camera is
    camera.position.z = 50;

    const planeGeometry = new PlaneGeometry(
      world.plane.width,
      world.plane.height,
      world.plane.widthSegments,
      world.plane.heightSegments
    );
    const planeMaterial =
      new // This is invisible until we add a light to illuminate it
      MeshPhongMaterial({
        // Ensures that both sides of plan is seen. Default is off due to performance reasons
        side: DoubleSide,
        // Flat surfaces get shading applied
        flatShading: FlatShading,
        vertexColors: true,
      });

    const planeMesh = new Mesh(planeGeometry, planeMaterial);
    scene.add(planeMesh);
    generatePlane();

    const light = new DirectionalLight(0xffffff, 1);
    // Where we want to place our light relative to the center of the scene. z value of 1 moves it towards us. Has big effect on shading
    light.position.set(0, 1, 1);
    scene.add(light);

    const backLight = new DirectionalLight(0xffffff, 1);
    backLight.position.set(0, 0, -1);
    scene.add(backLight);

    const starGeometry = new BufferGeometry()
    const starMaterial = new PointsMaterial({
      color: 0xffffff
    })

    const starVerticies = []
    for (let i = 0; i < 5000; i++) {
      // Random num between -1000 and 1000
      const x = (Math.random() - 0.5) * 2000
      const y = (Math.random() - 0.5) * 2000
      const z = (Math.random() - 0.5) * 2000
      starVerticies.push(x, y, z)
    }

    starGeometry.setAttribute('position', new Float32BufferAttribute(starVerticies, 3))

    const stars = new Points(starGeometry, starMaterial)
    scene.add(stars)

    const mouse = {
      x: undefined,
      y: undefined,
    };

    // Represents how many times `animate()` is called
    let frame = 0;
    // Recursive
    function animate() {
      requestAnimationFrame(animate);
      // Still need to call render function to render out our scene
      renderer.render(scene, camera);
      frame += 0.01;

      // Rays are coming from the camera
      raycaster.setFromCamera(mouse, camera);

      const { array, originalPosition, randomValues } =
        planeMesh.geometry.attributes.position;
      for (let i = 0; i < array.length; i += 3) {
        // x
        array[i] = originalPosition[i] + Math.cos(frame + randomValues[i]) * 0.01;
        // y
        array[i + 1] =
          originalPosition[i + 1] + Math.sin(frame + randomValues[i + 1]) * 0.001;
        // z
        array[i + 2] =
          originalPosition[i + 2] + Math.cos(frame + randomValues[i + 2]) * 0.025;
      }

      planeMesh.geometry.attributes.position.needsUpdate = true;

      // Represents object I'm currently hovering over
      const intersects = raycaster.intersectObject(planeMesh);
      if (intersects.length > 0) {
        // Destructuring to give easy access to the color property
        const { color } = intersects[0].object.geometry.attributes;
        // RGB: setX will set R, setY will set G, etc..
        // Vertice #1
        color.setX(intersects[0].face.a, 0.1);
        color.setY(intersects[0].face.a, 0.5);
        color.setZ(intersects[0].face.a, 1);
        // Vertice #2
        color.setX(intersects[0].face.b, 0.1);
        color.setY(intersects[0].face.b, 0.5);
        color.setZ(intersects[0].face.b, 1);
        // Vertice #3
        color.setX(intersects[0].face.c, 0.1);
        color.setY(intersects[0].face.c, 0.5);
        color.setZ(intersects[0].face.c, 1);
        intersects[0].object.geometry.attributes.color.needsUpdate = true;

        // These are the three vertices that make up a face, using indices to track
        // Object { a: 91, b: 102, c: 92 }

        const initialColor = {
          r: 0,
          g: 0.19,
          b: 0.4,
        };
        const hoverColor = {
          r: 0.1,
          g: 0.5,
          b: 1,
        };
        // gsap for animation
        gsap.to(hoverColor, {
          r: initialColor.r,
          g: initialColor.g,
          b: initialColor.b,
          onUpdate: () => {
            // Need to set values within geometry for effect
            color.setX(intersects[0].face.a, hoverColor.r);
            color.setY(intersects[0].face.a, hoverColor.g);
            color.setZ(intersects[0].face.a, hoverColor.b);
            // Vertice #2
            color.setX(intersects[0].face.b, hoverColor.r);
            color.setY(intersects[0].face.b, hoverColor.g);
            color.setZ(intersects[0].face.b, hoverColor.b);
            // Vertice #3
            color.setX(intersects[0].face.c, hoverColor.r);
            color.setY(intersects[0].face.c, hoverColor.g);
            color.setZ(intersects[0].face.c, hoverColor.b);
            color.needsUpdate = true;
          },
        });
      }

      stars.rotation.x += 0.0015
    }

    animate();

    // Normalize to a 0,0 coordinate system starting from the center
    addEventListener("mousemove", (event) => {
      mouse.x = (event.clientX - 0.5 * innerWidth) / (0.5 * innerWidth);
      mouse.y = -(event.clientY - 0.5 * innerHeight) / (0.5 * innerHeight);
    });

    gsap.to('#tony-liao', {
      opacity: 1,
      duration: 2.5,
      y: 0,
      ease: 'expo'
    })

    gsap.to('#portfolio-description', {
      opacity: 1,
      duration: 2.5,
      y: 0,
      delay: 0.5,
      ease: 'expo'
    })

    gsap.to('#my-work-btn', {
      opacity: 1,
      duration: 2.5,
      y: 0,
      delay: 1,
      ease: 'expo'
    })

    document.getElementById('my-work-btn').
      addEventListener('click', (e) => {
        // prevents link from firing
        e.preventDefault
        gsap.to('#container--intro', {
          opacity: 0
        })
        // Zoom in effect
        gsap.to(camera.position, {
          z: 25,
          ease: 'power3.inOut',
          duration: 2
        })
        // camera rotation, uses radians!
        gsap.to(camera.rotation, {
          x: 1.57,
          ease: 'power3.inOut',
          duration: 2
        })
        // Zoom in effect
        gsap.to(camera.position, {
          y: 1000,
          ease: 'power3.in',
          duration: 1.25,
          delay: 2,
          onComplete: () => {
            window.location =
            "https://chriscourses.com/"
          }
        })
      })

      addEventListener('resize', () => {
        camera.aspect = innerWidth / innerHeight
        // Tells threejs to apply updated aspect ration
        camera.updateProjectionMatrix()
        // change renderer to fit viewport
        renderer.setSize(innerWidth, innerHeight)
      })
  }
}
</script>


<style></style>
