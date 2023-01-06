import { MaybePromiseProps, HeadTag as HeadTag$1, MergeHead, BaseBodyAttributes, HtmlAttributes as HtmlAttributes$1, Merge, Base as Base$1, DefinedValueOrEmptyObject, LinkBase, HttpEventAttributes, DataKeys, Style as Style$1, ScriptBase, Noscript as Noscript$1, BodyEvents, Meta as Meta$1, Stringable } from '@zhead/schema';
export { DataKeys, DefinedValueOrEmptyObject, MergeHead, MetaFlatInput, SpeculationRules, TagKey } from '@zhead/schema';
import { NestedHooks, Hookable } from 'hookable';

interface ResolvesDuplicates {
    /**
     * By default, tags which share the same unique key `name`, `property` are de-duped. To allow duplicates
     * to be made you can provide a unique key for each entry.
     */
    key?: string;
    /**
     * @deprecated Use `key` instead
     */
    hid?: string;
    /**
     * @deprecated Use `key` instead
     */
    vmid?: string;
    /**
     * Specify where to render the tag.
     *
     * @default 'head'
     */
    tagDuplicateStrategy?: 'replace' | 'merge';
}
type ValidTagPositions = 'head' | 'bodyClose' | 'bodyOpen';
interface TagPosition {
    /**
     * Specify where to render the tag.
     *
     * @default 'head'
     */
    tagPosition?: ValidTagPositions;
    /**
     * Render the tag before the body close.
     *
     * @deprecated Use `tagPosition: 'bodyClose'` instead.
     */
    body?: true;
}
type InnerContentVal = string | Record<string, any>;
interface InnerContent {
    /**
     * Text content of the tag.
     *
     * Alias for children
     */
    innerHTML?: InnerContentVal;
    /**
     * Sets the textContent of an element.
     */
    children?: InnerContentVal;
    /**
     * Sets the textContent of an element. This will be HTML encoded.
     *
     * Alias for children
     */
    textContent?: InnerContentVal;
}
interface TagPriority {
    /**
     * The priority for rendering the tag, without this all tags are rendered as they are registered
     * (besides some special tags).
     *
     * The following special tags have default priorities:
     * * -2 <meta charset ...>
     * * -1 <base>
     * * 0 <meta http-equiv="content-security-policy" ...>
     *
     * All other tags have a default priority of 10: <meta>, <script>, <link>, <style>, etc
     */
    tagPriority?: number | 'critical' | 'high' | 'low' | `before:${string}` | `after:${string}`;
}
type TagUserProperties = TagPriority & TagPosition & MaybePromiseProps<InnerContent> & ResolvesDuplicates;
interface TagInternalProperties {
    /**
     * Entry ID
     */
    _e?: number;
    /**
     * Position
     */
    _p?: number;
    /**
     * Dedupe key
     */
    _d?: string;
}
type HeadTag = HeadTag$1 & TagUserProperties & TagInternalProperties;
type HeadTagKeys = (keyof HeadTag)[];

