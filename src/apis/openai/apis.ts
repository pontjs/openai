/**
 * @author pontx-generator
 * @description API 类型定义
 */

import type * as schemas from './schemas';

export declare namespace APIs {
  export type ListContainerFilesParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
  };

  export type ListContainersParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name?: string;
  };

  export type ListThreadItemsMethodParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: schemas.OrderEnum;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title before 值
     * @description OpenAI API 合约中的 before 值。
     */
    before?: string;
  };

  export type ListThreadsMethodParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: schemas.OrderEnum;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title before 值
     * @description OpenAI API 合约中的 before 值。
     */
    before?: string;
    /**
     * @title user 值
     * @description OpenAI API 合约中的 user 值。
     */
    user?: string;
  };

  export type AdminApiKeysCreateParams = {
    /**
     * @title expires in seconds 值
     * @description OpenAI API 合约中的 expires in seconds 值。
     */
    expires_in_seconds?: number;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name: string;
  };

  export type AdminApiKeysListParams = {
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
  };

}

// ============ assistants 模块 ============

export declare namespace assistants {
  export type CreateRunParams = {
    /**
     * @title include 值
     * @description OpenAI API 合约中的 include 值。
     */
    'include[]'?: Array<'step_details.tool_calls[*].file_search.results[*].content'>;
  };

  export type GetRunStepParams = {
    /**
     * @title include 值
     * @description OpenAI API 合约中的 include 值。
     */
    'include[]'?: Array<'step_details.tool_calls[*].file_search.results[*].content'>;
  };

  export type ListAssistantsParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title before 值
     * @description OpenAI API 合约中的 before 值。
     */
    before?: string;
  };

  export type ListMessagesParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title before 值
     * @description OpenAI API 合约中的 before 值。
     */
    before?: string;
    /**
     * @title run id 值
     * @description OpenAI API 合约中的 run id 值。
     */
    run_id?: string;
  };

  export type ListRunStepsParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title before 值
     * @description OpenAI API 合约中的 before 值。
     */
    before?: string;
    /**
     * @title include 值
     * @description OpenAI API 合约中的 include 值。
     */
    'include[]'?: Array<'step_details.tool_calls[*].file_search.results[*].content'>;
  };

  export type ListRunsParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title before 值
     * @description OpenAI API 合约中的 before 值。
     */
    before?: string;
  };

}

