import { Unhead } from '@unhead/schema';

interface RenderDomHeadOptions {
    /**
     * Document to use for rendering. Allows stubbing for testing.
     */
    document?: Document;
}
/**
 * Render the head tags to the DOM.
 */
declare function renderDOMHead<T extends Unhead<any>>(head: T, options?: RenderDomHeadOptions): Promise<void>;
/**
 * Global instance of the dom update promise. Used for debounding head updates.
 */
declare let domUpdatePromise: Promise<void> | null;
/**
 * Queue a debounced update of the DOM head.
 */
declare function debouncedRenderDOMHead<T extends Unhead<any>>(head: T, options?: RenderDomHeadOptions & {
    delayFn?: (fn: () => void) => void;
}): Promise<void>;

declare function hashCode(s: string): string;

export { RenderDomHeadOptions, debouncedRenderDOMHead, domUpdatePromise, hashCode, renderDOMHead };
