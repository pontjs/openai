export const specMeta = {
  name: "OpenAI API",
  hasTags: true,
  url: [
    {
      url: "https://api.openai.com/v1"
    }
  ],
  apis: {
    "CancelChatSessionMethod": {
      method: "POST",
      path: "/chatkit/sessions/{session_id}/cancel",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["session_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "Compactconversation": {
      method: "POST",
      path: "/responses/compact",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "CreateChatSessionMethod": {
      method: "POST",
      path: "/chatkit/sessions",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "CreateContainer": {
      method: "POST",
      path: "/containers",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "CreateContainerFile": {
      method: "POST",
      path: "/containers/{container_id}/files",
      consumes: ["application/json","multipart/form-data"],
      produces: ["application/json"],
      pathParams: ["container_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "CreateanAPIkeyforaserviceaccount": {
      method: "POST",
      path: "/organization/projects/{project_id}/service_accounts/{service_account_id}/api_keys",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["project_id", "service_account_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "Createcontentprovenancecheck": {
      method: "POST",
      path: "/content_provenance_checks",
      consumes: ["multipart/form-data"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "multipart/form-data",
        canMerge: false
      }
    },

    "DeleteContainer": {
      method: "DELETE",
      path: "/containers/{container_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["container_id"],
      queryParams: null,
      bodyParams: null
    },

    "DeleteContainerFile": {
      method: "DELETE",
      path: "/containers/{container_id}/files/{file_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["container_id", "file_id"],
      queryParams: null,
      bodyParams: null
    },

    "DeleteThreadMethod": {
      method: "DELETE",
      path: "/chatkit/threads/{thread_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["thread_id"],
      queryParams: null,
      bodyParams: null
    },

    "Deleteorganizationspendlimit": {
      method: "DELETE",
      path: "/organization/spend_limit",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: null
    },

    "Deleteprojectspendlimit": {
      method: "DELETE",
      path: "/organization/projects/{project_id}/spend_limit",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: null,
      bodyParams: null
    },

    "GetThreadMethod": {
      method: "GET",
      path: "/chatkit/threads/{thread_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["thread_id"],
      queryParams: null,
      bodyParams: null
    },

    "Getinputtokencounts": {
      method: "POST",
      path: "/responses/input_tokens",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "Getorganizationspendlimit": {
      method: "GET",
      path: "/organization/spend_limit",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: null
    },

    "Getprojectspendlimit": {
      method: "GET",
      path: "/organization/projects/{project_id}/spend_limit",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: null,
      bodyParams: null
    },

    "ListContainerFiles": {
      method: "GET",
      path: "/containers/{container_id}/files",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["container_id"],
      queryParams: ["limit", "order", "after"],
      bodyParams: null
    },

    "ListContainers": {
      method: "GET",
      path: "/containers",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["limit", "order", "after", "name"],
      bodyParams: null
    },

    "ListThreadItemsMethod": {
      method: "GET",
      path: "/chatkit/threads/{thread_id}/items",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["thread_id"],
      queryParams: ["limit", "order", "after", "before"],
      bodyParams: null
    },

    "ListThreadsMethod": {
      method: "GET",
      path: "/chatkit/threads",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["limit", "order", "after", "before", "user"],
      bodyParams: null
    },

    "RetrieveContainer": {
      method: "GET",
      path: "/containers/{container_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["container_id"],
      queryParams: null,
      bodyParams: null
    },

    "RetrieveContainerFile": {
      method: "GET",
      path: "/containers/{container_id}/files/{file_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["container_id", "file_id"],
      queryParams: null,
      bodyParams: null
    },

    "RetrieveContainerFileContent": {
      method: "GET",
      path: "/containers/{container_id}/files/{file_id}/content",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["container_id", "file_id"],
      queryParams: null,
      bodyParams: null
    },

    "Updateorganizationspendlimit": {
      method: "POST",
      path: "/organization/spend_limit",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "Updateprojectspendlimit": {
      method: "POST",
      path: "/organization/projects/{project_id}/spend_limit",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "adminApiKeysCreate": {
      method: "POST",
      path: "/organization/admin_api_keys",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: true,
        fields: ["expires_in_seconds", "name"]
      }
    },

    "adminApiKeysDelete": {
      method: "DELETE",
      path: "/organization/admin_api_keys/{key_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["key_id"],
      queryParams: null,
      bodyParams: null
    },

    "adminApiKeysGet": {
      method: "GET",
      path: "/organization/admin_api_keys/{key_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["key_id"],
      queryParams: null,
      bodyParams: null
    },

    "adminApiKeysList": {
      method: "GET",
      path: "/organization/admin_api_keys",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["after", "order", "limit"],
      bodyParams: null
    },

    "assistants/cancelRun": {
      method: "POST",
      path: "/threads/{thread_id}/runs/{run_id}/cancel",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["thread_id", "run_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "assistants/createAssistant": {
      method: "POST",
      path: "/assistants",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "assistants/createMessage": {
      method: "POST",
      path: "/threads/{thread_id}/messages",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["thread_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "assistants/createRun": {
      method: "POST",
      path: "/threads/{thread_id}/runs",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["thread_id"],
      queryParams: ["include[]"],
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "assistants/createThread": {
      method: "POST",
      path: "/threads",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "assistants/createThreadAndRun": {
      method: "POST",
      path: "/threads/runs",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "assistants/deleteAssistant": {
      method: "DELETE",
      path: "/assistants/{assistant_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["assistant_id"],
      queryParams: null,
      bodyParams: null
    },

    "assistants/deleteMessage": {
      method: "DELETE",
      path: "/threads/{thread_id}/messages/{message_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["thread_id", "message_id"],
      queryParams: null,
      bodyParams: null
    },

    "assistants/deleteThread": {
      method: "DELETE",
      path: "/threads/{thread_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["thread_id"],
      queryParams: null,
      bodyParams: null
    },

    "assistants/getAssistant": {
      method: "GET",
      path: "/assistants/{assistant_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["assistant_id"],
      queryParams: null,
      bodyParams: null
    },

    "assistants/getMessage": {
      method: "GET",
      path: "/threads/{thread_id}/messages/{message_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["thread_id", "message_id"],
      queryParams: null,
      bodyParams: null
    },

    "assistants/getRun": {
      method: "GET",
      path: "/threads/{thread_id}/runs/{run_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["thread_id", "run_id"],
      queryParams: null,
      bodyParams: null
    },

    "assistants/getRunStep": {
      method: "GET",
      path: "/threads/{thread_id}/runs/{run_id}/steps/{step_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["thread_id", "run_id", "step_id"],
      queryParams: ["include[]"],
      bodyParams: null
    },

    "assistants/getThread": {
      method: "GET",
      path: "/threads/{thread_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["thread_id"],
      queryParams: null,
      bodyParams: null
    },

    "assistants/listAssistants": {
      method: "GET",
      path: "/assistants",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["limit", "order", "after", "before"],
      bodyParams: null
    },

    "assistants/listMessages": {
      method: "GET",
      path: "/threads/{thread_id}/messages",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["thread_id"],
      queryParams: ["limit", "order", "after", "before", "run_id"],
      bodyParams: null
    },

    "assistants/listRunSteps": {
      method: "GET",
      path: "/threads/{thread_id}/runs/{run_id}/steps",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["thread_id", "run_id"],
      queryParams: ["limit", "order", "after", "before", "include[]"],
      bodyParams: null
    },

    "assistants/listRuns": {
      method: "GET",
      path: "/threads/{thread_id}/runs",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["thread_id"],
      queryParams: ["limit", "order", "after", "before"],
      bodyParams: null
    },

    "assistants/modifyAssistant": {
      method: "POST",
      path: "/assistants/{assistant_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["assistant_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "assistants/modifyMessage": {
      method: "POST",
      path: "/threads/{thread_id}/messages/{message_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["thread_id", "message_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "assistants/modifyRun": {
      method: "POST",
      path: "/threads/{thread_id}/runs/{run_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["thread_id", "run_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "assistants/modifyThread": {
      method: "POST",
      path: "/threads/{thread_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["thread_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "assistants/submitToolOuputsToRun": {
      method: "POST",
      path: "/threads/{thread_id}/runs/{run_id}/submit_tool_outputs",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["thread_id", "run_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "audio/createSpeech": {
      method: "POST",
      path: "/audio/speech",
      consumes: ["application/json"],
      produces: ["application/octet-stream","text/event-stream","application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "audio/createTranscription": {
      method: "POST",
      path: "/audio/transcriptions",
      consumes: ["multipart/form-data"],
      produces: ["application/json","text/event-stream"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "multipart/form-data",
        canMerge: false
      }
    },

    "audio/createTranslation": {
      method: "POST",
      path: "/audio/translations",
      consumes: ["multipart/form-data"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "multipart/form-data",
        canMerge: false
      }
    },

    "audio/createVoice": {
      method: "POST",
      path: "/audio/voices",
      consumes: ["multipart/form-data"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "multipart/form-data",
        canMerge: false
      }
    },

    "audio/createVoiceConsent": {
      method: "POST",
      path: "/audio/voice_consents",
      consumes: ["multipart/form-data"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "multipart/form-data",
        canMerge: false
      }
    },

    "audio/deleteVoiceConsent": {
      method: "DELETE",
      path: "/audio/voice_consents/{consent_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["consent_id"],
      queryParams: null,
      bodyParams: null
    },

    "audio/getVoiceConsent": {
      method: "GET",
      path: "/audio/voice_consents/{consent_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["consent_id"],
      queryParams: null,
      bodyParams: null
    },

    "audio/listVoiceConsents": {
      method: "GET",
      path: "/audio/voice_consents",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["after", "limit"],
      bodyParams: null
    },

    "audio/updateVoiceConsent": {
      method: "POST",
      path: "/audio/voice_consents/{consent_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["consent_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "auditLogs/listAuditLogs": {
      method: "GET",
      path: "/organization/audit_logs",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["effective_at", "project_ids[]", "event_types[]", "actor_ids[]", "actor_emails[]", "resource_ids[]", "tenant_only", "limit", "after", "before"],
      bodyParams: null
    },

    "batch/cancelBatch": {
      method: "POST",
      path: "/batches/{batch_id}/cancel",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["batch_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "batch/createBatch": {
      method: "POST",
      path: "/batches",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "batch/listBatches": {
      method: "GET",
      path: "/batches",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["after", "limit"],
      bodyParams: null
    },

    "batch/retrieveBatch": {
      method: "GET",
      path: "/batches/{batch_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["batch_id"],
      queryParams: null,
      bodyParams: null
    },

    "beta_Compactconversation": {
      method: "POST",
      path: "/responses/compact?beta=true",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "beta_Getinputtokencounts": {
      method: "POST",
      path: "/responses/input_tokens?beta=true",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "certificates/activateOrganizationCertificates": {
      method: "POST",
      path: "/organization/certificates/activate",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "certificates/activateProjectCertificates": {
      method: "POST",
      path: "/organization/projects/{project_id}/certificates/activate",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "certificates/deactivateOrganizationCertificates": {
      method: "POST",
      path: "/organization/certificates/deactivate",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "certificates/deactivateProjectCertificates": {
      method: "POST",
      path: "/organization/projects/{project_id}/certificates/deactivate",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "certificates/deleteCertificate": {
      method: "DELETE",
      path: "/organization/certificates/{certificate_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["certificate_id"],
      queryParams: null,
      bodyParams: null
    },

    "certificates/getCertificate": {
      method: "GET",
      path: "/organization/certificates/{certificate_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["certificate_id"],
      queryParams: ["include"],
      bodyParams: null
    },

    "certificates/listOrganizationCertificates": {
      method: "GET",
      path: "/organization/certificates",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["limit", "after", "order"],
      bodyParams: null
    },

    "certificates/listProjectCertificates": {
      method: "GET",
      path: "/organization/projects/{project_id}/certificates",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: ["limit", "after", "order"],
      bodyParams: null
    },

    "certificates/modifyCertificate": {
      method: "POST",
      path: "/organization/certificates/{certificate_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["certificate_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "certificates/uploadCertificate": {
      method: "POST",
      path: "/organization/certificates",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "chat/createChatCompletion": {
      method: "POST",
      path: "/chat/completions",
      consumes: ["application/json"],
      produces: ["application/json","text/event-stream"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "chat/deleteChatCompletion": {
      method: "DELETE",
      path: "/chat/completions/{completion_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["completion_id"],
      queryParams: null,
      bodyParams: null
    },

    "chat/getChatCompletion": {
      method: "GET",
      path: "/chat/completions/{completion_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["completion_id"],
      queryParams: null,
      bodyParams: null
    },

    "chat/getChatCompletionMessages": {
      method: "GET",
      path: "/chat/completions/{completion_id}/messages",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["completion_id"],
      queryParams: ["after", "limit", "order"],
      bodyParams: null
    },

    "chat/listChatCompletions": {
      method: "GET",
      path: "/chat/completions",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["model", "metadata", "after", "limit", "order"],
      bodyParams: null
    },

    "chat/updateChatCompletion": {
      method: "POST",
      path: "/chat/completions/{completion_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["completion_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: true,
        fields: ["metadata"]
      }
    },

    "completions/createCompletion": {
      method: "POST",
      path: "/completions",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "conversations/createConversation": {
      method: "POST",
      path: "/conversations",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "conversations/createConversationItems": {
      method: "POST",
      path: "/conversations/{conversation_id}/items",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["conversation_id"],
      queryParams: ["include"],
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "conversations/deleteConversation": {
      method: "DELETE",
      path: "/conversations/{conversation_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["conversation_id"],
      queryParams: null,
      bodyParams: null
    },

    "conversations/deleteConversationItem": {
      method: "DELETE",
      path: "/conversations/{conversation_id}/items/{item_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["conversation_id", "item_id"],
      queryParams: null,
      bodyParams: null
    },

    "conversations/getConversation": {
      method: "GET",
      path: "/conversations/{conversation_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["conversation_id"],
      queryParams: null,
      bodyParams: null
    },

    "conversations/getConversationItem": {
      method: "GET",
      path: "/conversations/{conversation_id}/items/{item_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["conversation_id", "item_id"],
      queryParams: ["include"],
      bodyParams: null
    },

    "conversations/listConversationItems": {
      method: "GET",
      path: "/conversations/{conversation_id}/items",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["conversation_id"],
      queryParams: ["limit", "order", "after", "include"],
      bodyParams: null
    },

    "conversations/updateConversation": {
      method: "POST",
      path: "/conversations/{conversation_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["conversation_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "dataRetention/retrieveOrganizationDataRetention": {
      method: "GET",
      path: "/organization/data_retention",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: null
    },

    "dataRetention/retrieveProjectDataRetention": {
      method: "GET",
      path: "/organization/projects/{project_id}/data_retention",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: null,
      bodyParams: null
    },

    "dataRetention/updateOrganizationDataRetention": {
      method: "POST",
      path: "/organization/data_retention",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "dataRetention/updateProjectDataRetention": {
      method: "POST",
      path: "/organization/projects/{project_id}/data_retention",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "embeddings/createEmbedding": {
      method: "POST",
      path: "/embeddings",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "evals/cancelEvalRun": {
      method: "POST",
      path: "/evals/{eval_id}/runs/{run_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["eval_id", "run_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "evals/createEval": {
      method: "POST",
      path: "/evals",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "evals/createEvalRun": {
      method: "POST",
      path: "/evals/{eval_id}/runs",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["eval_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "evals/deleteEval": {
      method: "DELETE",
      path: "/evals/{eval_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["eval_id"],
      queryParams: null,
      bodyParams: null
    },

    "evals/deleteEvalRun": {
      method: "DELETE",
      path: "/evals/{eval_id}/runs/{run_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["eval_id", "run_id"],
      queryParams: null,
      bodyParams: null
    },

    "evals/getEval": {
      method: "GET",
      path: "/evals/{eval_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["eval_id"],
      queryParams: null,
      bodyParams: null
    },

    "evals/getEvalRun": {
      method: "GET",
      path: "/evals/{eval_id}/runs/{run_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["eval_id", "run_id"],
      queryParams: null,
      bodyParams: null
    },

    "evals/getEvalRunOutputItem": {
      method: "GET",
      path: "/evals/{eval_id}/runs/{run_id}/output_items/{output_item_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["eval_id", "run_id", "output_item_id"],
      queryParams: null,
      bodyParams: null
    },

    "evals/getEvalRunOutputItems": {
      method: "GET",
      path: "/evals/{eval_id}/runs/{run_id}/output_items",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["eval_id", "run_id"],
      queryParams: ["after", "limit", "status", "order"],
      bodyParams: null
    },

    "evals/getEvalRuns": {
      method: "GET",
      path: "/evals/{eval_id}/runs",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["eval_id"],
      queryParams: ["after", "limit", "order", "status"],
      bodyParams: null
    },

    "evals/listEvals": {
      method: "GET",
      path: "/evals",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["after", "limit", "order", "order_by"],
      bodyParams: null
    },

    "evals/updateEval": {
      method: "POST",
      path: "/evals/{eval_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["eval_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: true,
        fields: ["metadata", "name"]
      }
    },

    "files/createFile": {
      method: "POST",
      path: "/files",
      consumes: ["multipart/form-data"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "multipart/form-data",
        canMerge: false
      }
    },

    "files/deleteFile": {
      method: "DELETE",
      path: "/files/{file_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["file_id"],
      queryParams: null,
      bodyParams: null
    },

    "files/downloadFile": {
      method: "GET",
      path: "/files/{file_id}/content",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["file_id"],
      queryParams: null,
      bodyParams: null
    },

    "files/listFiles": {
      method: "GET",
      path: "/files",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["purpose", "limit", "order", "after"],
      bodyParams: null
    },

    "files/retrieveFile": {
      method: "GET",
      path: "/files/{file_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["file_id"],
      queryParams: null,
      bodyParams: null
    },

    "fineTuning/cancelFineTuningJob": {
      method: "POST",
      path: "/fine_tuning/jobs/{fine_tuning_job_id}/cancel",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["fine_tuning_job_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "fineTuning/createFineTuningCheckpointPermission": {
      method: "POST",
      path: "/fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["fine_tuned_model_checkpoint"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "fineTuning/createFineTuningJob": {
      method: "POST",
      path: "/fine_tuning/jobs",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "fineTuning/deleteFineTuningCheckpointPermission": {
      method: "DELETE",
      path: "/fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions/{permission_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["fine_tuned_model_checkpoint", "permission_id"],
      queryParams: null,
      bodyParams: null
    },

    "fineTuning/listFineTuningCheckpointPermissions": {
      method: "GET",
      path: "/fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["fine_tuned_model_checkpoint"],
      queryParams: ["project_id", "after", "limit", "order"],
      bodyParams: null
    },

    "fineTuning/listFineTuningEvents": {
      method: "GET",
      path: "/fine_tuning/jobs/{fine_tuning_job_id}/events",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["fine_tuning_job_id"],
      queryParams: ["after", "limit"],
      bodyParams: null
    },

    "fineTuning/listFineTuningJobCheckpoints": {
      method: "GET",
      path: "/fine_tuning/jobs/{fine_tuning_job_id}/checkpoints",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["fine_tuning_job_id"],
      queryParams: ["after", "limit"],
      bodyParams: null
    },

    "fineTuning/listPaginatedFineTuningJobs": {
      method: "GET",
      path: "/fine_tuning/jobs",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["after", "limit", "metadata"],
      bodyParams: null
    },

    "fineTuning/pauseFineTuningJob": {
      method: "POST",
      path: "/fine_tuning/jobs/{fine_tuning_job_id}/pause",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["fine_tuning_job_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "fineTuning/resumeFineTuningJob": {
      method: "POST",
      path: "/fine_tuning/jobs/{fine_tuning_job_id}/resume",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["fine_tuning_job_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "fineTuning/retrieveFineTuningJob": {
      method: "GET",
      path: "/fine_tuning/jobs/{fine_tuning_job_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["fine_tuning_job_id"],
      queryParams: null,
      bodyParams: null
    },

    "fineTuning/runGrader": {
      method: "POST",
      path: "/fine_tuning/alpha/graders/run",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "fineTuning/validateGrader": {
      method: "POST",
      path: "/fine_tuning/alpha/graders/validate",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "groupOrganizationRoleAssignments/assignGroupRole": {
      method: "POST",
      path: "/organization/groups/{group_id}/roles",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["group_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "groupOrganizationRoleAssignments/listGroupRoleAssignments": {
      method: "GET",
      path: "/organization/groups/{group_id}/roles",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["group_id"],
      queryParams: ["limit", "after", "order"],
      bodyParams: null
    },

    "groupOrganizationRoleAssignments/retrieveGroupRole": {
      method: "GET",
      path: "/organization/groups/{group_id}/roles/{role_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["group_id", "role_id"],
      queryParams: null,
      bodyParams: null
    },

    "groupOrganizationRoleAssignments/unassignGroupRole": {
      method: "DELETE",
      path: "/organization/groups/{group_id}/roles/{role_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["group_id", "role_id"],
      queryParams: null,
      bodyParams: null
    },

    "groupUsers/addGroupUser": {
      method: "POST",
      path: "/organization/groups/{group_id}/users",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["group_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "groupUsers/listGroupUsers": {
      method: "GET",
      path: "/organization/groups/{group_id}/users",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["group_id"],
      queryParams: ["limit", "after", "order"],
      bodyParams: null
    },

    "groupUsers/removeGroupUser": {
      method: "DELETE",
      path: "/organization/groups/{group_id}/users/{user_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["group_id", "user_id"],
      queryParams: null,
      bodyParams: null
    },

    "groupUsers/retrieveGroupUser": {
      method: "GET",
      path: "/organization/groups/{group_id}/users/{user_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["group_id", "user_id"],
      queryParams: null,
      bodyParams: null
    },

    "groups/createGroup": {
      method: "POST",
      path: "/organization/groups",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "groups/deleteGroup": {
      method: "DELETE",
      path: "/organization/groups/{group_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["group_id"],
      queryParams: null,
      bodyParams: null
    },

    "groups/listGroups": {
      method: "GET",
      path: "/organization/groups",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["limit", "after", "order"],
      bodyParams: null
    },

    "groups/retrieveGroup": {
      method: "GET",
      path: "/organization/groups/{group_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["group_id"],
      queryParams: null,
      bodyParams: null
    },

    "groups/updateGroup": {
      method: "POST",
      path: "/organization/groups/{group_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["group_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "hostedTools/retrieveProjectHostedToolPermissions": {
      method: "GET",
      path: "/organization/projects/{project_id}/hosted_tool_permissions",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: null,
      bodyParams: null
    },

    "hostedTools/updateProjectHostedToolPermissions": {
      method: "POST",
      path: "/organization/projects/{project_id}/hosted_tool_permissions",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "images/createImage": {
      method: "POST",
      path: "/images/generations",
      consumes: ["application/json"],
      produces: ["application/json","text/event-stream"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "images/createImageEdit": {
      method: "POST",
      path: "/images/edits",
      consumes: ["multipart/form-data","application/json"],
      produces: ["application/json","text/event-stream"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "multipart/form-data",
        canMerge: false
      }
    },

    "images/createImageVariation": {
      method: "POST",
      path: "/images/variations",
      consumes: ["multipart/form-data"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "multipart/form-data",
        canMerge: false
      }
    },

    "invites/deleteInvite": {
      method: "DELETE",
      path: "/organization/invites/{invite_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["invite_id"],
      queryParams: null,
      bodyParams: null
    },

    "invites/inviteUser": {
      method: "POST",
      path: "/organization/invites",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "invites/listInvites": {
      method: "GET",
      path: "/organization/invites",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["limit", "after"],
      bodyParams: null
    },

    "invites/retrieveInvite": {
      method: "GET",
      path: "/organization/invites/{invite_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["invite_id"],
      queryParams: null,
      bodyParams: null
    },

    "models/deleteModel": {
      method: "DELETE",
      path: "/models/{model}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["model"],
      queryParams: null,
      bodyParams: null
    },

    "models/listModels": {
      method: "GET",
      path: "/models",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: null
    },

    "models/retrieveModel": {
      method: "GET",
      path: "/models/{model}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["model"],
      queryParams: null,
      bodyParams: null
    },

    "moderations/createModeration": {
      method: "POST",
      path: "/moderations",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "projectGroupRoleAssignments/assignProjectGroupRole": {
      method: "POST",
      path: "/projects/{project_id}/groups/{group_id}/roles",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["project_id", "group_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "projectGroupRoleAssignments/listProjectGroupRoleAssignments": {
      method: "GET",
      path: "/projects/{project_id}/groups/{group_id}/roles",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id", "group_id"],
      queryParams: ["limit", "after", "order"],
      bodyParams: null
    },

    "projectGroupRoleAssignments/retrieveProjectGroupRole": {
      method: "GET",
      path: "/projects/{project_id}/groups/{group_id}/roles/{role_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id", "group_id", "role_id"],
      queryParams: null,
      bodyParams: null
    },

    "projectGroupRoleAssignments/unassignProjectGroupRole": {
      method: "DELETE",
      path: "/projects/{project_id}/groups/{group_id}/roles/{role_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id", "group_id", "role_id"],
      queryParams: null,
      bodyParams: null
    },

    "projectGroups/addProjectGroup": {
      method: "POST",
      path: "/organization/projects/{project_id}/groups",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "projectGroups/listProjectGroups": {
      method: "GET",
      path: "/organization/projects/{project_id}/groups",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: ["limit", "after", "order"],
      bodyParams: null
    },

    "projectGroups/removeProjectGroup": {
      method: "DELETE",
      path: "/organization/projects/{project_id}/groups/{group_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id", "group_id"],
      queryParams: null,
      bodyParams: null
    },

    "projectGroups/retrieveProjectGroup": {
      method: "GET",
      path: "/organization/projects/{project_id}/groups/{group_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id", "group_id"],
      queryParams: ["group_type"],
      bodyParams: null
    },

    "projectUserRoleAssignments/assignProjectUserRole": {
      method: "POST",
      path: "/projects/{project_id}/users/{user_id}/roles",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["project_id", "user_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "projectUserRoleAssignments/listProjectUserRoleAssignments": {
      method: "GET",
      path: "/projects/{project_id}/users/{user_id}/roles",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id", "user_id"],
      queryParams: ["limit", "after", "order"],
      bodyParams: null
    },

    "projectUserRoleAssignments/retrieveProjectUserRole": {
      method: "GET",
      path: "/projects/{project_id}/users/{user_id}/roles/{role_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id", "user_id", "role_id"],
      queryParams: null,
      bodyParams: null
    },

    "projectUserRoleAssignments/unassignProjectUserRole": {
      method: "DELETE",
      path: "/projects/{project_id}/users/{user_id}/roles/{role_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id", "user_id", "role_id"],
      queryParams: null,
      bodyParams: null
    },

    "projects/archiveProject": {
      method: "POST",
      path: "/organization/projects/{project_id}/archive",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "projects/createProject": {
      method: "POST",
      path: "/organization/projects",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "projects/createProjectServiceAccount": {
      method: "POST",
      path: "/organization/projects/{project_id}/service_accounts",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "projects/createProjectUser": {
      method: "POST",
      path: "/organization/projects/{project_id}/users",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "projects/deleteProjectApiKey": {
      method: "DELETE",
      path: "/organization/projects/{project_id}/api_keys/{api_key_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id", "api_key_id"],
      queryParams: null,
      bodyParams: null
    },

    "projects/deleteProjectModelPermissions": {
      method: "DELETE",
      path: "/organization/projects/{project_id}/model_permissions",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: null,
      bodyParams: null
    },

    "projects/deleteProjectServiceAccount": {
      method: "DELETE",
      path: "/organization/projects/{project_id}/service_accounts/{service_account_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id", "service_account_id"],
      queryParams: null,
      bodyParams: null
    },

    "projects/deleteProjectUser": {
      method: "DELETE",
      path: "/organization/projects/{project_id}/users/{user_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id", "user_id"],
      queryParams: null,
      bodyParams: null
    },

    "projects/listProjectApiKeys": {
      method: "GET",
      path: "/organization/projects/{project_id}/api_keys",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: ["limit", "after", "owner_project_access"],
      bodyParams: null
    },

    "projects/listProjectRateLimits": {
      method: "GET",
      path: "/organization/projects/{project_id}/rate_limits",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: ["limit", "after", "before"],
      bodyParams: null
    },

    "projects/listProjectServiceAccounts": {
      method: "GET",
      path: "/organization/projects/{project_id}/service_accounts",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: ["limit", "after"],
      bodyParams: null
    },

    "projects/listProjectUsers": {
      method: "GET",
      path: "/organization/projects/{project_id}/users",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: ["limit", "after"],
      bodyParams: null
    },

    "projects/listProjects": {
      method: "GET",
      path: "/organization/projects",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["limit", "after", "include_archived"],
      bodyParams: null
    },

    "projects/modifyProject": {
      method: "POST",
      path: "/organization/projects/{project_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "projects/modifyProjectUser": {
      method: "POST",
      path: "/organization/projects/{project_id}/users/{user_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["project_id", "user_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "projects/retrieveProject": {
      method: "GET",
      path: "/organization/projects/{project_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: null,
      bodyParams: null
    },

    "projects/retrieveProjectApiKey": {
      method: "GET",
      path: "/organization/projects/{project_id}/api_keys/{api_key_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id", "api_key_id"],
      queryParams: null,
      bodyParams: null
    },

    "projects/retrieveProjectModelPermissions": {
      method: "GET",
      path: "/organization/projects/{project_id}/model_permissions",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: null,
      bodyParams: null
    },

    "projects/retrieveProjectServiceAccount": {
      method: "GET",
      path: "/organization/projects/{project_id}/service_accounts/{service_account_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id", "service_account_id"],
      queryParams: null,
      bodyParams: null
    },

    "projects/retrieveProjectUser": {
      method: "GET",
      path: "/organization/projects/{project_id}/users/{user_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id", "user_id"],
      queryParams: null,
      bodyParams: null
    },

    "projects/updateProjectModelPermissions": {
      method: "POST",
      path: "/organization/projects/{project_id}/model_permissions",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "projects/updateProjectRateLimits": {
      method: "POST",
      path: "/organization/projects/{project_id}/rate_limits/{rate_limit_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["project_id", "rate_limit_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "projects/updateProjectServiceAccount": {
      method: "POST",
      path: "/organization/projects/{project_id}/service_accounts/{service_account_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["project_id", "service_account_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "realtime/acceptRealtimeCall": {
      method: "POST",
      path: "/realtime/calls/{call_id}/accept",
      consumes: ["application/json"],
      produces: [],
      pathParams: ["call_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "realtime/createRealtimeCall": {
      method: "POST",
      path: "/realtime/calls",
      consumes: ["multipart/form-data","application/sdp"],
      produces: ["application/sdp"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "multipart/form-data",
        canMerge: false
      }
    },

    "realtime/createRealtimeClientSecret": {
      method: "POST",
      path: "/realtime/client_secrets",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "realtime/createRealtimeSession": {
      method: "POST",
      path: "/realtime/sessions",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "realtime/createRealtimeTranscriptionSession": {
      method: "POST",
      path: "/realtime/transcription_sessions",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "realtime/createRealtimeTranslationClientSecret": {
      method: "POST",
      path: "/realtime/translations/client_secrets",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "realtime/hangupRealtimeCall": {
      method: "POST",
      path: "/realtime/calls/{call_id}/hangup",
      consumes: [],
      produces: [],
      pathParams: ["call_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "realtime/referRealtimeCall": {
      method: "POST",
      path: "/realtime/calls/{call_id}/refer",
      consumes: ["application/json"],
      produces: [],
      pathParams: ["call_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "realtime/rejectRealtimeCall": {
      method: "POST",
      path: "/realtime/calls/{call_id}/reject",
      consumes: ["application/json"],
      produces: [],
      pathParams: ["call_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "responses/beta_cancelResponse": {
      method: "POST",
      path: "/responses/{response_id}/cancel?beta=true",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["response_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "responses/beta_createResponse": {
      method: "POST",
      path: "/responses?beta=true",
      consumes: ["application/json"],
      produces: ["application/json","text/event-stream"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "responses/beta_deleteResponse": {
      method: "DELETE",
      path: "/responses/{response_id}?beta=true",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["response_id"],
      queryParams: null,
      bodyParams: null
    },

    "responses/beta_getResponse": {
      method: "GET",
      path: "/responses/{response_id}?beta=true",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["response_id"],
      queryParams: ["include", "stream", "starting_after", "include_obfuscation"],
      bodyParams: null
    },

    "responses/beta_listInputItems": {
      method: "GET",
      path: "/responses/{response_id}/input_items?beta=true",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["response_id"],
      queryParams: ["limit", "order", "after", "include"],
      bodyParams: null
    },

    "responses/cancelResponse": {
      method: "POST",
      path: "/responses/{response_id}/cancel",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["response_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "responses/createResponse": {
      method: "POST",
      path: "/responses",
      consumes: ["application/json"],
      produces: ["application/json","text/event-stream"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "responses/deleteResponse": {
      method: "DELETE",
      path: "/responses/{response_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["response_id"],
      queryParams: null,
      bodyParams: null
    },

    "responses/getResponse": {
      method: "GET",
      path: "/responses/{response_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["response_id"],
      queryParams: ["include", "stream", "starting_after", "include_obfuscation"],
      bodyParams: null
    },

    "responses/listInputItems": {
      method: "GET",
      path: "/responses/{response_id}/input_items",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["response_id"],
      queryParams: ["limit", "order", "after", "include"],
      bodyParams: null
    },

    "roles/createProjectRole": {
      method: "POST",
      path: "/projects/{project_id}/roles",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "roles/createRole": {
      method: "POST",
      path: "/organization/roles",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "roles/deleteProjectRole": {
      method: "DELETE",
      path: "/projects/{project_id}/roles/{role_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id", "role_id"],
      queryParams: null,
      bodyParams: null
    },

    "roles/deleteRole": {
      method: "DELETE",
      path: "/organization/roles/{role_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["role_id"],
      queryParams: null,
      bodyParams: null
    },

    "roles/listProjectRoles": {
      method: "GET",
      path: "/projects/{project_id}/roles",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: ["limit", "after", "order"],
      bodyParams: null
    },

    "roles/listRoles": {
      method: "GET",
      path: "/organization/roles",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["limit", "after", "order"],
      bodyParams: null
    },

    "roles/retrieveProjectRole": {
      method: "GET",
      path: "/projects/{project_id}/roles/{role_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id", "role_id"],
      queryParams: null,
      bodyParams: null
    },

    "roles/retrieveRole": {
      method: "GET",
      path: "/organization/roles/{role_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["role_id"],
      queryParams: null,
      bodyParams: null
    },

    "roles/updateProjectRole": {
      method: "POST",
      path: "/projects/{project_id}/roles/{role_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["project_id", "role_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "roles/updateRole": {
      method: "POST",
      path: "/organization/roles/{role_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["role_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "skills/CreateSkill": {
      method: "POST",
      path: "/skills",
      consumes: ["multipart/form-data","application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "multipart/form-data",
        canMerge: false
      }
    },

    "skills/CreateSkillVersion": {
      method: "POST",
      path: "/skills/{skill_id}/versions",
      consumes: ["multipart/form-data","application/json"],
      produces: ["application/json"],
      pathParams: ["skill_id"],
      queryParams: null,
      bodyParams: {
        contentType: "multipart/form-data",
        canMerge: false
      }
    },

    "skills/DeleteSkill": {
      method: "DELETE",
      path: "/skills/{skill_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["skill_id"],
      queryParams: null,
      bodyParams: null
    },

    "skills/DeleteSkillVersion": {
      method: "DELETE",
      path: "/skills/{skill_id}/versions/{version}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["skill_id", "version"],
      queryParams: null,
      bodyParams: null
    },

    "skills/GetSkill": {
      method: "GET",
      path: "/skills/{skill_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["skill_id"],
      queryParams: null,
      bodyParams: null
    },

    "skills/GetSkillContent": {
      method: "GET",
      path: "/skills/{skill_id}/content",
      consumes: [],
      produces: ["application/zip","application/json"],
      pathParams: ["skill_id"],
      queryParams: null,
      bodyParams: null
    },

    "skills/GetSkillVersion": {
      method: "GET",
      path: "/skills/{skill_id}/versions/{version}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["skill_id", "version"],
      queryParams: null,
      bodyParams: null
    },

    "skills/GetSkillVersionContent": {
      method: "GET",
      path: "/skills/{skill_id}/versions/{version}/content",
      consumes: [],
      produces: ["application/zip","application/json"],
      pathParams: ["skill_id", "version"],
      queryParams: null,
      bodyParams: null
    },

    "skills/ListSkillVersions": {
      method: "GET",
      path: "/skills/{skill_id}/versions",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["skill_id"],
      queryParams: ["limit", "order", "after"],
      bodyParams: null
    },

    "skills/ListSkills": {
      method: "GET",
      path: "/skills",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["limit", "order", "after"],
      bodyParams: null
    },

    "skills/UpdateSkillDefaultVersion": {
      method: "POST",
      path: "/skills/{skill_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["skill_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "spendAlerts/createOrganizationSpendAlert": {
      method: "POST",
      path: "/organization/spend_alerts",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "spendAlerts/createProjectSpendAlert": {
      method: "POST",
      path: "/organization/projects/{project_id}/spend_alerts",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "spendAlerts/deleteOrganizationSpendAlert": {
      method: "DELETE",
      path: "/organization/spend_alerts/{alert_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["alert_id"],
      queryParams: null,
      bodyParams: null
    },

    "spendAlerts/deleteProjectSpendAlert": {
      method: "DELETE",
      path: "/organization/projects/{project_id}/spend_alerts/{alert_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id", "alert_id"],
      queryParams: null,
      bodyParams: null
    },

    "spendAlerts/listOrganizationSpendAlerts": {
      method: "GET",
      path: "/organization/spend_alerts",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["limit", "order", "after", "before"],
      bodyParams: null
    },

    "spendAlerts/listProjectSpendAlerts": {
      method: "GET",
      path: "/organization/projects/{project_id}/spend_alerts",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id"],
      queryParams: ["limit", "order", "after", "before"],
      bodyParams: null
    },

    "spendAlerts/retrieveOrganizationSpendAlert": {
      method: "GET",
      path: "/organization/spend_alerts/{alert_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["alert_id"],
      queryParams: null,
      bodyParams: null
    },

    "spendAlerts/retrieveProjectSpendAlert": {
      method: "GET",
      path: "/organization/projects/{project_id}/spend_alerts/{alert_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["project_id", "alert_id"],
      queryParams: null,
      bodyParams: null
    },

    "spendAlerts/updateOrganizationSpendAlert": {
      method: "POST",
      path: "/organization/spend_alerts/{alert_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["alert_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "spendAlerts/updateProjectSpendAlert": {
      method: "POST",
      path: "/organization/projects/{project_id}/spend_alerts/{alert_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["project_id", "alert_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "uploads/addUploadPart": {
      method: "POST",
      path: "/uploads/{upload_id}/parts",
      consumes: ["multipart/form-data"],
      produces: ["application/json"],
      pathParams: ["upload_id"],
      queryParams: null,
      bodyParams: {
        contentType: "multipart/form-data",
        canMerge: false
      }
    },

    "uploads/cancelUpload": {
      method: "POST",
      path: "/uploads/{upload_id}/cancel",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["upload_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "uploads/completeUpload": {
      method: "POST",
      path: "/uploads/{upload_id}/complete",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["upload_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "uploads/createUpload": {
      method: "POST",
      path: "/uploads",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "usage/usageAudioSpeeches": {
      method: "GET",
      path: "/organization/usage/audio_speeches",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["start_time", "end_time", "bucket_width", "project_ids", "user_ids", "api_key_ids", "models", "group_by", "limit", "page"],
      bodyParams: null
    },

    "usage/usageAudioTranscriptions": {
      method: "GET",
      path: "/organization/usage/audio_transcriptions",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["start_time", "end_time", "bucket_width", "project_ids", "user_ids", "api_key_ids", "models", "group_by", "limit", "page"],
      bodyParams: null
    },

    "usage/usageCodeInterpreterSessions": {
      method: "GET",
      path: "/organization/usage/code_interpreter_sessions",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["start_time", "end_time", "bucket_width", "project_ids", "group_by", "limit", "page"],
      bodyParams: null
    },

    "usage/usageCompletions": {
      method: "GET",
      path: "/organization/usage/completions",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["start_time", "end_time", "bucket_width", "project_ids", "user_ids", "api_key_ids", "models", "batch", "group_by", "limit", "page"],
      bodyParams: null
    },

    "usage/usageCosts": {
      method: "GET",
      path: "/organization/costs",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["start_time", "end_time", "bucket_width", "project_ids", "api_key_ids", "group_by", "limit", "page"],
      bodyParams: null
    },

    "usage/usageEmbeddings": {
      method: "GET",
      path: "/organization/usage/embeddings",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["start_time", "end_time", "bucket_width", "project_ids", "user_ids", "api_key_ids", "models", "group_by", "limit", "page"],
      bodyParams: null
    },

    "usage/usageFileSearchCalls": {
      method: "GET",
      path: "/organization/usage/file_search_calls",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["start_time", "end_time", "bucket_width", "project_ids", "user_ids", "api_key_ids", "vector_store_ids", "group_by", "limit", "page"],
      bodyParams: null
    },

    "usage/usageImages": {
      method: "GET",
      path: "/organization/usage/images",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["start_time", "end_time", "bucket_width", "sources", "sizes", "project_ids", "user_ids", "api_key_ids", "models", "group_by", "limit", "page"],
      bodyParams: null
    },

    "usage/usageModerations": {
      method: "GET",
      path: "/organization/usage/moderations",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["start_time", "end_time", "bucket_width", "project_ids", "user_ids", "api_key_ids", "models", "group_by", "limit", "page"],
      bodyParams: null
    },

    "usage/usageVectorStores": {
      method: "GET",
      path: "/organization/usage/vector_stores",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["start_time", "end_time", "bucket_width", "project_ids", "group_by", "limit", "page"],
      bodyParams: null
    },

    "usage/usageWebSearchCalls": {
      method: "GET",
      path: "/organization/usage/web_search_calls",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["start_time", "end_time", "bucket_width", "project_ids", "user_ids", "api_key_ids", "models", "context_levels", "group_by", "limit", "page"],
      bodyParams: null
    },

    "userOrganizationRoleAssignments/assignUserRole": {
      method: "POST",
      path: "/organization/users/{user_id}/roles",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["user_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "userOrganizationRoleAssignments/listUserRoleAssignments": {
      method: "GET",
      path: "/organization/users/{user_id}/roles",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["user_id"],
      queryParams: ["limit", "after", "order"],
      bodyParams: null
    },

    "userOrganizationRoleAssignments/retrieveUserRole": {
      method: "GET",
      path: "/organization/users/{user_id}/roles/{role_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["user_id", "role_id"],
      queryParams: null,
      bodyParams: null
    },

    "userOrganizationRoleAssignments/unassignUserRole": {
      method: "DELETE",
      path: "/organization/users/{user_id}/roles/{role_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["user_id", "role_id"],
      queryParams: null,
      bodyParams: null
    },

    "users/deleteUser": {
      method: "DELETE",
      path: "/organization/users/{user_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["user_id"],
      queryParams: null,
      bodyParams: null
    },

    "users/listUsers": {
      method: "GET",
      path: "/organization/users",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["limit", "after", "emails"],
      bodyParams: null
    },

    "users/modifyUser": {
      method: "POST",
      path: "/organization/users/{user_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["user_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "users/retrieveUser": {
      method: "GET",
      path: "/organization/users/{user_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["user_id"],
      queryParams: null,
      bodyParams: null
    },

    "vectorStores/cancelVectorStoreFileBatch": {
      method: "POST",
      path: "/vector_stores/{vector_store_id}/file_batches/{batch_id}/cancel",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["vector_store_id", "batch_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "vectorStores/createVectorStore": {
      method: "POST",
      path: "/vector_stores",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "vectorStores/createVectorStoreFile": {
      method: "POST",
      path: "/vector_stores/{vector_store_id}/files",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["vector_store_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "vectorStores/createVectorStoreFileBatch": {
      method: "POST",
      path: "/vector_stores/{vector_store_id}/file_batches",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["vector_store_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "vectorStores/deleteVectorStore": {
      method: "DELETE",
      path: "/vector_stores/{vector_store_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["vector_store_id"],
      queryParams: null,
      bodyParams: null
    },

    "vectorStores/deleteVectorStoreFile": {
      method: "DELETE",
      path: "/vector_stores/{vector_store_id}/files/{file_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["vector_store_id", "file_id"],
      queryParams: null,
      bodyParams: null
    },

    "vectorStores/getVectorStore": {
      method: "GET",
      path: "/vector_stores/{vector_store_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["vector_store_id"],
      queryParams: null,
      bodyParams: null
    },

    "vectorStores/getVectorStoreFile": {
      method: "GET",
      path: "/vector_stores/{vector_store_id}/files/{file_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["vector_store_id", "file_id"],
      queryParams: null,
      bodyParams: null
    },

    "vectorStores/getVectorStoreFileBatch": {
      method: "GET",
      path: "/vector_stores/{vector_store_id}/file_batches/{batch_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["vector_store_id", "batch_id"],
      queryParams: null,
      bodyParams: null
    },

    "vectorStores/listFilesInVectorStoreBatch": {
      method: "GET",
      path: "/vector_stores/{vector_store_id}/file_batches/{batch_id}/files",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["vector_store_id", "batch_id"],
      queryParams: ["limit", "order", "after", "before", "filter"],
      bodyParams: null
    },

    "vectorStores/listVectorStoreFiles": {
      method: "GET",
      path: "/vector_stores/{vector_store_id}/files",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["vector_store_id"],
      queryParams: ["limit", "order", "after", "before", "filter"],
      bodyParams: null
    },

    "vectorStores/listVectorStores": {
      method: "GET",
      path: "/vector_stores",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["limit", "order", "after", "before"],
      bodyParams: null
    },

    "vectorStores/modifyVectorStore": {
      method: "POST",
      path: "/vector_stores/{vector_store_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["vector_store_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "vectorStores/retrieveVectorStoreFileContent": {
      method: "GET",
      path: "/vector_stores/{vector_store_id}/files/{file_id}/content",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["vector_store_id", "file_id"],
      queryParams: null,
      bodyParams: null
    },

    "vectorStores/searchVectorStore": {
      method: "POST",
      path: "/vector_stores/{vector_store_id}/search",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["vector_store_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "vectorStores/updateVectorStoreFileAttributes": {
      method: "POST",
      path: "/vector_stores/{vector_store_id}/files/{file_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["vector_store_id", "file_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "videos/CreateVideoCharacter": {
      method: "POST",
      path: "/videos/characters",
      consumes: ["multipart/form-data"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "multipart/form-data",
        canMerge: false
      }
    },

    "videos/CreateVideoEdit": {
      method: "POST",
      path: "/videos/edits",
      consumes: ["multipart/form-data","application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "multipart/form-data",
        canMerge: false
      }
    },

    "videos/CreateVideoExtend": {
      method: "POST",
      path: "/videos/extensions",
      consumes: ["multipart/form-data","application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "multipart/form-data",
        canMerge: false
      }
    },

    "videos/CreateVideoRemix": {
      method: "POST",
      path: "/videos/{video_id}/remix",
      consumes: ["multipart/form-data","application/json"],
      produces: ["application/json"],
      pathParams: ["video_id"],
      queryParams: null,
      bodyParams: {
        contentType: "multipart/form-data",
        canMerge: false
      }
    },

    "videos/DeleteVideo": {
      method: "DELETE",
      path: "/videos/{video_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["video_id"],
      queryParams: null,
      bodyParams: null
    },

    "videos/GetVideo": {
      method: "GET",
      path: "/videos/{video_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["video_id"],
      queryParams: null,
      bodyParams: null
    },

    "videos/GetVideoCharacter": {
      method: "GET",
      path: "/videos/characters/{character_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["character_id"],
      queryParams: null,
      bodyParams: null
    },

    "videos/ListVideos": {
      method: "GET",
      path: "/videos",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["limit", "order", "after"],
      bodyParams: null
    },

    "videos/RetrieveVideoContent": {
      method: "GET",
      path: "/videos/{video_id}/content",
      consumes: [],
      produces: ["video/mp4","image/webp","application/json"],
      pathParams: ["video_id"],
      queryParams: ["variant"],
      bodyParams: null
    },

    "videos/createVideo": {
      method: "POST",
      path: "/videos",
      consumes: ["multipart/form-data","application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "multipart/form-data",
        canMerge: false
      }
    }
  }
} as const;