type Never<T> = {
    [P in keyof T]?: never;
};
type UserTagConfigWithoutInnerContent = TagPriority & TagPosition & ResolvesDuplicates & Never<InnerContent>;
type UserAttributesConfig = ResolvesDuplicates & TagPriority & Never<InnerContent & TagPosition>;
interface SchemaAugmentations extends MergeHead {
    base: UserAttributesConfig;
    htmlAttrs: UserAttributesConfig;
    bodyAttrs: UserAttributesConfig;
    link: UserTagConfigWithoutInnerContent;
    meta: UserTagConfigWithoutInnerContent;
    style: TagUserProperties;
    script: TagUserProperties;
    noscript: TagUserProperties;
}
type MaybeArray<T> = T | T[];
type BaseBodyAttr = BaseBodyAttributes;
type BaseHtmlAttr = HtmlAttributes$1;
interface BodyAttr extends Omit<BaseBodyAttr, 'class'> {
    /**
     * The class global attribute is a space-separated list of the case-sensitive classes of the element.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class
     */
    class?: MaybeArray<string> | Record<string, boolean>;
}
interface HtmlAttr extends Omit<HtmlAttributes$1, 'class'> {
    /**
     * The class global attribute is a space-separated list of the case-sensitive classes of the element.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class
     */
    class?: MaybeArray<string> | Record<string, boolean>;
}
interface BaseMeta extends Omit<Meta$1, 'content'> {
    /**
     * This attribute contains the value for the http-equiv, name or property attribute, depending on which is used.
     *
     * You can provide an array of values to create multiple tags sharing the same name, property or http-equiv.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content
     */
    content?: MaybeArray<Stringable>;
}
type EntryAugmentation = undefined | Record<string, any>;
type MaybeFunctionEntries<T> = {
    [key in keyof T]?: T[key] | ((e: Event) => void);
};
type Title = string | null;
type TitleTemplate = string | null | ((title?: string) => string | null);
type Base<E extends EntryAugmentation = {}> = Partial<Merge<SchemaAugmentations['base'], MaybePromiseProps<Base$1>>> & DefinedValueOrEmptyObject<E>;
type Link<E extends EntryAugmentation = {}> = MaybePromiseProps<LinkBase> & MaybeFunctionEntries<HttpEventAttributes> & DataKeys & SchemaAugmentations['link'] & DefinedValueOrEmptyObject<E>;
type Meta<E extends EntryAugmentation = {}> = MaybePromiseProps<BaseMeta> & DataKeys & SchemaAugmentations['meta'] & DefinedValueOrEmptyObject<E>;
type Style<E extends EntryAugmentation = {}> = MaybePromiseProps<Style$1> & DataKeys & SchemaAugmentations['style'] & DefinedValueOrEmptyObject<E>;
type Script<E extends EntryAugmentation = {}> = MaybePromiseProps<ScriptBase> & MaybeFunctionEntries<HttpEventAttributes> & DataKeys & SchemaAugmentations['script'] & DefinedValueOrEmptyObject<E>;
type Noscript<E extends EntryAugmentation = {}> = MaybePromiseProps<Noscript$1> & DataKeys & SchemaAugmentations['noscript'] & DefinedValueOrEmptyObject<E>;
type HtmlAttributes<E extends EntryAugmentation = {}> = MaybePromiseProps<HtmlAttr> & DataKeys & SchemaAugmentations['htmlAttrs'] & DefinedValueOrEmptyObject<E>;
type BodyAttributes<E extends EntryAugmentation = {}> = MaybePromiseProps<BodyAttr> & MaybeFunctionEntries<BodyEvents> & DataKeys & SchemaAugmentations['bodyAttrs'] & DefinedValueOrEmptyObject<E>;
interface Head<E extends MergeHead = SchemaAugmentations> {
    /**
     * The <title> HTML element defines the document's title that is shown in a browser's title bar or a page's tab.
     * It only contains text; tags within the element are ignored.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title
     */
    title?: Title | Promise<Title>;
    /**
     * Generate the title from a template.
     *
     * Should include a `%s` placeholder for the title, for example `%s - My Site`.
     */
    titleTemplate?: TitleTemplate;
    /**
     * The <base> HTML element specifies the base URL to use for all relative URLs in a document.
     * There can be only one <base> element in a document.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
     */
    base?: Base<E['base']>;
    /**
     * The <link> HTML element specifies relationships between the current document and an external resource.
     * This element is most commonly used to link to stylesheets, but is also used to establish site icons
     * (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-as
     */
    link?: Link<E['link']>[];
    /**
     * The <meta> element represents metadata that cannot be expressed in other HTML elements, like <link> or <script>.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
     */
    meta?: Meta<E['meta']>[];
    /**
     * The <style> HTML element contains style information for a document, or part of a document.
     * It contains CSS, which is applied to the contents of the document containing the <style> element.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style
     */
    style?: Style<E['style']>[];
    /**
     * The <script> HTML element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
     */
    script?: Script<E['script']>[];
    /**
     * The <noscript> HTML element defines a section of HTML to be inserted if a script type on the page is unsupported
     * or if scripting is currently turned off in the browser.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript
     */
    noscript?: Noscript<E['noscript']>[];
    /**
     * Attributes for the <html> HTML element.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html
     */
    htmlAttrs?: HtmlAttributes<E['htmlAttrs']>;
    /**
     * Attributes for the <body> HTML element.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body
     */
    bodyAttrs?: BodyAttributes<E['bodyAttrs']>;
}