export type assistants = {
  /**
   * POST /threads/{thread_id}/runs/{run_id}/cancel
   * OpenAI API 中用于 cancel Run 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理cancel Run。
   */
  cancelRun: (
    /**
     * @title thread id 值
     * @description OpenAI API 合约中的 thread id 值。
     */
    thread_id: string,
    /**
     * @title run id 值
     * @description OpenAI API 合约中的 run id 值。
     */
    run_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.RunObject>;

  /**
   * POST /assistants
   * OpenAI API 中用于 create Assistant 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Assistant。
   * @deprecated
   */
  createAssistant: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateAssistantRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.AssistantObject>;

  /**
   * POST /threads/{thread_id}/messages
   * OpenAI API 中用于 create Message 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Message。
   */
  createMessage: (
    /**
     * @title thread id 值
     * @description OpenAI API 合约中的 thread id 值。
     */
    thread_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateMessageRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.MessageObject>;

  /**
   * POST /threads/{thread_id}/runs
   * OpenAI API 中用于 create Run 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Run。
   */
  createRun: (
    /**
     * @title thread id 值
     * @description OpenAI API 合约中的 thread id 值。
     */
    thread_id: string,
    params: assistants.CreateRunParams,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateRunRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.RunObject>;

  /**
   * POST /threads
   * OpenAI API 中用于 create Thread 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Thread。
   */
  createThread: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateThreadRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.ThreadObject>;

  /**
   * POST /threads/runs
   * OpenAI API 中用于 create Thread And Run 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Thread And Run。
   */
  createThreadAndRun: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateThreadAndRunRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.RunObject>;

  /**
   * DELETE /assistants/{assistant_id}
   * OpenAI API 中用于 delete Assistant 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Assistant。
   * @deprecated
   */
  deleteAssistant: (
    /**
     * @title assistant id 值
     * @description OpenAI API 合约中的 assistant id 值。
     */
    assistant_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.DeleteAssistantResponse>;

  /**
   * DELETE /threads/{thread_id}/messages/{message_id}
   * OpenAI API 中用于 delete Message 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Message。
   */
  deleteMessage: (
    /**
     * @title thread id 值
     * @description OpenAI API 合约中的 thread id 值。
     */
    thread_id: string,
    /**
     * @title message id 值
     * @description OpenAI API 合约中的 message id 值。
     */
    message_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.DeleteMessageResponse>;

  /**
   * DELETE /threads/{thread_id}
   * OpenAI API 中用于 delete Thread 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Thread。
   */
  deleteThread: (
    /**
     * @title thread id 值
     * @description OpenAI API 合约中的 thread id 值。
     */
    thread_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.DeleteThreadResponse>;

  /**
   * GET /assistants/{assistant_id}
   * OpenAI API 中用于 get Assistant 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取get Assistant。
   * @deprecated
   */
  getAssistant: (
    /**
     * @title assistant id 值
     * @description OpenAI API 合约中的 assistant id 值。
     */
    assistant_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.AssistantObject>;

  /**
   * GET /threads/{thread_id}/messages/{message_id}
   * OpenAI API 中用于 get Message 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取get Message。
   */
  getMessage: (
    /**
     * @title thread id 值
     * @description OpenAI API 合约中的 thread id 值。
     */
    thread_id: string,
    /**
     * @title message id 值
     * @description OpenAI API 合约中的 message id 值。
     */
    message_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.MessageObject>;

  /**
   * GET /threads/{thread_id}/runs/{run_id}
   * OpenAI API 中用于 get Run 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取get Run。
   */
  getRun: (
    /**
     * @title thread id 值
     * @description OpenAI API 合约中的 thread id 值。
     */
    thread_id: string,
    /**
     * @title run id 值
     * @description OpenAI API 合约中的 run id 值。
     */
    run_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.RunObject>;

  /**
   * GET /threads/{thread_id}/runs/{run_id}/steps/{step_id}
   * OpenAI API 中用于 get Run Step 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取get Run Step。
   */
  getRunStep: (
    /**
     * @title thread id 值
     * @description OpenAI API 合约中的 thread id 值。
     */
    thread_id: string,
    /**
     * @title run id 值
     * @description OpenAI API 合约中的 run id 值。
     */
    run_id: string,
    /**
     * @title step id 值
     * @description OpenAI API 合约中的 step id 值。
     */
    step_id: string,
    params: assistants.GetRunStepParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.RunStepObject>;

  /**
   * GET /threads/{thread_id}
   * OpenAI API 中用于 get Thread 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取get Thread。
   */
  getThread: (
    /**
     * @title thread id 值
     * @description OpenAI API 合约中的 thread id 值。
     */
    thread_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ThreadObject>;

  /**
   * GET /assistants
   * OpenAI API 中用于 list Assistants 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Assistants。
   * @deprecated
   */
  listAssistants: (
    params: assistants.ListAssistantsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ListAssistantsResponse>;

  /**
   * GET /threads/{thread_id}/messages
   * OpenAI API 中用于 list Messages 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Messages。
   */
  listMessages: (
    /**
     * @title thread id 值
     * @description OpenAI API 合约中的 thread id 值。
     */
    thread_id: string,
    params: assistants.ListMessagesParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ListMessagesResponse>;

  /**
   * GET /threads/{thread_id}/runs/{run_id}/steps
   * OpenAI API 中用于 list Run Steps 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Run Steps。
   */
  listRunSteps: (
    /**
     * @title thread id 值
     * @description OpenAI API 合约中的 thread id 值。
     */
    thread_id: string,
    /**
     * @title run id 值
     * @description OpenAI API 合约中的 run id 值。
     */
    run_id: string,
    params: assistants.ListRunStepsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ListRunStepsResponse>;

  /**
   * GET /threads/{thread_id}/runs
   * OpenAI API 中用于 list Runs 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Runs。
   */
  listRuns: (
    /**
     * @title thread id 值
     * @description OpenAI API 合约中的 thread id 值。
     */
    thread_id: string,
    params: assistants.ListRunsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ListRunsResponse>;

  /**
   * POST /assistants/{assistant_id}
   * OpenAI API 中用于 modify Assistant 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理modify Assistant。
   * @deprecated
   */
  modifyAssistant: (
    /**
     * @title assistant id 值
     * @description OpenAI API 合约中的 assistant id 值。
     */
    assistant_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.ModifyAssistantRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.AssistantObject>;

  /**
   * POST /threads/{thread_id}/messages/{message_id}
   * OpenAI API 中用于 modify Message 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理modify Message。
   */
  modifyMessage: (
    /**
     * @title thread id 值
     * @description OpenAI API 合约中的 thread id 值。
     */
    thread_id: string,
    /**
     * @title message id 值
     * @description OpenAI API 合约中的 message id 值。
     */
    message_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.ModifyMessageRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.MessageObject>;

  /**
   * POST /threads/{thread_id}/runs/{run_id}
   * OpenAI API 中用于 modify Run 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理modify Run。
   */
  modifyRun: (
    /**
     * @title thread id 值
     * @description OpenAI API 合约中的 thread id 值。
     */
    thread_id: string,
    /**
     * @title run id 值
     * @description OpenAI API 合约中的 run id 值。
     */
    run_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.ModifyRunRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.RunObject>;

  /**
   * POST /threads/{thread_id}
   * OpenAI API 中用于 modify Thread 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理modify Thread。
   */
  modifyThread: (
    /**
     * @title thread id 值
     * @description OpenAI API 合约中的 thread id 值。
     */
    thread_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.ModifyThreadRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.ThreadObject>;

  /**
   * POST /threads/{thread_id}/runs/{run_id}/submit_tool_outputs
   * OpenAI API 中用于 submit Tool Ouputs To Run 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理submit Tool Ouputs To Run。
   */
  submitToolOuputsToRun: (
    /**
     * @title thread id 值
     * @description OpenAI API 合约中的 thread id 值。
     */
    thread_id: string,
    /**
     * @title run id 值
     * @description OpenAI API 合约中的 run id 值。
     */
    run_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.SubmitToolOutputsRunRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.RunObject>;

};

// ============ audio 模块 ============

export declare namespace audio {
  export type ListVoiceConsentsParams = {
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
  };

}

export type audio = {
  /**
   * POST /audio/speech
   * OpenAI API 中用于 create Speech 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Speech。
   */
  createSpeech: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateSpeechRequest,
    requestInit?: RequestInit,
  ) => Promise<Blob>;

  /**
   * POST /audio/transcriptions
   * OpenAI API 中用于 create Transcription 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Transcription。
   */
  createTranscription: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateTranscriptionRequest,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * POST /audio/translations
   * OpenAI API 中用于 create Translation 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Translation。
   */
  createTranslation: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateTranslationRequest,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * POST /audio/voices
   * OpenAI API 中用于 create Voice 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Voice。
   */
  createVoice: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateVoiceRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.VoiceResource>;

  /**
   * POST /audio/voice_consents
   * OpenAI API 中用于 create Voice Consent 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Voice Consent。
   */
  createVoiceConsent: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateVoiceConsentRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.VoiceConsentResource>;

  /**
   * DELETE /audio/voice_consents/{consent_id}
   * OpenAI API 中用于 delete Voice Consent 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Voice Consent。
   */
  deleteVoiceConsent: (
    /**
     * @title consent id 值
     * @description OpenAI API 合约中的 consent id 值。
     */
    consent_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.VoiceConsentDeletedResource>;

  /**
   * GET /audio/voice_consents/{consent_id}
   * OpenAI API 中用于 get Voice Consent 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取get Voice Consent。
   */
  getVoiceConsent: (
    /**
     * @title consent id 值
     * @description OpenAI API 合约中的 consent id 值。
     */
    consent_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.VoiceConsentResource>;

  /**
   * GET /audio/voice_consents
   * OpenAI API 中用于 list Voice Consents 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Voice Consents。
   */
  listVoiceConsents: (
    params: audio.ListVoiceConsentsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.VoiceConsentListResource>;

  /**
   * POST /audio/voice_consents/{consent_id}
   * OpenAI API 中用于 update Voice Consent 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理update Voice Consent。
   */
  updateVoiceConsent: (
    /**
     * @title consent id 值
     * @description OpenAI API 合约中的 consent id 值。
     */
    consent_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.UpdateVoiceConsentRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.VoiceConsentResource>;

};

// ============ auditLogs 模块 ============

export declare namespace auditLogs {
  export type ListAuditLogsParams = {
    /**
     * @title effective at 值
     * @description OpenAI API 合约中的 effective at 值。
     */
    effective_at?: {
      /**
       * @title gt 值
       * @description OpenAI API 合约中的 gt 值。
       */
      gt?: number;
      /**
       * @title gte 值
       * @description OpenAI API 合约中的 gte 值。
       */
      gte?: number;
      /**
       * @title lt 值
       * @description OpenAI API 合约中的 lt 值。
       */
      lt?: number;
      /**
       * @title lte 值
       * @description OpenAI API 合约中的 lte 值。
       */
      lte?: number
    };
    /**
     * @title project ids 值
     * @description OpenAI API 合约中的 project ids 值。
     */
    'project_ids[]'?: Array<string>;
    /**
     * @title event types 值
     * @description OpenAI API 合约中的 event types 值。
     */
    'event_types[]'?: Array<schemas.AuditLogEventType>;
    /**
     * @title actor ids 值
     * @description OpenAI API 合约中的 actor ids 值。
     */
    'actor_ids[]'?: Array<string>;
    /**
     * @title actor emails 值
     * @description OpenAI API 合约中的 actor emails 值。
     */
    'actor_emails[]'?: Array<string>;
    /**
     * @title resource ids 值
     * @description OpenAI API 合约中的 resource ids 值。
     */
    'resource_ids[]'?: Array<string>;
    /**
     * @title tenant only 值
     * @description OpenAI API 合约中的 tenant only 值。
     */
    tenant_only?: boolean;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title before 值
     * @description OpenAI API 合约中的 before 值。
     */
    before?: string;
  };

}

export type auditLogs = {
  /**
   * GET /organization/audit_logs
   * OpenAI API 中用于 list Audit Logs 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Audit Logs。
   */
  listAuditLogs: (
    params: auditLogs.ListAuditLogsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ListAuditLogsResponse>;

};

// ============ batch 模块 ============

export declare namespace batch {
  export type ListBatchesParams = {
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
  };

}

export type batch = {
  /**
   * POST /batches/{batch_id}/cancel
   * OpenAI API 中用于 cancel Batch 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理cancel Batch。
   */
  cancelBatch: (
    /**
     * @title batch id 值
     * @description OpenAI API 合约中的 batch id 值。
     */
    batch_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.Batch>;

  /**
   * POST /batches
   * OpenAI API 中用于 create Batch 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Batch。
   */
  createBatch: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateBatchRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.Batch>;

  /**
   * GET /batches
   * OpenAI API 中用于 list Batches 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Batches。
   */
  listBatches: (
    params: batch.ListBatchesParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ListBatchesResponse>;

  /**
   * GET /batches/{batch_id}
   * OpenAI API 中用于 retrieve Batch 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve Batch。
   */
  retrieveBatch: (
    /**
     * @title batch id 值
     * @description OpenAI API 合约中的 batch id 值。
     */
    batch_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.Batch>;

};

// ============ certificates 模块 ============

export declare namespace certificates {
  export type GetCertificateParams = {
    /**
     * @title include 值
     * @description OpenAI API 合约中的 include 值。
     */
    include?: Array<'content'>;
  };

  export type ListOrganizationCertificatesParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
  };

  export type ListProjectCertificatesParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
  };

}

export type certificates = {
  /**
   * POST /organization/certificates/activate
   * OpenAI API 中用于 activate Organization Certificates 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理activate Organization Certificates。
   */
  activateOrganizationCertificates: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.ToggleCertificatesRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.OrganizationCertificateActivationResponse>;

  /**
   * POST /organization/projects/{project_id}/certificates/activate
   * OpenAI API 中用于 activate Project Certificates 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理activate Project Certificates。
   */
  activateProjectCertificates: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.ToggleCertificatesRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.OrganizationProjectCertificateActivationResponse>;

  /**
   * POST /organization/certificates/deactivate
   * OpenAI API 中用于 deactivate Organization Certificates 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理deactivate Organization Certificates。
   */
  deactivateOrganizationCertificates: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.ToggleCertificatesRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.OrganizationCertificateDeactivationResponse>;

  /**
   * POST /organization/projects/{project_id}/certificates/deactivate
   * OpenAI API 中用于 deactivate Project Certificates 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理deactivate Project Certificates。
   */
  deactivateProjectCertificates: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.ToggleCertificatesRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.OrganizationProjectCertificateDeactivationResponse>;

  /**
   * DELETE /organization/certificates/{certificate_id}
   * OpenAI API 中用于 delete Certificate 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Certificate。
   */
  deleteCertificate: (
    /**
     * @title certificate id 值
     * @description OpenAI API 合约中的 certificate id 值。
     */
    certificate_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.DeleteCertificateResponse>;

  /**
   * GET /organization/certificates/{certificate_id}
   * OpenAI API 中用于 get Certificate 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取get Certificate。
   */
  getCertificate: (
    /**
     * @title certificate id 值
     * @description OpenAI API 合约中的 certificate id 值。
     */
    certificate_id: string,
    params: certificates.GetCertificateParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.Certificate>;

  /**
   * GET /organization/certificates
   * OpenAI API 中用于 list Organization Certificates 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Organization Certificates。
   */
  listOrganizationCertificates: (
    params: certificates.ListOrganizationCertificatesParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ListCertificatesResponse>;

  /**
   * GET /organization/projects/{project_id}/certificates
   * OpenAI API 中用于 list Project Certificates 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Project Certificates。
   */
  listProjectCertificates: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    params: certificates.ListProjectCertificatesParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ListProjectCertificatesResponse>;

  /**
   * POST /organization/certificates/{certificate_id}
   * OpenAI API 中用于 modify Certificate 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理modify Certificate。
   */
  modifyCertificate: (
    /**
     * @title certificate id 值
     * @description OpenAI API 合约中的 certificate id 值。
     */
    certificate_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.ModifyCertificateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.Certificate>;

  /**
   * POST /organization/certificates
   * OpenAI API 中用于 upload Certificate 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理upload Certificate。
   */
  uploadCertificate: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.UploadCertificateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.Certificate>;

};

// ============ chat 模块 ============

export declare namespace chat {
  export type GetChatCompletionMessagesParams = {
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
  };

  export type ListChatCompletionsParams = {
    /**
     * @title model 值
     * @description OpenAI API 合约中的 model 值。
     */
    model?: string;
    /**
     * @title metadata 值
     * @description OpenAI API 合约中的 metadata 值。
     */
    metadata?: schemas.Metadata;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
  };

  export type UpdateChatCompletionParams = {
    /**
     * @title metadata 值
     * @description OpenAI API 合约中的 metadata 值。
     */
    metadata: schemas.Metadata;
  };

}

export type chat = {
  /**
   * POST /chat/completions
   * OpenAI API 中用于 create Chat Completion 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Chat Completion。
   */
  createChatCompletion: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateChatCompletionRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.CreateChatCompletionResponse>;

  /**
   * DELETE /chat/completions/{completion_id}
   * OpenAI API 中用于 delete Chat Completion 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Chat Completion。
   */
  deleteChatCompletion: (
    /**
     * @title completion id 值
     * @description OpenAI API 合约中的 completion id 值。
     */
    completion_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ChatCompletionDeleted>;

  /**
   * GET /chat/completions/{completion_id}
   * OpenAI API 中用于 get Chat Completion 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取get Chat Completion。
   */
  getChatCompletion: (
    /**
     * @title completion id 值
     * @description OpenAI API 合约中的 completion id 值。
     */
    completion_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.CreateChatCompletionResponse>;

  /**
   * GET /chat/completions/{completion_id}/messages
   * OpenAI API 中用于 get Chat Completion Messages 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取get Chat Completion Messages。
   */
  getChatCompletionMessages: (
    /**
     * @title completion id 值
     * @description OpenAI API 合约中的 completion id 值。
     */
    completion_id: string,
    params: chat.GetChatCompletionMessagesParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ChatCompletionMessageList>;

  /**
   * GET /chat/completions
   * OpenAI API 中用于 list Chat Completions 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Chat Completions。
   */
  listChatCompletions: (
    params: chat.ListChatCompletionsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ChatCompletionList>;

  /**
   * POST /chat/completions/{completion_id}
   * OpenAI API 中用于 update Chat Completion 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理update Chat Completion。
   */
  updateChatCompletion: (
    /**
     * @title completion id 值
     * @description OpenAI API 合约中的 completion id 值。
     */
    completion_id: string,
    params: chat.UpdateChatCompletionParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.CreateChatCompletionResponse>;

};

// ============ completions 模块 ============

export type completions = {
  /**
   * POST /completions
   * OpenAI API 中用于 create Completion 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Completion。
   */
  createCompletion: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateCompletionRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.CreateCompletionResponse>;

};

// ============ conversations 模块 ============

export declare namespace conversations {
  export type CreateConversationItemsParams = {
    /**
     * @title include 值
     * @description OpenAI API 合约中的 include 值。
     */
    include?: Array<schemas.IncludeEnum>;
  };

  export type GetConversationItemParams = {
    /**
     * @title include 值
     * @description OpenAI API 合约中的 include 值。
     */
    include?: Array<schemas.IncludeEnum>;
  };

  export type ListConversationItemsParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title include 值
     * @description OpenAI API 合约中的 include 值。
     */
    include?: Array<schemas.IncludeEnum>;
  };

}

export type conversations = {
  /**
   * POST /conversations
   * OpenAI API 中用于 create Conversation 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Conversation。
   */
  createConversation: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateConversationBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.ConversationResource>;

  /**
   * POST /conversations/{conversation_id}/items
   * OpenAI API 中用于 create Conversation Items 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Conversation Items。
   */
  createConversationItems: (
    /**
     * @title conversation id 值
     * @description OpenAI API 合约中的 conversation id 值。
     */
    conversation_id: string,
    params: conversations.CreateConversationItemsParams,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: any,
    requestInit?: RequestInit,
  ) => Promise<schemas.ConversationItemList>;

  /**
   * DELETE /conversations/{conversation_id}
   * OpenAI API 中用于 delete Conversation 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Conversation。
   */
  deleteConversation: (
    /**
     * @title conversation id 值
     * @description OpenAI API 合约中的 conversation id 值。
     */
    conversation_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.DeletedConversationResource>;

  /**
   * DELETE /conversations/{conversation_id}/items/{item_id}
   * OpenAI API 中用于 delete Conversation Item 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Conversation Item。
   */
  deleteConversationItem: (
    /**
     * @title conversation id 值
     * @description OpenAI API 合约中的 conversation id 值。
     */
    conversation_id: string,
    /**
     * @title item id 值
     * @description OpenAI API 合约中的 item id 值。
     */
    item_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ConversationResource>;

  /**
   * GET /conversations/{conversation_id}
   * OpenAI API 中用于 get Conversation 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取get Conversation。
   */
  getConversation: (
    /**
     * @title conversation id 值
     * @description OpenAI API 合约中的 conversation id 值。
     */
    conversation_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ConversationResource>;

  /**
   * GET /conversations/{conversation_id}/items/{item_id}
   * OpenAI API 中用于 get Conversation Item 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取get Conversation Item。
   */
  getConversationItem: (
    /**
     * @title conversation id 值
     * @description OpenAI API 合约中的 conversation id 值。
     */
    conversation_id: string,
    /**
     * @title item id 值
     * @description OpenAI API 合约中的 item id 值。
     */
    item_id: string,
    params: conversations.GetConversationItemParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ConversationItem>;

  /**
   * GET /conversations/{conversation_id}/items
   * OpenAI API 中用于 list Conversation Items 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Conversation Items。
   */
  listConversationItems: (
    /**
     * @title conversation id 值
     * @description OpenAI API 合约中的 conversation id 值。
     */
    conversation_id: string,
    params: conversations.ListConversationItemsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ConversationItemList>;

  /**
   * POST /conversations/{conversation_id}
   * OpenAI API 中用于 update Conversation 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理update Conversation。
   */
  updateConversation: (
    /**
     * @title conversation id 值
     * @description OpenAI API 合约中的 conversation id 值。
     */
    conversation_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.UpdateConversationBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.ConversationResource>;

};

// ============ dataRetention 模块 ============

export type dataRetention = {
  /**
   * GET /organization/data_retention
   * OpenAI API 中用于 retrieve Organization Data Retention 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve Organization Data Retention。
   */
  retrieveOrganizationDataRetention: (
    requestInit?: RequestInit,
  ) => Promise<schemas.OrganizationDataRetention>;

  /**
   * GET /organization/projects/{project_id}/data_retention
   * OpenAI API 中用于 retrieve Project Data Retention 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve Project Data Retention。
   */
  retrieveProjectDataRetention: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectDataRetention>;

  /**
   * POST /organization/data_retention
   * OpenAI API 中用于 update Organization Data Retention 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理update Organization Data Retention。
   */
  updateOrganizationDataRetention: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.UpdateOrganizationDataRetentionBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.OrganizationDataRetention>;

  /**
   * POST /organization/projects/{project_id}/data_retention
   * OpenAI API 中用于 update Project Data Retention 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理update Project Data Retention。
   */
  updateProjectDataRetention: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.UpdateProjectDataRetentionBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectDataRetention>;

};

// ============ embeddings 模块 ============

export type embeddings = {
  /**
   * POST /embeddings
   * OpenAI API 中用于 create Embedding 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Embedding。
   */
  createEmbedding: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateEmbeddingRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.CreateEmbeddingResponse>;

};

// ============ evals 模块 ============

export declare namespace evals {
  export type GetEvalRunOutputItemsParams = {
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title status 值
     * @description OpenAI API 合约中的 status 值。
     */
    status?: 'fail' | 'pass';
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
  };

  export type GetEvalRunsParams = {
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
    /**
     * @title status 值
     * @description OpenAI API 合约中的 status 值。
     */
    status?: 'queued' | 'in_progress' | 'completed' | 'canceled' | 'failed';
  };

  export type ListEvalsParams = {
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
    /**
     * @title order by 值
     * @description OpenAI API 合约中的 order by 值。
     */
    order_by?: 'created_at' | 'updated_at';
  };

  export type UpdateEvalParams = {
    /**
     * @title metadata 值
     * @description OpenAI API 合约中的 metadata 值。
     */
    metadata?: schemas.Metadata;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name?: string;
  };

}

export type evals = {
  /**
   * POST /evals/{eval_id}/runs/{run_id}
   * OpenAI API 中用于 cancel Eval Run 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理cancel Eval Run。
   */
  cancelEvalRun: (
    /**
     * @title eval id 值
     * @description OpenAI API 合约中的 eval id 值。
     */
    eval_id: string,
    /**
     * @title run id 值
     * @description OpenAI API 合约中的 run id 值。
     */
    run_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.EvalRun>;

  /**
   * POST /evals
   * OpenAI API 中用于 create Eval 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Eval。
   */
  createEval: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateEvalRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.Eval>;

  /**
   * POST /evals/{eval_id}/runs
   * OpenAI API 中用于 create Eval Run 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Eval Run。
   */
  createEvalRun: (
    /**
     * @title eval id 值
     * @description OpenAI API 合约中的 eval id 值。
     */
    eval_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateEvalRunRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.EvalRun>;

  /**
   * DELETE /evals/{eval_id}
   * OpenAI API 中用于 delete Eval 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Eval。
   */
  deleteEval: (
    /**
     * @title eval id 值
     * @description OpenAI API 合约中的 eval id 值。
     */
    eval_id: string,
    requestInit?: RequestInit,
  ) => Promise<{
  /**
   * @title deleted 值
   * @description OpenAI API 合约中的 deleted 值。
   */
  deleted: boolean;
  /**
   * @title eval id 值
   * @description OpenAI API 合约中的 eval id 值。
   */
  eval_id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: string
}>;

  /**
   * DELETE /evals/{eval_id}/runs/{run_id}
   * OpenAI API 中用于 delete Eval Run 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Eval Run。
   */
  deleteEvalRun: (
    /**
     * @title eval id 值
     * @description OpenAI API 合约中的 eval id 值。
     */
    eval_id: string,
    /**
     * @title run id 值
     * @description OpenAI API 合约中的 run id 值。
     */
    run_id: string,
    requestInit?: RequestInit,
  ) => Promise<{
  /**
   * @title deleted 值
   * @description OpenAI API 合约中的 deleted 值。
   */
  deleted?: boolean;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: string;
  /**
   * @title run id 值
   * @description OpenAI API 合约中的 run id 值。
   */
  run_id?: string
}>;

  /**
   * GET /evals/{eval_id}
   * OpenAI API 中用于 get Eval 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取get Eval。
   */
  getEval: (
    /**
     * @title eval id 值
     * @description OpenAI API 合约中的 eval id 值。
     */
    eval_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.Eval>;

  /**
   * GET /evals/{eval_id}/runs/{run_id}
   * OpenAI API 中用于 get Eval Run 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取get Eval Run。
   */
  getEvalRun: (
    /**
     * @title eval id 值
     * @description OpenAI API 合约中的 eval id 值。
     */
    eval_id: string,
    /**
     * @title run id 值
     * @description OpenAI API 合约中的 run id 值。
     */
    run_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.EvalRun>;

  /**
   * GET /evals/{eval_id}/runs/{run_id}/output_items/{output_item_id}
   * OpenAI API 中用于 get Eval Run Output Item 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取get Eval Run Output Item。
   */
  getEvalRunOutputItem: (
    /**
     * @title eval id 值
     * @description OpenAI API 合约中的 eval id 值。
     */
    eval_id: string,
    /**
     * @title run id 值
     * @description OpenAI API 合约中的 run id 值。
     */
    run_id: string,
    /**
     * @title output item id 值
     * @description OpenAI API 合约中的 output item id 值。
     */
    output_item_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.EvalRunOutputItem>;

  /**
   * GET /evals/{eval_id}/runs/{run_id}/output_items
   * OpenAI API 中用于 get Eval Run Output Items 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取get Eval Run Output Items。
   */
  getEvalRunOutputItems: (
    /**
     * @title eval id 值
     * @description OpenAI API 合约中的 eval id 值。
     */
    eval_id: string,
    /**
     * @title run id 值
     * @description OpenAI API 合约中的 run id 值。
     */
    run_id: string,
    params: evals.GetEvalRunOutputItemsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.EvalRunOutputItemList>;

  /**
   * GET /evals/{eval_id}/runs
   * OpenAI API 中用于 get Eval Runs 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取get Eval Runs。
   */
  getEvalRuns: (
    /**
     * @title eval id 值
     * @description OpenAI API 合约中的 eval id 值。
     */
    eval_id: string,
    params: evals.GetEvalRunsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.EvalRunList>;

  /**
   * GET /evals
   * OpenAI API 中用于 list Evals 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Evals。
   */
  listEvals: (
    params: evals.ListEvalsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.EvalList>;

  /**
   * POST /evals/{eval_id}
   * OpenAI API 中用于 update Eval 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理update Eval。
   */
  updateEval: (
    /**
     * @title eval id 值
     * @description OpenAI API 合约中的 eval id 值。
     */
    eval_id: string,
    params: evals.UpdateEvalParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.Eval>;

};

// ============ files 模块 ============

export declare namespace files {
  export type ListFilesParams = {
    /**
     * @title purpose 值
     * @description OpenAI API 合约中的 purpose 值。
     */
    purpose?: string;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
  };

}

export type files = {
  /**
   * POST /files
   * OpenAI API 中用于 create File 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create File。
   */
  createFile: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateFileRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.OpenAIFile>;

  /**
   * DELETE /files/{file_id}
   * OpenAI API 中用于 delete File 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete File。
   */
  deleteFile: (
    /**
     * @title file id 值
     * @description OpenAI API 合约中的 file id 值。
     */
    file_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.DeleteFileResponse>;

  /**
   * GET /files/{file_id}/content
   * OpenAI API 中用于 download File 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取download File。
   */
  downloadFile: (
    /**
     * @title file id 值
     * @description OpenAI API 合约中的 file id 值。
     */
    file_id: string,
    requestInit?: RequestInit,
  ) => Promise<string>;

  /**
   * GET /files
   * OpenAI API 中用于 list Files 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Files。
   */
  listFiles: (
    params: files.ListFilesParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ListFilesResponse>;

  /**
   * GET /files/{file_id}
   * OpenAI API 中用于 retrieve File 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve File。
   */
  retrieveFile: (
    /**
     * @title file id 值
     * @description OpenAI API 合约中的 file id 值。
     */
    file_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.OpenAIFile>;

};

// ============ fineTuning 模块 ============

export declare namespace fineTuning {
  export type ListFineTuningCheckpointPermissionsParams = {
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id?: string;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'ascending' | 'descending';
  };

  export type ListFineTuningEventsParams = {
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
  };

  export type ListFineTuningJobCheckpointsParams = {
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
  };

  export type ListPaginatedFineTuningJobsParams = {
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title metadata 值
     * @description OpenAI API 合约中的 metadata 值。
     */
    metadata?: Record<any, string>;
  };

}

export type fineTuning = {
  /**
   * POST /fine_tuning/jobs/{fine_tuning_job_id}/cancel
   * OpenAI API 中用于 cancel Fine Tuning Job 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理cancel Fine Tuning Job。
   */
  cancelFineTuningJob: (
    /**
     * @title fine tuning job id 值
     * @description OpenAI API 合约中的 fine tuning job id 值。
     */
    fine_tuning_job_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.FineTuningJob>;

  /**
   * POST /fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions
   * OpenAI API 中用于 create Fine Tuning Checkpoint Permission 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Fine Tuning Checkpoint Permission。
   */
  createFineTuningCheckpointPermission: (
    /**
     * @title fine tuned model checkpoint 值
     * @description OpenAI API 合约中的 fine tuned model checkpoint 值。
     */
    fine_tuned_model_checkpoint: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateFineTuningCheckpointPermissionRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.ListFineTuningCheckpointPermissionResponse>;

  /**
   * POST /fine_tuning/jobs
   * OpenAI API 中用于 create Fine Tuning Job 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Fine Tuning Job。
   */
  createFineTuningJob: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateFineTuningJobRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.FineTuningJob>;

  /**
   * DELETE /fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions/{permission_id}
   * OpenAI API 中用于 delete Fine Tuning Checkpoint Permission 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Fine Tuning Checkpoint Permission。
   */
  deleteFineTuningCheckpointPermission: (
    /**
     * @title fine tuned model checkpoint 值
     * @description OpenAI API 合约中的 fine tuned model checkpoint 值。
     */
    fine_tuned_model_checkpoint: string,
    /**
     * @title permission id 值
     * @description OpenAI API 合约中的 permission id 值。
     */
    permission_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.DeleteFineTuningCheckpointPermissionResponse>;

  /**
   * GET /fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions
   * OpenAI API 中用于 list Fine Tuning Checkpoint Permissions 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Fine Tuning Checkpoint Permissions。
   */
  listFineTuningCheckpointPermissions: (
    /**
     * @title fine tuned model checkpoint 值
     * @description OpenAI API 合约中的 fine tuned model checkpoint 值。
     */
    fine_tuned_model_checkpoint: string,
    params: fineTuning.ListFineTuningCheckpointPermissionsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ListFineTuningCheckpointPermissionResponse>;

  /**
   * GET /fine_tuning/jobs/{fine_tuning_job_id}/events
   * OpenAI API 中用于 list Fine Tuning Events 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Fine Tuning Events。
   */
  listFineTuningEvents: (
    /**
     * @title fine tuning job id 值
     * @description OpenAI API 合约中的 fine tuning job id 值。
     */
    fine_tuning_job_id: string,
    params: fineTuning.ListFineTuningEventsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ListFineTuningJobEventsResponse>;

  /**
   * GET /fine_tuning/jobs/{fine_tuning_job_id}/checkpoints
   * OpenAI API 中用于 list Fine Tuning Job Checkpoints 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Fine Tuning Job Checkpoints。
   */
  listFineTuningJobCheckpoints: (
    /**
     * @title fine tuning job id 值
     * @description OpenAI API 合约中的 fine tuning job id 值。
     */
    fine_tuning_job_id: string,
    params: fineTuning.ListFineTuningJobCheckpointsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ListFineTuningJobCheckpointsResponse>;

  /**
   * GET /fine_tuning/jobs
   * OpenAI API 中用于 list Paginated Fine Tuning Jobs 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Paginated Fine Tuning Jobs。
   */
  listPaginatedFineTuningJobs: (
    params: fineTuning.ListPaginatedFineTuningJobsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ListPaginatedFineTuningJobsResponse>;

  /**
   * POST /fine_tuning/jobs/{fine_tuning_job_id}/pause
   * OpenAI API 中用于 pause Fine Tuning Job 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理pause Fine Tuning Job。
   */
  pauseFineTuningJob: (
    /**
     * @title fine tuning job id 值
     * @description OpenAI API 合约中的 fine tuning job id 值。
     */
    fine_tuning_job_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.FineTuningJob>;

  /**
   * POST /fine_tuning/jobs/{fine_tuning_job_id}/resume
   * OpenAI API 中用于 resume Fine Tuning Job 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理resume Fine Tuning Job。
   */
  resumeFineTuningJob: (
    /**
     * @title fine tuning job id 值
     * @description OpenAI API 合约中的 fine tuning job id 值。
     */
    fine_tuning_job_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.FineTuningJob>;

  /**
   * GET /fine_tuning/jobs/{fine_tuning_job_id}
   * OpenAI API 中用于 retrieve Fine Tuning Job 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve Fine Tuning Job。
   */
  retrieveFineTuningJob: (
    /**
     * @title fine tuning job id 值
     * @description OpenAI API 合约中的 fine tuning job id 值。
     */
    fine_tuning_job_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.FineTuningJob>;

  /**
   * POST /fine_tuning/alpha/graders/run
   * OpenAI API 中用于 run Grader 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理run Grader。
   */
  runGrader: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.RunGraderRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.RunGraderResponse>;

  /**
   * POST /fine_tuning/alpha/graders/validate
   * OpenAI API 中用于 validate Grader 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理validate Grader。
   */
  validateGrader: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.ValidateGraderRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.ValidateGraderResponse>;

};

// ============ groupOrganizationRoleAssignments 模块 ============

export declare namespace groupOrganizationRoleAssignments {
  export type ListGroupRoleAssignmentsParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
  };

}

export type groupOrganizationRoleAssignments = {
  /**
   * POST /organization/groups/{group_id}/roles
   * OpenAI API 中用于 assign Group Role 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理assign Group Role。
   */
  assignGroupRole: (
    /**
     * @title group id 值
     * @description OpenAI API 合约中的 group id 值。
     */
    group_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.PublicAssignOrganizationGroupRoleBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.GroupRoleAssignment>;

  /**
   * GET /organization/groups/{group_id}/roles
   * OpenAI API 中用于 list Group Role Assignments 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Group Role Assignments。
   */
  listGroupRoleAssignments: (
    /**
     * @title group id 值
     * @description OpenAI API 合约中的 group id 值。
     */
    group_id: string,
    params: groupOrganizationRoleAssignments.ListGroupRoleAssignmentsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.RoleListResource>;

  /**
   * GET /organization/groups/{group_id}/roles/{role_id}
   * OpenAI API 中用于 retrieve Group Role 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve Group Role。
   */
  retrieveGroupRole: (
    /**
     * @title group id 值
     * @description OpenAI API 合约中的 group id 值。
     */
    group_id: string,
    /**
     * @title role id 值
     * @description OpenAI API 合约中的 role id 值。
     */
    role_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.AssignedRoleDetails>;

  /**
   * DELETE /organization/groups/{group_id}/roles/{role_id}
   * OpenAI API 中用于 unassign Group Role 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理unassign Group Role。
   */
  unassignGroupRole: (
    /**
     * @title group id 值
     * @description OpenAI API 合约中的 group id 值。
     */
    group_id: string,
    /**
     * @title role id 值
     * @description OpenAI API 合约中的 role id 值。
     */
    role_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.DeletedRoleAssignmentResource>;

};

// ============ groupUsers 模块 ============

export declare namespace groupUsers {
  export type ListGroupUsersParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
  };

}

export type groupUsers = {
  /**
   * POST /organization/groups/{group_id}/users
   * OpenAI API 中用于 add Group User 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理add Group User。
   */
  addGroupUser: (
    /**
     * @title group id 值
     * @description OpenAI API 合约中的 group id 值。
     */
    group_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateGroupUserBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.GroupUserAssignment>;

  /**
   * GET /organization/groups/{group_id}/users
   * OpenAI API 中用于 list Group Users 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Group Users。
   */
  listGroupUsers: (
    /**
     * @title group id 值
     * @description OpenAI API 合约中的 group id 值。
     */
    group_id: string,
    params: groupUsers.ListGroupUsersParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.UserListResource>;

  /**
   * DELETE /organization/groups/{group_id}/users/{user_id}
   * OpenAI API 中用于 remove Group User 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理remove Group User。
   */
  removeGroupUser: (
    /**
     * @title group id 值
     * @description OpenAI API 合约中的 group id 值。
     */
    group_id: string,
    /**
     * @title user id 值
     * @description OpenAI API 合约中的 user id 值。
     */
    user_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.GroupUserDeletedResource>;

  /**
   * GET /organization/groups/{group_id}/users/{user_id}
   * OpenAI API 中用于 retrieve Group User 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve Group User。
   */
  retrieveGroupUser: (
    /**
     * @title group id 值
     * @description OpenAI API 合约中的 group id 值。
     */
    group_id: string,
    /**
     * @title user id 值
     * @description OpenAI API 合约中的 user id 值。
     */
    user_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.GroupMemberUser>;

};

// ============ groups 模块 ============

export declare namespace groups {
  export type ListGroupsParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
  };

}

export type groups = {
  /**
   * POST /organization/groups
   * OpenAI API 中用于 create Group 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Group。
   */
  createGroup: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateGroupBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.GroupResponse>;

  /**
   * DELETE /organization/groups/{group_id}
   * OpenAI API 中用于 delete Group 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Group。
   */
  deleteGroup: (
    /**
     * @title group id 值
     * @description OpenAI API 合约中的 group id 值。
     */
    group_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.GroupDeletedResource>;

  /**
   * GET /organization/groups
   * OpenAI API 中用于 list Groups 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Groups。
   */
  listGroups: (
    params: groups.ListGroupsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.GroupListResource>;

  /**
   * GET /organization/groups/{group_id}
   * OpenAI API 中用于 retrieve Group 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve Group。
   */
  retrieveGroup: (
    /**
     * @title group id 值
     * @description OpenAI API 合约中的 group id 值。
     */
    group_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.GroupResponse>;

  /**
   * POST /organization/groups/{group_id}
   * OpenAI API 中用于 update Group 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理update Group。
   */
  updateGroup: (
    /**
     * @title group id 值
     * @description OpenAI API 合约中的 group id 值。
     */
    group_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.UpdateGroupBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.GroupResourceWithSuccess>;

};

// ============ hostedTools 模块 ============

export type hostedTools = {
  /**
   * GET /organization/projects/{project_id}/hosted_tool_permissions
   * OpenAI API 中用于 retrieve Project Hosted Tool Permissions 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve Project Hosted Tool Permissions。
   */
  retrieveProjectHostedToolPermissions: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectHostedToolPermissions>;

  /**
   * POST /organization/projects/{project_id}/hosted_tool_permissions
   * OpenAI API 中用于 update Project Hosted Tool Permissions 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理update Project Hosted Tool Permissions。
   */
  updateProjectHostedToolPermissions: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.ProjectHostedToolPermissionsUpdateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectHostedToolPermissions>;

};

// ============ images 模块 ============

export type images = {
  /**
   * POST /images/generations
   * OpenAI API 中用于 create Image 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Image。
   */
  createImage: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateImageRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.ImagesResponse>;

  /**
   * POST /images/edits
   * OpenAI API 中用于 create Image Edit 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Image Edit。
   */
  createImageEdit: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateImageEditRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.ImagesResponse>;

  /**
   * POST /images/variations
   * OpenAI API 中用于 create Image Variation 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Image Variation。
   */
  createImageVariation: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateImageVariationRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.ImagesResponse>;

};

// ============ invites 模块 ============

export declare namespace invites {
  export type ListInvitesParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
  };

}

export type invites = {
  /**
   * DELETE /organization/invites/{invite_id}
   * OpenAI API 中用于 delete Invite 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Invite。
   */
  deleteInvite: (
    /**
     * @title invite id 值
     * @description OpenAI API 合约中的 invite id 值。
     */
    invite_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.InviteDeleteResponse>;

  /**
   * POST /organization/invites
   * OpenAI API 中用于 invite User 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理invite User。
   */
  inviteUser: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.InviteRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.Invite>;

  /**
   * GET /organization/invites
   * OpenAI API 中用于 list Invites 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Invites。
   */
  listInvites: (
    params: invites.ListInvitesParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.InviteListResponse>;

  /**
   * GET /organization/invites/{invite_id}
   * OpenAI API 中用于 retrieve Invite 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve Invite。
   */
  retrieveInvite: (
    /**
     * @title invite id 值
     * @description OpenAI API 合约中的 invite id 值。
     */
    invite_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.Invite>;

};

// ============ models 模块 ============

export type models = {
  /**
   * DELETE /models/{model}
   * OpenAI API 中用于 delete Model 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Model。
   */
  deleteModel: (
    /**
     * @title model 值
     * @description OpenAI API 合约中的 model 值。
     */
    model: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.DeleteModelResponse>;

  /**
   * GET /models
   * OpenAI API 中用于 list Models 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Models。
   */
  listModels: (
    requestInit?: RequestInit,
  ) => Promise<schemas.ListModelsResponse>;

  /**
   * GET /models/{model}
   * OpenAI API 中用于 retrieve Model 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve Model。
   */
  retrieveModel: (
    /**
     * @title model 值
     * @description OpenAI API 合约中的 model 值。
     */
    model: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.Model>;

};

// ============ moderations 模块 ============

export type moderations = {
  /**
   * POST /moderations
   * OpenAI API 中用于 create Moderation 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Moderation。
   */
  createModeration: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateModerationRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.CreateModerationResponse>;

};

// ============ projectGroupRoleAssignments 模块 ============

export declare namespace projectGroupRoleAssignments {
  export type ListProjectGroupRoleAssignmentsParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
  };

}

export type projectGroupRoleAssignments = {
  /**
   * POST /projects/{project_id}/groups/{group_id}/roles
   * OpenAI API 中用于 assign Project Group Role 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理assign Project Group Role。
   */
  assignProjectGroupRole: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title group id 值
     * @description OpenAI API 合约中的 group id 值。
     */
    group_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.PublicAssignOrganizationGroupRoleBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.GroupRoleAssignment>;

  /**
   * GET /projects/{project_id}/groups/{group_id}/roles
   * OpenAI API 中用于 list Project Group Role Assignments 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Project Group Role Assignments。
   */
  listProjectGroupRoleAssignments: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title group id 值
     * @description OpenAI API 合约中的 group id 值。
     */
    group_id: string,
    params: projectGroupRoleAssignments.ListProjectGroupRoleAssignmentsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.RoleListResource>;

  /**
   * GET /projects/{project_id}/groups/{group_id}/roles/{role_id}
   * OpenAI API 中用于 retrieve Project Group Role 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve Project Group Role。
   */
  retrieveProjectGroupRole: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title group id 值
     * @description OpenAI API 合约中的 group id 值。
     */
    group_id: string,
    /**
     * @title role id 值
     * @description OpenAI API 合约中的 role id 值。
     */
    role_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.AssignedRoleDetails>;

  /**
   * DELETE /projects/{project_id}/groups/{group_id}/roles/{role_id}
   * OpenAI API 中用于 unassign Project Group Role 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理unassign Project Group Role。
   */
  unassignProjectGroupRole: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title group id 值
     * @description OpenAI API 合约中的 group id 值。
     */
    group_id: string,
    /**
     * @title role id 值
     * @description OpenAI API 合约中的 role id 值。
     */
    role_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.DeletedRoleAssignmentResource>;

};

// ============ projectGroups 模块 ============

export declare namespace projectGroups {
  export type ListProjectGroupsParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
  };

  export type RetrieveProjectGroupParams = {
    /**
     * @title group type 值
     * @description OpenAI API 合约中的 group type 值。
     */
    group_type?: 'group' | 'tenant_group';
  };

}

export type projectGroups = {
  /**
   * POST /organization/projects/{project_id}/groups
   * OpenAI API 中用于 add Project Group 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理add Project Group。
   */
  addProjectGroup: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.InviteProjectGroupBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectGroup>;

  /**
   * GET /organization/projects/{project_id}/groups
   * OpenAI API 中用于 list Project Groups 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Project Groups。
   */
  listProjectGroups: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    params: projectGroups.ListProjectGroupsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectGroupListResource>;

  /**
   * DELETE /organization/projects/{project_id}/groups/{group_id}
   * OpenAI API 中用于 remove Project Group 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理remove Project Group。
   */
  removeProjectGroup: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title group id 值
     * @description OpenAI API 合约中的 group id 值。
     */
    group_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectGroupDeletedResource>;

  /**
   * GET /organization/projects/{project_id}/groups/{group_id}
   * OpenAI API 中用于 retrieve Project Group 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve Project Group。
   */
  retrieveProjectGroup: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title group id 值
     * @description OpenAI API 合约中的 group id 值。
     */
    group_id: string,
    params: projectGroups.RetrieveProjectGroupParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectGroup>;

};

// ============ projectUserRoleAssignments 模块 ============

export declare namespace projectUserRoleAssignments {
  export type ListProjectUserRoleAssignmentsParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
  };

}

export type projectUserRoleAssignments = {
  /**
   * POST /projects/{project_id}/users/{user_id}/roles
   * OpenAI API 中用于 assign Project User Role 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理assign Project User Role。
   */
  assignProjectUserRole: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title user id 值
     * @description OpenAI API 合约中的 user id 值。
     */
    user_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.PublicAssignOrganizationGroupRoleBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.UserRoleAssignment>;

  /**
   * GET /projects/{project_id}/users/{user_id}/roles
   * OpenAI API 中用于 list Project User Role Assignments 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Project User Role Assignments。
   */
  listProjectUserRoleAssignments: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title user id 值
     * @description OpenAI API 合约中的 user id 值。
     */
    user_id: string,
    params: projectUserRoleAssignments.ListProjectUserRoleAssignmentsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.RoleListResource>;

  /**
   * GET /projects/{project_id}/users/{user_id}/roles/{role_id}
   * OpenAI API 中用于 retrieve Project User Role 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve Project User Role。
   */
  retrieveProjectUserRole: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title user id 值
     * @description OpenAI API 合约中的 user id 值。
     */
    user_id: string,
    /**
     * @title role id 值
     * @description OpenAI API 合约中的 role id 值。
     */
    role_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.AssignedRoleDetails>;

  /**
   * DELETE /projects/{project_id}/users/{user_id}/roles/{role_id}
   * OpenAI API 中用于 unassign Project User Role 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理unassign Project User Role。
   */
  unassignProjectUserRole: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title user id 值
     * @description OpenAI API 合约中的 user id 值。
     */
    user_id: string,
    /**
     * @title role id 值
     * @description OpenAI API 合约中的 role id 值。
     */
    role_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.DeletedRoleAssignmentResource>;

};

// ============ projects 模块 ============

export declare namespace projects {
  export type ListProjectApiKeysParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title owner project access 值
     * @description OpenAI API 合约中的 owner project access 值。
     */
    owner_project_access?: 'active' | 'inactive' | 'any';
  };

  export type ListProjectRateLimitsParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title before 值
     * @description OpenAI API 合约中的 before 值。
     */
    before?: string;
  };

  export type ListProjectServiceAccountsParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
  };

  export type ListProjectUsersParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
  };

  export type ListProjectsParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title include archived 值
     * @description OpenAI API 合约中的 include archived 值。
     */
    include_archived?: boolean;
  };

}

export type projects = {
  /**
   * POST /organization/projects/{project_id}/archive
   * OpenAI API 中用于 archive Project 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理archive Project。
   */
  archiveProject: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.Project>;

  /**
   * POST /organization/projects
   * OpenAI API 中用于 create Project 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Project。
   */
  createProject: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.ProjectCreateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.Project>;

  /**
   * POST /organization/projects/{project_id}/service_accounts
   * OpenAI API 中用于 create Project Service Account 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Project Service Account。
   */
  createProjectServiceAccount: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.ProjectServiceAccountCreateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectServiceAccountCreateResponse>;

  /**
   * POST /organization/projects/{project_id}/users
   * OpenAI API 中用于 create Project User 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Project User。
   */
  createProjectUser: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.ProjectUserCreateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectUser>;

  /**
   * DELETE /organization/projects/{project_id}/api_keys/{api_key_id}
   * OpenAI API 中用于 delete Project Api Key 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Project Api Key。
   */
  deleteProjectApiKey: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title api key id 值
     * @description OpenAI API 合约中的 api key id 值。
     */
    api_key_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectApiKeyDeleteResponse>;

  /**
   * DELETE /organization/projects/{project_id}/model_permissions
   * OpenAI API 中用于 delete Project Model Permissions 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Project Model Permissions。
   */
  deleteProjectModelPermissions: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectModelPermissionsDeleteResponse>;

  /**
   * DELETE /organization/projects/{project_id}/service_accounts/{service_account_id}
   * OpenAI API 中用于 delete Project Service Account 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Project Service Account。
   */
  deleteProjectServiceAccount: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title service account id 值
     * @description OpenAI API 合约中的 service account id 值。
     */
    service_account_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectServiceAccountDeleteResponse>;

  /**
   * DELETE /organization/projects/{project_id}/users/{user_id}
   * OpenAI API 中用于 delete Project User 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Project User。
   */
  deleteProjectUser: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title user id 值
     * @description OpenAI API 合约中的 user id 值。
     */
    user_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectUserDeleteResponse>;

  /**
   * GET /organization/projects/{project_id}/api_keys
   * OpenAI API 中用于 list Project Api Keys 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Project Api Keys。
   */
  listProjectApiKeys: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    params: projects.ListProjectApiKeysParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectApiKeyListResponse>;

  /**
   * GET /organization/projects/{project_id}/rate_limits
   * OpenAI API 中用于 list Project Rate Limits 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Project Rate Limits。
   */
  listProjectRateLimits: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    params: projects.ListProjectRateLimitsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectRateLimitListResponse>;

  /**
   * GET /organization/projects/{project_id}/service_accounts
   * OpenAI API 中用于 list Project Service Accounts 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Project Service Accounts。
   */
  listProjectServiceAccounts: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    params: projects.ListProjectServiceAccountsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectServiceAccountListResponse>;

  /**
   * GET /organization/projects/{project_id}/users
   * OpenAI API 中用于 list Project Users 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Project Users。
   */
  listProjectUsers: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    params: projects.ListProjectUsersParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectUserListResponse>;

  /**
   * GET /organization/projects
   * OpenAI API 中用于 list Projects 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Projects。
   */
  listProjects: (
    params: projects.ListProjectsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectListResponse>;

  /**
   * POST /organization/projects/{project_id}
   * OpenAI API 中用于 modify Project 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理modify Project。
   */
  modifyProject: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.ProjectUpdateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.Project>;

  /**
   * POST /organization/projects/{project_id}/users/{user_id}
   * OpenAI API 中用于 modify Project User 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理modify Project User。
   */
  modifyProjectUser: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title user id 值
     * @description OpenAI API 合约中的 user id 值。
     */
    user_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.ProjectUserUpdateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectUser>;

  /**
   * GET /organization/projects/{project_id}
   * OpenAI API 中用于 retrieve Project 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve Project。
   */
  retrieveProject: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.Project>;

  /**
   * GET /organization/projects/{project_id}/api_keys/{api_key_id}
   * OpenAI API 中用于 retrieve Project Api Key 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve Project Api Key。
   */
  retrieveProjectApiKey: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title api key id 值
     * @description OpenAI API 合约中的 api key id 值。
     */
    api_key_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectApiKey>;

  /**
   * GET /organization/projects/{project_id}/model_permissions
   * OpenAI API 中用于 retrieve Project Model Permissions 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve Project Model Permissions。
   */
  retrieveProjectModelPermissions: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectModelPermissions>;

  /**
   * GET /organization/projects/{project_id}/service_accounts/{service_account_id}
   * OpenAI API 中用于 retrieve Project Service Account 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve Project Service Account。
   */
  retrieveProjectServiceAccount: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title service account id 值
     * @description OpenAI API 合约中的 service account id 值。
     */
    service_account_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectServiceAccount>;

  /**
   * GET /organization/projects/{project_id}/users/{user_id}
   * OpenAI API 中用于 retrieve Project User 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve Project User。
   */
  retrieveProjectUser: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title user id 值
     * @description OpenAI API 合约中的 user id 值。
     */
    user_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectUser>;

  /**
   * POST /organization/projects/{project_id}/model_permissions
   * OpenAI API 中用于 update Project Model Permissions 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理update Project Model Permissions。
   */
  updateProjectModelPermissions: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.ProjectModelPermissionsUpdateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectModelPermissions>;

  /**
   * POST /organization/projects/{project_id}/rate_limits/{rate_limit_id}
   * OpenAI API 中用于 update Project Rate Limits 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理update Project Rate Limits。
   */
  updateProjectRateLimits: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title rate limit id 值
     * @description OpenAI API 合约中的 rate limit id 值。
     */
    rate_limit_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.ProjectRateLimitUpdateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectRateLimit>;

  /**
   * POST /organization/projects/{project_id}/service_accounts/{service_account_id}
   * OpenAI API 中用于 update Project Service Account 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理update Project Service Account。
   */
  updateProjectServiceAccount: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title service account id 值
     * @description OpenAI API 合约中的 service account id 值。
     */
    service_account_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.UpdateProjectServiceAccountBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectServiceAccount>;

};

// ============ realtime 模块 ============

export type realtime = {
  /**
   * POST /realtime/calls/{call_id}/accept
   * OpenAI API 中用于 accept Realtime Call 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理accept Realtime Call。
   */
  acceptRealtimeCall: (
    /**
     * @title call id 值
     * @description OpenAI API 合约中的 call id 值。
     */
    call_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.RealtimeSessionCreateRequestGA,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * POST /realtime/calls
   * OpenAI API 中用于 create Realtime Call 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Realtime Call。
   */
  createRealtimeCall: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.RealtimeCallCreateRequest,
    requestInit?: RequestInit,
  ) => Promise<string>;

  /**
   * POST /realtime/client_secrets
   * OpenAI API 中用于 create Realtime Client Secret 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Realtime Client Secret。
   */
  createRealtimeClientSecret: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.RealtimeCreateClientSecretRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.RealtimeCreateClientSecretResponse>;

  /**
   * POST /realtime/sessions
   * OpenAI API 中用于 create Realtime Session 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Realtime Session。
   */
  createRealtimeSession: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.RealtimeSessionCreateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.RealtimeSessionCreateResponse>;

  /**
   * POST /realtime/transcription_sessions
   * OpenAI API 中用于 create Realtime Transcription Session 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Realtime Transcription Session。
   */
  createRealtimeTranscriptionSession: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.RealtimeTranscriptionSessionCreateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.RealtimeTranscriptionSessionCreateResponse>;

  /**
   * POST /realtime/translations/client_secrets
   * OpenAI API 中用于 create Realtime Translation Client Secret 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Realtime Translation Client Secret。
   */
  createRealtimeTranslationClientSecret: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.RealtimeTranslationClientSecretCreateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.RealtimeTranslationClientSecretCreateResponse>;

  /**
   * POST /realtime/calls/{call_id}/hangup
   * OpenAI API 中用于 hangup Realtime Call 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理hangup Realtime Call。
   */
  hangupRealtimeCall: (
    /**
     * @title call id 值
     * @description OpenAI API 合约中的 call id 值。
     */
    call_id: string,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * POST /realtime/calls/{call_id}/refer
   * OpenAI API 中用于 refer Realtime Call 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理refer Realtime Call。
   */
  referRealtimeCall: (
    /**
     * @title call id 值
     * @description OpenAI API 合约中的 call id 值。
     */
    call_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.RealtimeCallReferRequest,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * POST /realtime/calls/{call_id}/reject
   * OpenAI API 中用于 reject Realtime Call 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理reject Realtime Call。
   */
  rejectRealtimeCall: (
    /**
     * @title call id 值
     * @description OpenAI API 合约中的 call id 值。
     */
    call_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.RealtimeCallRejectRequest,
    requestInit?: RequestInit,
  ) => Promise<any>;

};

// ============ responses 模块 ============

export declare namespace responses {
  export type Beta_getResponseParams = {
    /**
     * @title include 值
     * @description OpenAI API 合约中的 include 值。
     */
    include?: Array<schemas.BetaIncludeEnum>;
    /**
     * @title stream 值
     * @description OpenAI API 合约中的 stream 值。
     */
    stream?: boolean;
    /**
     * @title starting after 值
     * @description OpenAI API 合约中的 starting after 值。
     */
    starting_after?: number;
    /**
     * @title include obfuscation 值
     * @description OpenAI API 合约中的 include obfuscation 值。
     */
    include_obfuscation?: boolean;
  };

  export type Beta_listInputItemsParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title include 值
     * @description OpenAI API 合约中的 include 值。
     */
    include?: Array<schemas.BetaIncludeEnum>;
  };

  export type GetResponseParams = {
    /**
     * @title include 值
     * @description OpenAI API 合约中的 include 值。
     */
    include?: Array<schemas.IncludeEnum>;
    /**
     * @title stream 值
     * @description OpenAI API 合约中的 stream 值。
     */
    stream?: boolean;
    /**
     * @title starting after 值
     * @description OpenAI API 合约中的 starting after 值。
     */
    starting_after?: number;
    /**
     * @title include obfuscation 值
     * @description OpenAI API 合约中的 include obfuscation 值。
     */
    include_obfuscation?: boolean;
  };

  export type ListInputItemsParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title include 值
     * @description OpenAI API 合约中的 include 值。
     */
    include?: Array<schemas.IncludeEnum>;
  };

}

export type responses = {
  /**
   * POST /responses/{response_id}/cancel?beta=true
   * OpenAI API 中用于 beta cancel Response 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理beta cancel Response。
   */
  beta_cancelResponse: (
    /**
     * @title response id 值
     * @description OpenAI API 合约中的 response id 值。
     */
    response_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.BetaResponse>;

  /**
   * POST /responses?beta=true
   * OpenAI API 中用于 beta create Response 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理beta create Response。
   */
  beta_createResponse: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.BetaCreateResponse,
    requestInit?: RequestInit,
  ) => Promise<schemas.BetaResponse>;

  /**
   * DELETE /responses/{response_id}?beta=true
   * OpenAI API 中用于 beta delete Response 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理beta delete Response。
   */
  beta_deleteResponse: (
    /**
     * @title response id 值
     * @description OpenAI API 合约中的 response id 值。
     */
    response_id: string,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * GET /responses/{response_id}?beta=true
   * OpenAI API 中用于 beta get Response 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取beta get Response。
   */
  beta_getResponse: (
    /**
     * @title response id 值
     * @description OpenAI API 合约中的 response id 值。
     */
    response_id: string,
    params: responses.Beta_getResponseParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.BetaResponse>;

  /**
   * GET /responses/{response_id}/input_items?beta=true
   * OpenAI API 中用于 beta list Input Items 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取beta list Input Items。
   */
  beta_listInputItems: (
    /**
     * @title response id 值
     * @description OpenAI API 合约中的 response id 值。
     */
    response_id: string,
    params: responses.Beta_listInputItemsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.BetaResponseItemList>;

  /**
   * POST /responses/{response_id}/cancel
   * OpenAI API 中用于 cancel Response 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理cancel Response。
   */
  cancelResponse: (
    /**
     * @title response id 值
     * @description OpenAI API 合约中的 response id 值。
     */
    response_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.Response>;

  /**
   * POST /responses
   * OpenAI API 中用于 create Response 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Response。
   */
  createResponse: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateResponse,
    requestInit?: RequestInit,
  ) => Promise<schemas.Response>;

  /**
   * DELETE /responses/{response_id}
   * OpenAI API 中用于 delete Response 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Response。
   */
  deleteResponse: (
    /**
     * @title response id 值
     * @description OpenAI API 合约中的 response id 值。
     */
    response_id: string,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * GET /responses/{response_id}
   * OpenAI API 中用于 get Response 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取get Response。
   */
  getResponse: (
    /**
     * @title response id 值
     * @description OpenAI API 合约中的 response id 值。
     */
    response_id: string,
    params: responses.GetResponseParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.Response>;

  /**
   * GET /responses/{response_id}/input_items
   * OpenAI API 中用于 list Input Items 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Input Items。
   */
  listInputItems: (
    /**
     * @title response id 值
     * @description OpenAI API 合约中的 response id 值。
     */
    response_id: string,
    params: responses.ListInputItemsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ResponseItemList>;

};

// ============ roles 模块 ============

export declare namespace roles {
  export type ListProjectRolesParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
  };

  export type ListRolesParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
  };

}

export type roles = {
  /**
   * POST /projects/{project_id}/roles
   * OpenAI API 中用于 create Project Role 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Project Role。
   */
  createProjectRole: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.PublicCreateOrganizationRoleBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.Role>;

  /**
   * POST /organization/roles
   * OpenAI API 中用于 create Role 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Role。
   */
  createRole: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.PublicCreateOrganizationRoleBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.Role>;

  /**
   * DELETE /projects/{project_id}/roles/{role_id}
   * OpenAI API 中用于 delete Project Role 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Project Role。
   */
  deleteProjectRole: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title role id 值
     * @description OpenAI API 合约中的 role id 值。
     */
    role_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.RoleDeletedResource>;

  /**
   * DELETE /organization/roles/{role_id}
   * OpenAI API 中用于 delete Role 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Role。
   */
  deleteRole: (
    /**
     * @title role id 值
     * @description OpenAI API 合约中的 role id 值。
     */
    role_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.RoleDeletedResource>;

  /**
   * GET /projects/{project_id}/roles
   * OpenAI API 中用于 list Project Roles 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Project Roles。
   */
  listProjectRoles: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    params: roles.ListProjectRolesParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.PublicRoleListResource>;

  /**
   * GET /organization/roles
   * OpenAI API 中用于 list Roles 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Roles。
   */
  listRoles: (
    params: roles.ListRolesParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.PublicRoleListResource>;

  /**
   * GET /projects/{project_id}/roles/{role_id}
   * OpenAI API 中用于 retrieve Project Role 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve Project Role。
   */
  retrieveProjectRole: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title role id 值
     * @description OpenAI API 合约中的 role id 值。
     */
    role_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.Role>;

  /**
   * GET /organization/roles/{role_id}
   * OpenAI API 中用于 retrieve Role 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve Role。
   */
  retrieveRole: (
    /**
     * @title role id 值
     * @description OpenAI API 合约中的 role id 值。
     */
    role_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.Role>;

  /**
   * POST /projects/{project_id}/roles/{role_id}
   * OpenAI API 中用于 update Project Role 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理update Project Role。
   */
  updateProjectRole: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title role id 值
     * @description OpenAI API 合约中的 role id 值。
     */
    role_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.PublicUpdateOrganizationRoleBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.Role>;

  /**
   * POST /organization/roles/{role_id}
   * OpenAI API 中用于 update Role 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理update Role。
   */
  updateRole: (
    /**
     * @title role id 值
     * @description OpenAI API 合约中的 role id 值。
     */
    role_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.PublicUpdateOrganizationRoleBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.Role>;

};

// ============ skills 模块 ============

export declare namespace skills {
  export type ListSkillVersionsParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: schemas.OrderEnum;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
  };

  export type ListSkillsParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: schemas.OrderEnum;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
  };

}

export type skills = {
  /**
   * POST /skills
   * OpenAI API 中用于 Create Skill 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Create Skill。
   */
  CreateSkill: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateSkillBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.SkillResource>;

  /**
   * POST /skills/{skill_id}/versions
   * OpenAI API 中用于 Create Skill Version 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Create Skill Version。
   */
  CreateSkillVersion: (
    /**
     * @title skill id 值
     * @description OpenAI API 合约中的 skill id 值。
     */
    skill_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateSkillVersionBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.SkillVersionResource>;

  /**
   * DELETE /skills/{skill_id}
   * OpenAI API 中用于 Delete Skill 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Delete Skill。
   */
  DeleteSkill: (
    /**
     * @title skill id 值
     * @description OpenAI API 合约中的 skill id 值。
     */
    skill_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.DeletedSkillResource>;

  /**
   * DELETE /skills/{skill_id}/versions/{version}
   * OpenAI API 中用于 Delete Skill Version 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Delete Skill Version。
   */
  DeleteSkillVersion: (
    /**
     * @title skill id 值
     * @description OpenAI API 合约中的 skill id 值。
     */
    skill_id: string,
    /**
     * @title version 值
     * @description OpenAI API 合约中的 version 值。
     */
    version: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.DeletedSkillVersionResource>;

  /**
   * GET /skills/{skill_id}
   * OpenAI API 中用于 Get Skill 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取Get Skill。
   */
  GetSkill: (
    /**
     * @title skill id 值
     * @description OpenAI API 合约中的 skill id 值。
     */
    skill_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.SkillResource>;

  /**
   * GET /skills/{skill_id}/content
   * OpenAI API 中用于 Get Skill Content 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取Get Skill Content。
   */
  GetSkillContent: (
    /**
     * @title skill id 值
     * @description OpenAI API 合约中的 skill id 值。
     */
    skill_id: string,
    requestInit?: RequestInit,
  ) => Promise<Blob>;

  /**
   * GET /skills/{skill_id}/versions/{version}
   * OpenAI API 中用于 Get Skill Version 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取Get Skill Version。
   */
  GetSkillVersion: (
    /**
     * @title skill id 值
     * @description OpenAI API 合约中的 skill id 值。
     */
    skill_id: string,
    /**
     * @title version 值
     * @description OpenAI API 合约中的 version 值。
     */
    version: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.SkillVersionResource>;

  /**
   * GET /skills/{skill_id}/versions/{version}/content
   * OpenAI API 中用于 Get Skill Version Content 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取Get Skill Version Content。
   */
  GetSkillVersionContent: (
    /**
     * @title skill id 值
     * @description OpenAI API 合约中的 skill id 值。
     */
    skill_id: string,
    /**
     * @title version 值
     * @description OpenAI API 合约中的 version 值。
     */
    version: string,
    requestInit?: RequestInit,
  ) => Promise<Blob>;

  /**
   * GET /skills/{skill_id}/versions
   * OpenAI API 中用于 List Skill Versions 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取List Skill Versions。
   */
  ListSkillVersions: (
    /**
     * @title skill id 值
     * @description OpenAI API 合约中的 skill id 值。
     */
    skill_id: string,
    params: skills.ListSkillVersionsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.SkillVersionListResource>;

  /**
   * GET /skills
   * OpenAI API 中用于 List Skills 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取List Skills。
   */
  ListSkills: (
    params: skills.ListSkillsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.SkillListResource>;

  /**
   * POST /skills/{skill_id}
   * OpenAI API 中用于 Update Skill Default Version 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Update Skill Default Version。
   */
  UpdateSkillDefaultVersion: (
    /**
     * @title skill id 值
     * @description OpenAI API 合约中的 skill id 值。
     */
    skill_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.SetDefaultSkillVersionBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.SkillResource>;

};

// ============ spendAlerts 模块 ============

export declare namespace spendAlerts {
  export type ListOrganizationSpendAlertsParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title before 值
     * @description OpenAI API 合约中的 before 值。
     */
    before?: string;
  };

  export type ListProjectSpendAlertsParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title before 值
     * @description OpenAI API 合约中的 before 值。
     */
    before?: string;
  };

}

export type spendAlerts = {
  /**
   * POST /organization/spend_alerts
   * OpenAI API 中用于 create Organization Spend Alert 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Organization Spend Alert。
   */
  createOrganizationSpendAlert: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateSpendAlertBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.OrganizationSpendAlert>;

  /**
   * POST /organization/projects/{project_id}/spend_alerts
   * OpenAI API 中用于 create Project Spend Alert 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Project Spend Alert。
   */
  createProjectSpendAlert: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateSpendAlertBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectSpendAlert>;

  /**
   * DELETE /organization/spend_alerts/{alert_id}
   * OpenAI API 中用于 delete Organization Spend Alert 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Organization Spend Alert。
   */
  deleteOrganizationSpendAlert: (
    /**
     * @title alert id 值
     * @description OpenAI API 合约中的 alert id 值。
     */
    alert_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.OrganizationSpendAlertDeletedResource>;

  /**
   * DELETE /organization/projects/{project_id}/spend_alerts/{alert_id}
   * OpenAI API 中用于 delete Project Spend Alert 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Project Spend Alert。
   */
  deleteProjectSpendAlert: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title alert id 值
     * @description OpenAI API 合约中的 alert id 值。
     */
    alert_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectSpendAlertDeletedResource>;

  /**
   * GET /organization/spend_alerts
   * OpenAI API 中用于 list Organization Spend Alerts 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Organization Spend Alerts。
   */
  listOrganizationSpendAlerts: (
    params: spendAlerts.ListOrganizationSpendAlertsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.OrganizationSpendAlertListResource>;

  /**
   * GET /organization/projects/{project_id}/spend_alerts
   * OpenAI API 中用于 list Project Spend Alerts 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Project Spend Alerts。
   */
  listProjectSpendAlerts: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    params: spendAlerts.ListProjectSpendAlertsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectSpendAlertListResource>;

  /**
   * GET /organization/spend_alerts/{alert_id}
   * OpenAI API 中用于 retrieve Organization Spend Alert 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve Organization Spend Alert。
   */
  retrieveOrganizationSpendAlert: (
    /**
     * @title alert id 值
     * @description OpenAI API 合约中的 alert id 值。
     */
    alert_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.OrganizationSpendAlert>;

  /**
   * GET /organization/projects/{project_id}/spend_alerts/{alert_id}
   * OpenAI API 中用于 retrieve Project Spend Alert 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve Project Spend Alert。
   */
  retrieveProjectSpendAlert: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title alert id 值
     * @description OpenAI API 合约中的 alert id 值。
     */
    alert_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectSpendAlert>;

  /**
   * POST /organization/spend_alerts/{alert_id}
   * OpenAI API 中用于 update Organization Spend Alert 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理update Organization Spend Alert。
   */
  updateOrganizationSpendAlert: (
    /**
     * @title alert id 值
     * @description OpenAI API 合约中的 alert id 值。
     */
    alert_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateSpendAlertBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.OrganizationSpendAlert>;

  /**
   * POST /organization/projects/{project_id}/spend_alerts/{alert_id}
   * OpenAI API 中用于 update Project Spend Alert 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理update Project Spend Alert。
   */
  updateProjectSpendAlert: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title alert id 值
     * @description OpenAI API 合约中的 alert id 值。
     */
    alert_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateSpendAlertBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectSpendAlert>;

};

// ============ uploads 模块 ============

export type uploads = {
  /**
   * POST /uploads/{upload_id}/parts
   * OpenAI API 中用于 add Upload Part 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理add Upload Part。
   */
  addUploadPart: (
    /**
     * @title upload id 值
     * @description OpenAI API 合约中的 upload id 值。
     */
    upload_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.AddUploadPartRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.UploadPart>;

  /**
   * POST /uploads/{upload_id}/cancel
   * OpenAI API 中用于 cancel Upload 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理cancel Upload。
   */
  cancelUpload: (
    /**
     * @title upload id 值
     * @description OpenAI API 合约中的 upload id 值。
     */
    upload_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.Upload>;

  /**
   * POST /uploads/{upload_id}/complete
   * OpenAI API 中用于 complete Upload 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理complete Upload。
   */
  completeUpload: (
    /**
     * @title upload id 值
     * @description OpenAI API 合约中的 upload id 值。
     */
    upload_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CompleteUploadRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.Upload>;

  /**
   * POST /uploads
   * OpenAI API 中用于 create Upload 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Upload。
   */
  createUpload: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateUploadRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.Upload>;

};

// ============ usage 模块 ============

export declare namespace usage {
  export type UsageAudioSpeechesParams = {
    /**
     * @title start time 值
     * @description OpenAI API 合约中的 start time 值。
     */
    start_time: number;
    /**
     * @title end time 值
     * @description OpenAI API 合约中的 end time 值。
     */
    end_time?: number;
    /**
     * @title bucket width 值
     * @description OpenAI API 合约中的 bucket width 值。
     */
    bucket_width?: '1m' | '1h' | '1d';
    /**
     * @title project ids 值
     * @description OpenAI API 合约中的 project ids 值。
     */
    project_ids?: Array<string>;
    /**
     * @title user ids 值
     * @description OpenAI API 合约中的 user ids 值。
     */
    user_ids?: Array<string>;
    /**
     * @title api key ids 值
     * @description OpenAI API 合约中的 api key ids 值。
     */
    api_key_ids?: Array<string>;
    /**
     * @title models 值
     * @description OpenAI API 合约中的 models 值。
     */
    models?: Array<string>;
    /**
     * @title group by 值
     * @description OpenAI API 合约中的 group by 值。
     */
    group_by?: Array<'project_id' | 'user_id' | 'api_key_id' | 'model'>;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title page 值
     * @description OpenAI API 合约中的 page 值。
     */
    page?: string;
  };

  export type UsageAudioTranscriptionsParams = {
    /**
     * @title start time 值
     * @description OpenAI API 合约中的 start time 值。
     */
    start_time: number;
    /**
     * @title end time 值
     * @description OpenAI API 合约中的 end time 值。
     */
    end_time?: number;
    /**
     * @title bucket width 值
     * @description OpenAI API 合约中的 bucket width 值。
     */
    bucket_width?: '1m' | '1h' | '1d';
    /**
     * @title project ids 值
     * @description OpenAI API 合约中的 project ids 值。
     */
    project_ids?: Array<string>;
    /**
     * @title user ids 值
     * @description OpenAI API 合约中的 user ids 值。
     */
    user_ids?: Array<string>;
    /**
     * @title api key ids 值
     * @description OpenAI API 合约中的 api key ids 值。
     */
    api_key_ids?: Array<string>;
    /**
     * @title models 值
     * @description OpenAI API 合约中的 models 值。
     */
    models?: Array<string>;
    /**
     * @title group by 值
     * @description OpenAI API 合约中的 group by 值。
     */
    group_by?: Array<'project_id' | 'user_id' | 'api_key_id' | 'model'>;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title page 值
     * @description OpenAI API 合约中的 page 值。
     */
    page?: string;
  };

  export type UsageCodeInterpreterSessionsParams = {
    /**
     * @title start time 值
     * @description OpenAI API 合约中的 start time 值。
     */
    start_time: number;
    /**
     * @title end time 值
     * @description OpenAI API 合约中的 end time 值。
     */
    end_time?: number;
    /**
     * @title bucket width 值
     * @description OpenAI API 合约中的 bucket width 值。
     */
    bucket_width?: '1m' | '1h' | '1d';
    /**
     * @title project ids 值
     * @description OpenAI API 合约中的 project ids 值。
     */
    project_ids?: Array<string>;
    /**
     * @title group by 值
     * @description OpenAI API 合约中的 group by 值。
     */
    group_by?: Array<'project_id'>;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title page 值
     * @description OpenAI API 合约中的 page 值。
     */
    page?: string;
  };

  export type UsageCompletionsParams = {
    /**
     * @title start time 值
     * @description OpenAI API 合约中的 start time 值。
     */
    start_time: number;
    /**
     * @title end time 值
     * @description OpenAI API 合约中的 end time 值。
     */
    end_time?: number;
    /**
     * @title bucket width 值
     * @description OpenAI API 合约中的 bucket width 值。
     */
    bucket_width?: '1m' | '1h' | '1d';
    /**
     * @title project ids 值
     * @description OpenAI API 合约中的 project ids 值。
     */
    project_ids?: Array<string>;
    /**
     * @title user ids 值
     * @description OpenAI API 合约中的 user ids 值。
     */
    user_ids?: Array<string>;
    /**
     * @title api key ids 值
     * @description OpenAI API 合约中的 api key ids 值。
     */
    api_key_ids?: Array<string>;
    /**
     * @title models 值
     * @description OpenAI API 合约中的 models 值。
     */
    models?: Array<string>;
    /**
     * @title batch 值
     * @description OpenAI API 合约中的 batch 值。
     */
    batch?: boolean;
    /**
     * @title group by 值
     * @description OpenAI API 合约中的 group by 值。
     */
    group_by?: Array<'project_id' | 'user_id' | 'api_key_id' | 'model' | 'batch' | 'service_tier'>;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title page 值
     * @description OpenAI API 合约中的 page 值。
     */
    page?: string;
  };

  export type UsageCostsParams = {
    /**
     * @title start time 值
     * @description OpenAI API 合约中的 start time 值。
     */
    start_time: number;
    /**
     * @title end time 值
     * @description OpenAI API 合约中的 end time 值。
     */
    end_time?: number;
    /**
     * @title bucket width 值
     * @description OpenAI API 合约中的 bucket width 值。
     */
    bucket_width?: '1d';
    /**
     * @title project ids 值
     * @description OpenAI API 合约中的 project ids 值。
     */
    project_ids?: Array<string>;
    /**
     * @title api key ids 值
     * @description OpenAI API 合约中的 api key ids 值。
     */
    api_key_ids?: Array<string>;
    /**
     * @title group by 值
     * @description OpenAI API 合约中的 group by 值。
     */
    group_by?: Array<'project_id' | 'line_item' | 'api_key_id'>;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title page 值
     * @description OpenAI API 合约中的 page 值。
     */
    page?: string;
  };

  export type UsageEmbeddingsParams = {
    /**
     * @title start time 值
     * @description OpenAI API 合约中的 start time 值。
     */
    start_time: number;
    /**
     * @title end time 值
     * @description OpenAI API 合约中的 end time 值。
     */
    end_time?: number;
    /**
     * @title bucket width 值
     * @description OpenAI API 合约中的 bucket width 值。
     */
    bucket_width?: '1m' | '1h' | '1d';
    /**
     * @title project ids 值
     * @description OpenAI API 合约中的 project ids 值。
     */
    project_ids?: Array<string>;
    /**
     * @title user ids 值
     * @description OpenAI API 合约中的 user ids 值。
     */
    user_ids?: Array<string>;
    /**
     * @title api key ids 值
     * @description OpenAI API 合约中的 api key ids 值。
     */
    api_key_ids?: Array<string>;
    /**
     * @title models 值
     * @description OpenAI API 合约中的 models 值。
     */
    models?: Array<string>;
    /**
     * @title group by 值
     * @description OpenAI API 合约中的 group by 值。
     */
    group_by?: Array<'project_id' | 'user_id' | 'api_key_id' | 'model'>;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title page 值
     * @description OpenAI API 合约中的 page 值。
     */
    page?: string;
  };

  export type UsageFileSearchCallsParams = {
    /**
     * @title start time 值
     * @description OpenAI API 合约中的 start time 值。
     */
    start_time: number;
    /**
     * @title end time 值
     * @description OpenAI API 合约中的 end time 值。
     */
    end_time?: number;
    /**
     * @title bucket width 值
     * @description OpenAI API 合约中的 bucket width 值。
     */
    bucket_width?: '1m' | '1h' | '1d';
    /**
     * @title project ids 值
     * @description OpenAI API 合约中的 project ids 值。
     */
    project_ids?: Array<string>;
    /**
     * @title user ids 值
     * @description OpenAI API 合约中的 user ids 值。
     */
    user_ids?: Array<string>;
    /**
     * @title api key ids 值
     * @description OpenAI API 合约中的 api key ids 值。
     */
    api_key_ids?: Array<string>;
    /**
     * @title vector store ids 值
     * @description OpenAI API 合约中的 vector store ids 值。
     */
    vector_store_ids?: Array<string>;
    /**
     * @title group by 值
     * @description OpenAI API 合约中的 group by 值。
     */
    group_by?: Array<'project_id' | 'user_id' | 'api_key_id' | 'vector_store_id'>;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title page 值
     * @description OpenAI API 合约中的 page 值。
     */
    page?: string;
  };

  export type UsageImagesParams = {
    /**
     * @title start time 值
     * @description OpenAI API 合约中的 start time 值。
     */
    start_time: number;
    /**
     * @title end time 值
     * @description OpenAI API 合约中的 end time 值。
     */
    end_time?: number;
    /**
     * @title bucket width 值
     * @description OpenAI API 合约中的 bucket width 值。
     */
    bucket_width?: '1m' | '1h' | '1d';
    /**
     * @title sources 值
     * @description OpenAI API 合约中的 sources 值。
     */
    sources?: Array<'image.generation' | 'image.edit' | 'image.variation'>;
    /**
     * @title sizes 值
     * @description OpenAI API 合约中的 sizes 值。
     */
    sizes?: Array<'256x256' | '512x512' | '1024x1024' | '1792x1792' | '1024x1792'>;
    /**
     * @title project ids 值
     * @description OpenAI API 合约中的 project ids 值。
     */
    project_ids?: Array<string>;
    /**
     * @title user ids 值
     * @description OpenAI API 合约中的 user ids 值。
     */
    user_ids?: Array<string>;
    /**
     * @title api key ids 值
     * @description OpenAI API 合约中的 api key ids 值。
     */
    api_key_ids?: Array<string>;
    /**
     * @title models 值
     * @description OpenAI API 合约中的 models 值。
     */
    models?: Array<string>;
    /**
     * @title group by 值
     * @description OpenAI API 合约中的 group by 值。
     */
    group_by?: Array<'project_id' | 'user_id' | 'api_key_id' | 'model' | 'size' | 'source'>;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title page 值
     * @description OpenAI API 合约中的 page 值。
     */
    page?: string;
  };

  export type UsageModerationsParams = {
    /**
     * @title start time 值
     * @description OpenAI API 合约中的 start time 值。
     */
    start_time: number;
    /**
     * @title end time 值
     * @description OpenAI API 合约中的 end time 值。
     */
    end_time?: number;
    /**
     * @title bucket width 值
     * @description OpenAI API 合约中的 bucket width 值。
     */
    bucket_width?: '1m' | '1h' | '1d';
    /**
     * @title project ids 值
     * @description OpenAI API 合约中的 project ids 值。
     */
    project_ids?: Array<string>;
    /**
     * @title user ids 值
     * @description OpenAI API 合约中的 user ids 值。
     */
    user_ids?: Array<string>;
    /**
     * @title api key ids 值
     * @description OpenAI API 合约中的 api key ids 值。
     */
    api_key_ids?: Array<string>;
    /**
     * @title models 值
     * @description OpenAI API 合约中的 models 值。
     */
    models?: Array<string>;
    /**
     * @title group by 值
     * @description OpenAI API 合约中的 group by 值。
     */
    group_by?: Array<'project_id' | 'user_id' | 'api_key_id' | 'model'>;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title page 值
     * @description OpenAI API 合约中的 page 值。
     */
    page?: string;
  };

  export type UsageVectorStoresParams = {
    /**
     * @title start time 值
     * @description OpenAI API 合约中的 start time 值。
     */
    start_time: number;
    /**
     * @title end time 值
     * @description OpenAI API 合约中的 end time 值。
     */
    end_time?: number;
    /**
     * @title bucket width 值
     * @description OpenAI API 合约中的 bucket width 值。
     */
    bucket_width?: '1m' | '1h' | '1d';
    /**
     * @title project ids 值
     * @description OpenAI API 合约中的 project ids 值。
     */
    project_ids?: Array<string>;
    /**
     * @title group by 值
     * @description OpenAI API 合约中的 group by 值。
     */
    group_by?: Array<'project_id'>;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title page 值
     * @description OpenAI API 合约中的 page 值。
     */
    page?: string;
  };

  export type UsageWebSearchCallsParams = {
    /**
     * @title start time 值
     * @description OpenAI API 合约中的 start time 值。
     */
    start_time: number;
    /**
     * @title end time 值
     * @description OpenAI API 合约中的 end time 值。
     */
    end_time?: number;
    /**
     * @title bucket width 值
     * @description OpenAI API 合约中的 bucket width 值。
     */
    bucket_width?: '1m' | '1h' | '1d';
    /**
     * @title project ids 值
     * @description OpenAI API 合约中的 project ids 值。
     */
    project_ids?: Array<string>;
    /**
     * @title user ids 值
     * @description OpenAI API 合约中的 user ids 值。
     */
    user_ids?: Array<string>;
    /**
     * @title api key ids 值
     * @description OpenAI API 合约中的 api key ids 值。
     */
    api_key_ids?: Array<string>;
    /**
     * @title models 值
     * @description OpenAI API 合约中的 models 值。
     */
    models?: Array<string>;
    /**
     * @title context levels 值
     * @description OpenAI API 合约中的 context levels 值。
     */
    context_levels?: Array<'low' | 'medium' | 'high'>;
    /**
     * @title group by 值
     * @description OpenAI API 合约中的 group by 值。
     */
    group_by?: Array<'project_id' | 'user_id' | 'api_key_id' | 'model' | 'context_level'>;
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title page 值
     * @description OpenAI API 合约中的 page 值。
     */
    page?: string;
  };

}

export type usage = {
  /**
   * GET /organization/usage/audio_speeches
   * OpenAI API 中用于 usage Audio Speeches 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取usage Audio Speeches。
   */
  usageAudioSpeeches: (
    params: usage.UsageAudioSpeechesParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.UsageResponse>;

  /**
   * GET /organization/usage/audio_transcriptions
   * OpenAI API 中用于 usage Audio Transcriptions 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取usage Audio Transcriptions。
   */
  usageAudioTranscriptions: (
    params: usage.UsageAudioTranscriptionsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.UsageResponse>;

  /**
   * GET /organization/usage/code_interpreter_sessions
   * OpenAI API 中用于 usage Code Interpreter Sessions 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取usage Code Interpreter Sessions。
   */
  usageCodeInterpreterSessions: (
    params: usage.UsageCodeInterpreterSessionsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.UsageResponse>;

  /**
   * GET /organization/usage/completions
   * OpenAI API 中用于 usage Completions 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取usage Completions。
   */
  usageCompletions: (
    params: usage.UsageCompletionsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.UsageResponse>;

  /**
   * GET /organization/costs
   * OpenAI API 中用于 usage Costs 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取usage Costs。
   */
  usageCosts: (
    params: usage.UsageCostsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.UsageResponse>;

  /**
   * GET /organization/usage/embeddings
   * OpenAI API 中用于 usage Embeddings 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取usage Embeddings。
   */
  usageEmbeddings: (
    params: usage.UsageEmbeddingsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.UsageResponse>;

  /**
   * GET /organization/usage/file_search_calls
   * OpenAI API 中用于 usage File Search Calls 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取usage File Search Calls。
   */
  usageFileSearchCalls: (
    params: usage.UsageFileSearchCallsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.UsageResponse>;

  /**
   * GET /organization/usage/images
   * OpenAI API 中用于 usage Images 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取usage Images。
   */
  usageImages: (
    params: usage.UsageImagesParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.UsageResponse>;

  /**
   * GET /organization/usage/moderations
   * OpenAI API 中用于 usage Moderations 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取usage Moderations。
   */
  usageModerations: (
    params: usage.UsageModerationsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.UsageResponse>;

  /**
   * GET /organization/usage/vector_stores
   * OpenAI API 中用于 usage Vector Stores 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取usage Vector Stores。
   */
  usageVectorStores: (
    params: usage.UsageVectorStoresParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.UsageResponse>;

  /**
   * GET /organization/usage/web_search_calls
   * OpenAI API 中用于 usage Web Search Calls 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取usage Web Search Calls。
   */
  usageWebSearchCalls: (
    params: usage.UsageWebSearchCallsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.UsageResponse>;

};

// ============ userOrganizationRoleAssignments 模块 ============

export declare namespace userOrganizationRoleAssignments {
  export type ListUserRoleAssignmentsParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
  };

}

export type userOrganizationRoleAssignments = {
  /**
   * POST /organization/users/{user_id}/roles
   * OpenAI API 中用于 assign User Role 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理assign User Role。
   */
  assignUserRole: (
    /**
     * @title user id 值
     * @description OpenAI API 合约中的 user id 值。
     */
    user_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.PublicAssignOrganizationGroupRoleBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.UserRoleAssignment>;

  /**
   * GET /organization/users/{user_id}/roles
   * OpenAI API 中用于 list User Role Assignments 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list User Role Assignments。
   */
  listUserRoleAssignments: (
    /**
     * @title user id 值
     * @description OpenAI API 合约中的 user id 值。
     */
    user_id: string,
    params: userOrganizationRoleAssignments.ListUserRoleAssignmentsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.RoleListResource>;

  /**
   * GET /organization/users/{user_id}/roles/{role_id}
   * OpenAI API 中用于 retrieve User Role 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve User Role。
   */
  retrieveUserRole: (
    /**
     * @title user id 值
     * @description OpenAI API 合约中的 user id 值。
     */
    user_id: string,
    /**
     * @title role id 值
     * @description OpenAI API 合约中的 role id 值。
     */
    role_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.AssignedRoleDetails>;

  /**
   * DELETE /organization/users/{user_id}/roles/{role_id}
   * OpenAI API 中用于 unassign User Role 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理unassign User Role。
   */
  unassignUserRole: (
    /**
     * @title user id 值
     * @description OpenAI API 合约中的 user id 值。
     */
    user_id: string,
    /**
     * @title role id 值
     * @description OpenAI API 合约中的 role id 值。
     */
    role_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.DeletedRoleAssignmentResource>;

};

// ============ users 模块 ============

export declare namespace users {
  export type ListUsersParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title emails 值
     * @description OpenAI API 合约中的 emails 值。
     */
    emails?: Array<string>;
  };

}

export type users = {
  /**
   * DELETE /organization/users/{user_id}
   * OpenAI API 中用于 delete User 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete User。
   */
  deleteUser: (
    /**
     * @title user id 值
     * @description OpenAI API 合约中的 user id 值。
     */
    user_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.UserDeleteResponse>;

  /**
   * GET /organization/users
   * OpenAI API 中用于 list Users 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Users。
   */
  listUsers: (
    params: users.ListUsersParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.UserListResponse>;

  /**
   * POST /organization/users/{user_id}
   * OpenAI API 中用于 modify User 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理modify User。
   */
  modifyUser: (
    /**
     * @title user id 值
     * @description OpenAI API 合约中的 user id 值。
     */
    user_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.UserRoleUpdateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.User>;

  /**
   * GET /organization/users/{user_id}
   * OpenAI API 中用于 retrieve User 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve User。
   */
  retrieveUser: (
    /**
     * @title user id 值
     * @description OpenAI API 合约中的 user id 值。
     */
    user_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.User>;

};

// ============ vectorStores 模块 ============

export declare namespace vectorStores {
  export type ListFilesInVectorStoreBatchParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title before 值
     * @description OpenAI API 合约中的 before 值。
     */
    before?: string;
    /**
     * @title filter 值
     * @description OpenAI API 合约中的 filter 值。
     */
    filter?: 'in_progress' | 'completed' | 'failed' | 'cancelled';
  };

  export type ListVectorStoreFilesParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title before 值
     * @description OpenAI API 合约中的 before 值。
     */
    before?: string;
    /**
     * @title filter 值
     * @description OpenAI API 合约中的 filter 值。
     */
    filter?: 'in_progress' | 'completed' | 'failed' | 'cancelled';
  };

  export type ListVectorStoresParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: 'asc' | 'desc';
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
    /**
     * @title before 值
     * @description OpenAI API 合约中的 before 值。
     */
    before?: string;
  };

}

export type vectorStores = {
  /**
   * POST /vector_stores/{vector_store_id}/file_batches/{batch_id}/cancel
   * OpenAI API 中用于 cancel Vector Store File Batch 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理cancel Vector Store File Batch。
   */
  cancelVectorStoreFileBatch: (
    /**
     * @title vector store id 值
     * @description OpenAI API 合约中的 vector store id 值。
     */
    vector_store_id: string,
    /**
     * @title batch id 值
     * @description OpenAI API 合约中的 batch id 值。
     */
    batch_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.VectorStoreFileBatchObject>;

  /**
   * POST /vector_stores
   * OpenAI API 中用于 create Vector Store 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Vector Store。
   */
  createVectorStore: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateVectorStoreRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.VectorStoreObject>;

  /**
   * POST /vector_stores/{vector_store_id}/files
   * OpenAI API 中用于 create Vector Store File 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Vector Store File。
   */
  createVectorStoreFile: (
    /**
     * @title vector store id 值
     * @description OpenAI API 合约中的 vector store id 值。
     */
    vector_store_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateVectorStoreFileRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.VectorStoreFileObject>;

  /**
   * POST /vector_stores/{vector_store_id}/file_batches
   * OpenAI API 中用于 create Vector Store File Batch 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Vector Store File Batch。
   */
  createVectorStoreFileBatch: (
    /**
     * @title vector store id 值
     * @description OpenAI API 合约中的 vector store id 值。
     */
    vector_store_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateVectorStoreFileBatchRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.VectorStoreFileBatchObject>;

  /**
   * DELETE /vector_stores/{vector_store_id}
   * OpenAI API 中用于 delete Vector Store 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Vector Store。
   */
  deleteVectorStore: (
    /**
     * @title vector store id 值
     * @description OpenAI API 合约中的 vector store id 值。
     */
    vector_store_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.DeleteVectorStoreResponse>;

  /**
   * DELETE /vector_stores/{vector_store_id}/files/{file_id}
   * OpenAI API 中用于 delete Vector Store File 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理delete Vector Store File。
   */
  deleteVectorStoreFile: (
    /**
     * @title vector store id 值
     * @description OpenAI API 合约中的 vector store id 值。
     */
    vector_store_id: string,
    /**
     * @title file id 值
     * @description OpenAI API 合约中的 file id 值。
     */
    file_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.DeleteVectorStoreFileResponse>;

  /**
   * GET /vector_stores/{vector_store_id}
   * OpenAI API 中用于 get Vector Store 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取get Vector Store。
   */
  getVectorStore: (
    /**
     * @title vector store id 值
     * @description OpenAI API 合约中的 vector store id 值。
     */
    vector_store_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.VectorStoreObject>;

  /**
   * GET /vector_stores/{vector_store_id}/files/{file_id}
   * OpenAI API 中用于 get Vector Store File 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取get Vector Store File。
   */
  getVectorStoreFile: (
    /**
     * @title vector store id 值
     * @description OpenAI API 合约中的 vector store id 值。
     */
    vector_store_id: string,
    /**
     * @title file id 值
     * @description OpenAI API 合约中的 file id 值。
     */
    file_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.VectorStoreFileObject>;

  /**
   * GET /vector_stores/{vector_store_id}/file_batches/{batch_id}
   * OpenAI API 中用于 get Vector Store File Batch 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取get Vector Store File Batch。
   */
  getVectorStoreFileBatch: (
    /**
     * @title vector store id 值
     * @description OpenAI API 合约中的 vector store id 值。
     */
    vector_store_id: string,
    /**
     * @title batch id 值
     * @description OpenAI API 合约中的 batch id 值。
     */
    batch_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.VectorStoreFileBatchObject>;

  /**
   * GET /vector_stores/{vector_store_id}/file_batches/{batch_id}/files
   * OpenAI API 中用于 list Files In Vector Store Batch 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Files In Vector Store Batch。
   */
  listFilesInVectorStoreBatch: (
    /**
     * @title vector store id 值
     * @description OpenAI API 合约中的 vector store id 值。
     */
    vector_store_id: string,
    /**
     * @title batch id 值
     * @description OpenAI API 合约中的 batch id 值。
     */
    batch_id: string,
    params: vectorStores.ListFilesInVectorStoreBatchParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ListVectorStoreFilesResponse>;

  /**
   * GET /vector_stores/{vector_store_id}/files
   * OpenAI API 中用于 list Vector Store Files 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Vector Store Files。
   */
  listVectorStoreFiles: (
    /**
     * @title vector store id 值
     * @description OpenAI API 合约中的 vector store id 值。
     */
    vector_store_id: string,
    params: vectorStores.ListVectorStoreFilesParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ListVectorStoreFilesResponse>;

  /**
   * GET /vector_stores
   * OpenAI API 中用于 list Vector Stores 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取list Vector Stores。
   */
  listVectorStores: (
    params: vectorStores.ListVectorStoresParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ListVectorStoresResponse>;

  /**
   * POST /vector_stores/{vector_store_id}
   * OpenAI API 中用于 modify Vector Store 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理modify Vector Store。
   */
  modifyVectorStore: (
    /**
     * @title vector store id 值
     * @description OpenAI API 合约中的 vector store id 值。
     */
    vector_store_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.UpdateVectorStoreRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.VectorStoreObject>;

  /**
   * GET /vector_stores/{vector_store_id}/files/{file_id}/content
   * OpenAI API 中用于 retrieve Vector Store File Content 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取retrieve Vector Store File Content。
   */
  retrieveVectorStoreFileContent: (
    /**
     * @title vector store id 值
     * @description OpenAI API 合约中的 vector store id 值。
     */
    vector_store_id: string,
    /**
     * @title file id 值
     * @description OpenAI API 合约中的 file id 值。
     */
    file_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.VectorStoreFileContentResponse>;

  /**
   * POST /vector_stores/{vector_store_id}/search
   * OpenAI API 中用于 search Vector Store 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理search Vector Store。
   */
  searchVectorStore: (
    /**
     * @title vector store id 值
     * @description OpenAI API 合约中的 vector store id 值。
     */
    vector_store_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.VectorStoreSearchRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.VectorStoreSearchResultsPage>;

  /**
   * POST /vector_stores/{vector_store_id}/files/{file_id}
   * OpenAI API 中用于 update Vector Store File Attributes 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理update Vector Store File Attributes。
   */
  updateVectorStoreFileAttributes: (
    /**
     * @title vector store id 值
     * @description OpenAI API 合约中的 vector store id 值。
     */
    vector_store_id: string,
    /**
     * @title file id 值
     * @description OpenAI API 合约中的 file id 值。
     */
    file_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.UpdateVectorStoreFileAttributesRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.VectorStoreFileObject>;

};

// ============ videos 模块 ============

export declare namespace videos {
  export type ListVideosParams = {
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title order 值
     * @description OpenAI API 合约中的 order 值。
     */
    order?: schemas.OrderEnum;
    /**
     * @title after 值
     * @description OpenAI API 合约中的 after 值。
     */
    after?: string;
  };

  export type RetrieveVideoContentParams = {
    /**
     * @title variant 值
     * @description OpenAI API 合约中的 variant 值。
     */
    variant?: schemas.VideoContentVariant;
  };

}

export type videos = {
  /**
   * POST /videos/characters
   * OpenAI API 中用于 Create Video Character 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Create Video Character。
   * @deprecated
   */
  CreateVideoCharacter: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateVideoCharacterBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.VideoCharacterResource>;

  /**
   * POST /videos/edits
   * OpenAI API 中用于 Create Video Edit 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Create Video Edit。
   * @deprecated
   */
  CreateVideoEdit: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateVideoEditMultipartBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.VideoResource>;

  /**
   * POST /videos/extensions
   * OpenAI API 中用于 Create Video Extend 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Create Video Extend。
   * @deprecated
   */
  CreateVideoExtend: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateVideoExtendMultipartBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.VideoResource>;

  /**
   * POST /videos/{video_id}/remix
   * OpenAI API 中用于 Create Video Remix 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Create Video Remix。
   * @deprecated
   */
  CreateVideoRemix: (
    /**
     * @title video id 值
     * @description OpenAI API 合约中的 video id 值。
     */
    video_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateVideoRemixBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.VideoResource>;

  /**
   * DELETE /videos/{video_id}
   * OpenAI API 中用于 Delete Video 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Delete Video。
   * @deprecated
   */
  DeleteVideo: (
    /**
     * @title video id 值
     * @description OpenAI API 合约中的 video id 值。
     */
    video_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.DeletedVideoResource>;

  /**
   * GET /videos/{video_id}
   * OpenAI API 中用于 Get Video 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取Get Video。
   * @deprecated
   */
  GetVideo: (
    /**
     * @title video id 值
     * @description OpenAI API 合约中的 video id 值。
     */
    video_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.VideoResource>;

  /**
   * GET /videos/characters/{character_id}
   * OpenAI API 中用于 Get Video Character 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取Get Video Character。
   * @deprecated
   */
  GetVideoCharacter: (
    /**
     * @title character id 值
     * @description OpenAI API 合约中的 character id 值。
     */
    character_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.VideoCharacterResource>;

  /**
   * GET /videos
   * OpenAI API 中用于 List Videos 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取List Videos。
   * @deprecated
   */
  ListVideos: (
    params: videos.ListVideosParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.VideoListResource>;

  /**
   * GET /videos/{video_id}/content
   * OpenAI API 中用于 Retrieve Video Content 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取Retrieve Video Content。
   * @deprecated
   */
  RetrieveVideoContent: (
    /**
     * @title video id 值
     * @description OpenAI API 合约中的 video id 值。
     */
    video_id: string,
    params: videos.RetrieveVideoContentParams,
    requestInit?: RequestInit,
  ) => Promise<Blob>;

  /**
   * POST /videos
   * OpenAI API 中用于 create Video 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理create Video。
   * @deprecated
   */
  createVideo: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateVideoMultipartBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.VideoResource>;

};

// ============ API 集合类型 ============

/**
 * API 类型定义
 */
export type APIs = {
  /**
   * POST /chatkit/sessions/{session_id}/cancel
   * OpenAI API 中用于 Cancel Chat Session Method 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Cancel Chat Session Method。
   */
  CancelChatSessionMethod: (
    /**
     * @title session id 值
     * @description OpenAI API 合约中的 session id 值。
     */
    session_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ChatSessionResource>;

  /**
   * POST /responses/compact
   * OpenAI API 中用于 Compactconversation 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Compactconversation。
   */
  Compactconversation: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CompactResponseMethodPublicBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.CompactResource>;

  /**
   * POST /chatkit/sessions
   * OpenAI API 中用于 Create Chat Session Method 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Create Chat Session Method。
   */
  CreateChatSessionMethod: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateChatSessionBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.ChatSessionResource>;

  /**
   * POST /containers
   * OpenAI API 中用于 Create Container 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Create Container。
   */
  CreateContainer: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateContainerBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.ContainerResource>;

  /**
   * POST /containers/{container_id}/files
   * OpenAI API 中用于 Create Container File 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Create Container File。
   */
  CreateContainerFile: (
    /**
     * @title container id 值
     * @description OpenAI API 合约中的 container id 值。
     */
    container_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateContainerFileBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.ContainerFileResource>;

  /**
   * POST /organization/projects/{project_id}/service_accounts/{service_account_id}/api_keys
   * OpenAI API 中用于 Createan APIkeyforaserviceaccount 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Createan APIkeyforaserviceaccount。
   */
  CreateanAPIkeyforaserviceaccount: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title service account id 值
     * @description OpenAI API 合约中的 service account id 值。
     */
    service_account_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateProjectServiceAccountApiKeyBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.ServiceAccountApiKeyBody>;

  /**
   * POST /content_provenance_checks
   * OpenAI API 中用于 Createcontentprovenancecheck 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Createcontentprovenancecheck。
   */
  Createcontentprovenancecheck: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.CreateContentProvenanceBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProvenanceResource>;

  /**
   * DELETE /containers/{container_id}
   * OpenAI API 中用于 Delete Container 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Delete Container。
   */
  DeleteContainer: (
    /**
     * @title container id 值
     * @description OpenAI API 合约中的 container id 值。
     */
    container_id: string,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * DELETE /containers/{container_id}/files/{file_id}
   * OpenAI API 中用于 Delete Container File 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Delete Container File。
   */
  DeleteContainerFile: (
    /**
     * @title container id 值
     * @description OpenAI API 合约中的 container id 值。
     */
    container_id: string,
    /**
     * @title file id 值
     * @description OpenAI API 合约中的 file id 值。
     */
    file_id: string,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * DELETE /chatkit/threads/{thread_id}
   * OpenAI API 中用于 Delete Thread Method 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Delete Thread Method。
   */
  DeleteThreadMethod: (
    /**
     * @title thread id 值
     * @description OpenAI API 合约中的 thread id 值。
     */
    thread_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.DeletedThreadResource>;

  /**
   * DELETE /organization/spend_limit
   * OpenAI API 中用于 Deleteorganizationspendlimit 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Deleteorganizationspendlimit。
   */
  Deleteorganizationspendlimit: (
    requestInit?: RequestInit,
  ) => Promise<schemas.OrganizationSpendLimitDeletedResource>;

  /**
   * DELETE /organization/projects/{project_id}/spend_limit
   * OpenAI API 中用于 Deleteprojectspendlimit 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Deleteprojectspendlimit。
   */
  Deleteprojectspendlimit: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectSpendLimitDeletedResource>;

  /**
   * GET /chatkit/threads/{thread_id}
   * OpenAI API 中用于 Get Thread Method 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取Get Thread Method。
   */
  GetThreadMethod: (
    /**
     * @title thread id 值
     * @description OpenAI API 合约中的 thread id 值。
     */
    thread_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ThreadResource>;

  /**
   * POST /responses/input_tokens
   * OpenAI API 中用于 Getinputtokencounts 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Getinputtokencounts。
   */
  Getinputtokencounts: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.TokenCountsBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.TokenCountsResource>;

  /**
   * GET /organization/spend_limit
   * OpenAI API 中用于 Getorganizationspendlimit 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取Getorganizationspendlimit。
   */
  Getorganizationspendlimit: (
    requestInit?: RequestInit,
  ) => Promise<schemas.OrganizationSpendLimitResource>;

  /**
   * GET /organization/projects/{project_id}/spend_limit
   * OpenAI API 中用于 Getprojectspendlimit 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取Getprojectspendlimit。
   */
  Getprojectspendlimit: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectSpendLimitResource>;

  /**
   * GET /containers/{container_id}/files
   * OpenAI API 中用于 List Container Files 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取List Container Files。
   */
  ListContainerFiles: (
    /**
     * @title container id 值
     * @description OpenAI API 合约中的 container id 值。
     */
    container_id: string,
    params: APIs.ListContainerFilesParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ContainerFileListResource>;

  /**
   * GET /containers
   * OpenAI API 中用于 List Containers 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取List Containers。
   */
  ListContainers: (
    params: APIs.ListContainersParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ContainerListResource>;

  /**
   * GET /chatkit/threads/{thread_id}/items
   * OpenAI API 中用于 List Thread Items Method 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取List Thread Items Method。
   */
  ListThreadItemsMethod: (
    /**
     * @title thread id 值
     * @description OpenAI API 合约中的 thread id 值。
     */
    thread_id: string,
    params: APIs.ListThreadItemsMethodParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ThreadItemListResource>;

  /**
   * GET /chatkit/threads
   * OpenAI API 中用于 List Threads Method 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取List Threads Method。
   */
  ListThreadsMethod: (
    params: APIs.ListThreadsMethodParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ThreadListResource>;

  /**
   * GET /containers/{container_id}
   * OpenAI API 中用于 Retrieve Container 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取Retrieve Container。
   */
  RetrieveContainer: (
    /**
     * @title container id 值
     * @description OpenAI API 合约中的 container id 值。
     */
    container_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ContainerResource>;

  /**
   * GET /containers/{container_id}/files/{file_id}
   * OpenAI API 中用于 Retrieve Container File 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取Retrieve Container File。
   */
  RetrieveContainerFile: (
    /**
     * @title container id 值
     * @description OpenAI API 合约中的 container id 值。
     */
    container_id: string,
    /**
     * @title file id 值
     * @description OpenAI API 合约中的 file id 值。
     */
    file_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ContainerFileResource>;

  /**
   * GET /containers/{container_id}/files/{file_id}/content
   * OpenAI API 中用于 Retrieve Container File Content 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取Retrieve Container File Content。
   */
  RetrieveContainerFileContent: (
    /**
     * @title container id 值
     * @description OpenAI API 合约中的 container id 值。
     */
    container_id: string,
    /**
     * @title file id 值
     * @description OpenAI API 合约中的 file id 值。
     */
    file_id: string,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * POST /organization/spend_limit
   * OpenAI API 中用于 Updateorganizationspendlimit 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Updateorganizationspendlimit。
   */
  Updateorganizationspendlimit: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.UpdateOrganizationSpendLimitBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.OrganizationSpendLimitResource>;

  /**
   * POST /organization/projects/{project_id}/spend_limit
   * OpenAI API 中用于 Updateprojectspendlimit 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理Updateprojectspendlimit。
   */
  Updateprojectspendlimit: (
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id: string,
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.UpdateProjectSpendLimitBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.ProjectSpendLimitResource>;

  /**
   * POST /organization/admin_api_keys
   * OpenAI API 中用于 admin Api Keys Create 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理admin Api Keys Create。
   */
  adminApiKeysCreate: (
    params: APIs.AdminApiKeysCreateParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.AdminApiKeyCreateResponse>;

  /**
   * DELETE /organization/admin_api_keys/{key_id}
   * OpenAI API 中用于 admin Api Keys Delete 的保留合约 DELETE Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理admin Api Keys Delete。
   */
  adminApiKeysDelete: (
    /**
     * @title key id 值
     * @description OpenAI API 合约中的 key id 值。
     */
    key_id: string,
    requestInit?: RequestInit,
  ) => Promise<{
  /**
   * @title deleted 值
   * @description OpenAI API 合约中的 deleted 值。
   */
  deleted: boolean;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.admin_api_key.deleted'
}>;

  /**
   * GET /organization/admin_api_keys/{key_id}
   * OpenAI API 中用于 admin Api Keys Get 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取admin Api Keys Get。
   */
  adminApiKeysGet: (
    /**
     * @title key id 值
     * @description OpenAI API 合约中的 key id 值。
     */
    key_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.AdminApiKey>;

  /**
   * GET /organization/admin_api_keys
   * OpenAI API 中用于 admin Api Keys List 的保留合约 GET Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 读取admin Api Keys List。
   */
  adminApiKeysList: (
    params: APIs.AdminApiKeysListParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ApiKeyList>;

  /**
   * POST /responses/compact?beta=true
   * OpenAI API 中用于 beta Compactconversation 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理beta Compactconversation。
   */
  beta_Compactconversation: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.BetaCompactResponseMethodPublicBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.BetaCompactResource>;

  /**
   * POST /responses/input_tokens?beta=true
   * OpenAI API 中用于 beta Getinputtokencounts 的保留合约 POST Endpoint。模型与资源相关值由调用方在运行时提供。
   * @summary: 管理beta Getinputtokencounts。
   */
  beta_Getinputtokencounts: (
    /**
     * @title body 值
     * @description OpenAI API 合约中的 body 值。
     */
    body: schemas.BetaTokenCountsBody,
    requestInit?: RequestInit,
  ) => Promise<schemas.BetaTokenCountsResource>;

  /** assistants 模块 */
  assistants: assistants;
  /** audio 模块 */
  audio: audio;
  /** auditLogs 模块 */
  auditLogs: auditLogs;
  /** batch 模块 */
  batch: batch;
  /** certificates 模块 */
  certificates: certificates;
  /** chat 模块 */
  chat: chat;
  /** completions 模块 */
  completions: completions;
  /** conversations 模块 */
  conversations: conversations;
  /** dataRetention 模块 */
  dataRetention: dataRetention;
  /** embeddings 模块 */
  embeddings: embeddings;
  /** evals 模块 */
  evals: evals;
  /** files 模块 */
  files: files;
  /** fineTuning 模块 */
  fineTuning: fineTuning;
  /** groupOrganizationRoleAssignments 模块 */
  groupOrganizationRoleAssignments: groupOrganizationRoleAssignments;
  /** groupUsers 模块 */
  groupUsers: groupUsers;
  /** groups 模块 */
  groups: groups;
  /** hostedTools 模块 */
  hostedTools: hostedTools;
  /** images 模块 */
  images: images;
  /** invites 模块 */
  invites: invites;
  /** models 模块 */
  models: models;
  /** moderations 模块 */
  moderations: moderations;
  /** projectGroupRoleAssignments 模块 */
  projectGroupRoleAssignments: projectGroupRoleAssignments;
  /** projectGroups 模块 */
  projectGroups: projectGroups;
  /** projectUserRoleAssignments 模块 */
  projectUserRoleAssignments: projectUserRoleAssignments;
  /** projects 模块 */
  projects: projects;
  /** realtime 模块 */
  realtime: realtime;
  /** responses 模块 */
  responses: responses;
  /** roles 模块 */
  roles: roles;
  /** skills 模块 */
  skills: skills;
  /** spendAlerts 模块 */
  spendAlerts: spendAlerts;
  /** uploads 模块 */
  uploads: uploads;
  /** usage 模块 */
  usage: usage;
  /** userOrganizationRoleAssignments 模块 */
  userOrganizationRoleAssignments: userOrganizationRoleAssignments;
  /** users 模块 */
  users: users;
  /** vectorStores 模块 */
  vectorStores: vectorStores;
  /** videos 模块 */
  videos: videos;
};

export declare namespace APIs {
  export { assistants };
  export { audio };
  export { auditLogs };
  export { batch };
  export { certificates };
  export { chat };
  export { completions };
  export { conversations };
  export { dataRetention };
  export { embeddings };
  export { evals };
  export { files };
  export { fineTuning };
  export { groupOrganizationRoleAssignments };
  export { groupUsers };
  export { groups };
  export { hostedTools };
  export { images };
  export { invites };
  export { models };
  export { moderations };
  export { projectGroupRoleAssignments };
  export { projectGroups };
  export { projectUserRoleAssignments };
  export { projects };
  export { realtime };
  export { responses };
  export { roles };
  export { skills };
  export { spendAlerts };
  export { uploads };
  export { usage };
  export { userOrganizationRoleAssignments };
  export { users };
  export { vectorStores };
  export { videos };
}
