import { Unhead, SSRHeadPayload } from '@unhead/schema';
export { SSRHeadPayload } from '@unhead/schema';

declare function renderSSRHead<T extends {}>(head: Unhead<T>): Promise<SSRHeadPayload>;

export { renderSSRHead };