type HookResult = Promise<void> | void;
interface SSRHeadPayload {
    headTags: string;
    bodyTags: string;
    bodyTagsOpen: string;
    htmlAttrs: string;
    bodyAttrs: string;
}
interface EntryResolveCtx<T> {
    tags: HeadTag[];
    entries: HeadEntry<T>[];
}
interface DomRenderTagContext {
    $el?: Element | null;
    shouldRender: boolean;
    renderId: string;
    tag: HeadTag;
    entry?: HeadEntry<any>;
    staleSideEffects: SideEffectsRecord;
}
interface BeforeRenderContext {
    shouldRender: boolean;
}
interface SSRRenderContext {
    tags: HeadTag[];
    html: SSRHeadPayload;
}
interface HeadHooks {
    'init': (ctx: Unhead<any>) => HookResult;
    'entries:updated': (ctx: Unhead<any>) => HookResult;
    'entries:resolve': (ctx: EntryResolveCtx<any>) => HookResult;
    'tag:normalise': (ctx: {
        tag: HeadTag;
        entry: HeadEntry<any>;
    }) => HookResult;
    'tags:resolve': (ctx: {
        tags: HeadTag[];
    }) => HookResult;
    'dom:beforeRender': (ctx: BeforeRenderContext) => HookResult;
    'dom:beforeRenderTag': (ctx: DomRenderTagContext) => HookResult;
    'dom:renderTag': (ctx: DomRenderTagContext) => HookResult;
    'ssr:beforeRender': (ctx: BeforeRenderContext) => HookResult;
    'ssr:render': (ctx: {
        tags: HeadTag[];
    }) => HookResult;
    'ssr:rendered': (ctx: SSRRenderContext) => HookResult;
}

/**
 * Side effects are mapped with a key and their cleanup function.
 *
 * For example `meta:data-h-4h46h465`: () => { document.querySelector('meta[data-h-4h46h465]').remove() }
 */
type SideEffectsRecord = Record<string, () => void>;
type RuntimeMode = 'server' | 'client' | 'all';
interface HeadEntry<Input> {
    /**
     * User provided input for the entry.
     */
    input: Input;
    /**
     * Optional resolved input which will be used if set.
     */
    resolvedInput?: Input;
    /**
     * The mode that the entry should be used in.
     *
     * @internal
     */
    _m?: RuntimeMode;
    /**
     * Head entry index
     *
     * @internal
     */
    _i: number;
    /**
     * Side effects
     *
     * @internal
     */
    _sde: SideEffectsRecord;
}
type HeadPlugin = Omit<CreateHeadOptions, 'plugins'>;
/**
 * An active head entry provides an API to manipulate it.
 */
interface ActiveHeadEntry<Input> {
    /**
     * Updates the entry with new input.
     *
     * Will first clear any side effects for previous input.
     */
    patch: (input: Input) => void;
    /**
     * Dispose the entry, removing it from the active head.
     *
     * Will queue side effects for removal.
     */
    dispose: () => void;
}
interface CreateHeadOptions {
    domDelayFn?: (fn: () => void) => void;
    document?: Document;
    plugins?: HeadPlugin[];
    hooks?: NestedHooks<HeadHooks>;
}
interface HeadEntryOptions {
    mode?: RuntimeMode;
}
interface Unhead<Input extends {} = Head> {
    /**
     * The active head entries.
     */
    headEntries: () => HeadEntry<Input>[];
    /**
     * Create a new head entry.
     */
    push: (entry: Input, options?: HeadEntryOptions) => ActiveHeadEntry<Input>;
    /**
     * Resolve tags from head entries.
     */
    resolveTags: () => Promise<HeadTag[]>;
    /**
     * Exposed hooks for easier extension.
     */
    hooks: Hookable<HeadHooks>;
    /**
     * Resolved options
     */
    resolvedOptions: CreateHeadOptions;
    /**
     * Use a head plugin, loads the plugins hooks.
     */
    use: (plugin: HeadPlugin) => void;
    /**
     * @internal
     */
    _popSideEffectQueue: () => SideEffectsRecord;
    /**
     * @internal
     */
    _elMap: Record<string, Element>;
}

export { ActiveHeadEntry, Base, BaseBodyAttr, BaseHtmlAttr, BeforeRenderContext, BodyAttributes, CreateHeadOptions, DomRenderTagContext, EntryAugmentation, EntryResolveCtx, Head, HeadEntry, HeadEntryOptions, HeadHooks, HeadPlugin, HeadTag, HeadTagKeys, HookResult, HtmlAttributes, InnerContent, InnerContentVal, Link, MaybeArray, MaybeFunctionEntries, Meta, Never, Noscript, ResolvesDuplicates, RuntimeMode, SSRHeadPayload, SSRRenderContext, SchemaAugmentations, Script, SideEffectsRecord, Style, TagInternalProperties, TagPosition, TagPriority, TagUserProperties, Title, TitleTemplate, Unhead, UserAttributesConfig, UserTagConfigWithoutInnerContent, ValidTagPositions };
