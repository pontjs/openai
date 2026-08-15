/**
 * @title Active Status 数据结构
 * @description OpenAI API 合约中的 Active Status 结构定义。
 */
export type ActiveStatus = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'active';
}

/**
 * @title Add Upload Part Request 数据结构
 * @description OpenAI API 合约中的 Add Upload Part Request 结构定义。
 */
export type AddUploadPartRequest = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Blob;
}

/**
 * @title Additional Tools 数据结构
 * @description OpenAI API 合约中的 Additional Tools 结构定义。
 */
export type AdditionalTools = {
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: MessageRole;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools: Array<Tool>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'additional_tools';
}

/**
 * @title Additional Tools Item Param 数据结构
 * @description OpenAI API 合约中的 Additional Tools Item Param 结构定义。
 */
export type AdditionalToolsItemParam = {
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'developer';
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools: Array<Tool>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'additional_tools';
}

/**
 * @title Admin Api Key 数据结构
 * @description OpenAI API 合约中的 Admin Api Key 结构定义。
 */
export type AdminApiKey = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title expires at 值
   * @description OpenAI API 合约中的 expires at 值。
   */
  expires_at: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title last used at 值
   * @description OpenAI API 合约中的 last used at 值。
   */
  last_used_at?: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.admin_api_key';
  /**
   * @title owner 值
   * @description OpenAI API 合约中的 owner 值。
   */
  owner: {
    /**
     * @title created at 值
     * @description OpenAI API 合约中的 created at 值。
     */
    created_at?: number;
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name?: string;
    /**
     * @title object 值
     * @description OpenAI API 合约中的 object 值。
     */
    object?: string;
    /**
     * @title role 值
     * @description OpenAI API 合约中的 role 值。
     */
    role?: string;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: string
  };
  /**
   * @title redacted value 值
   * @description OpenAI API 合约中的 redacted value 值。
   */
  redacted_value: string;
}

/**
 * @title Admin Api Key Create Response 数据结构
 * @description OpenAI API 合约中的 Admin Api Key Create Response 结构定义。
 */
export type AdminApiKeyCreateResponse = any

/**
 * @title Annotation 数据结构
 * @description OpenAI API 合约中的 Annotation 结构定义。
 */
export type Annotation = any

/**
 * @title Api Key List 数据结构
 * @description OpenAI API 合约中的 Api Key List 结构定义。
 */
export type ApiKeyList = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<AdminApiKey>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id?: any;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id?: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Apply Patch Call Output Status 数据结构
 * @description OpenAI API 合约中的 Apply Patch Call Output Status 结构定义。
 */
export type ApplyPatchCallOutputStatus = 'completed' | 'failed'

/**
 * @title Apply Patch Call Output Status Param 数据结构
 * @description OpenAI API 合约中的 Apply Patch Call Output Status Param 结构定义。
 */
export type ApplyPatchCallOutputStatusParam = 'completed' | 'failed'

/**
 * @title Apply Patch Call Status 数据结构
 * @description OpenAI API 合约中的 Apply Patch Call Status 结构定义。
 */
export type ApplyPatchCallStatus = 'in_progress' | 'completed'

/**
 * @title Apply Patch Call Status Param 数据结构
 * @description OpenAI API 合约中的 Apply Patch Call Status Param 结构定义。
 */
export type ApplyPatchCallStatusParam = 'in_progress' | 'completed'

/**
 * @title Apply Patch Create File Operation 数据结构
 * @description OpenAI API 合约中的 Apply Patch Create File Operation 结构定义。
 */
export type ApplyPatchCreateFileOperation = {
  /**
   * @title diff 值
   * @description OpenAI API 合约中的 diff 值。
   */
  diff: string;
  /**
   * @title path 值
   * @description OpenAI API 合约中的 path 值。
   */
  path: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'create_file';
}

/**
 * @title Apply Patch Create File Operation Param 数据结构
 * @description OpenAI API 合约中的 Apply Patch Create File Operation Param 结构定义。
 */
export type ApplyPatchCreateFileOperationParam = {
  /**
   * @title diff 值
   * @description OpenAI API 合约中的 diff 值。
   */
  diff: string;
  /**
   * @title path 值
   * @description OpenAI API 合约中的 path 值。
   */
  path: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'create_file';
}

/**
 * @title Apply Patch Delete File Operation 数据结构
 * @description OpenAI API 合约中的 Apply Patch Delete File Operation 结构定义。
 */
export type ApplyPatchDeleteFileOperation = {
  /**
   * @title path 值
   * @description OpenAI API 合约中的 path 值。
   */
  path: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'delete_file';
}

/**
 * @title Apply Patch Delete File Operation Param 数据结构
 * @description OpenAI API 合约中的 Apply Patch Delete File Operation Param 结构定义。
 */
export type ApplyPatchDeleteFileOperationParam = {
  /**
   * @title path 值
   * @description OpenAI API 合约中的 path 值。
   */
  path: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'delete_file';
}

/**
 * @title Apply Patch Operation Param 数据结构
 * @description OpenAI API 合约中的 Apply Patch Operation Param 结构定义。
 */
export type ApplyPatchOperationParam = any

/**
 * @title Apply Patch Tool Call 数据结构
 * @description OpenAI API 合约中的 Apply Patch Tool Call 结构定义。
 */
export type ApplyPatchToolCall = {
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title created by 值
   * @description OpenAI API 合约中的 created by 值。
   */
  created_by?: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title operation 值
   * @description OpenAI API 合约中的 operation 值。
   */
  operation: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: ApplyPatchCallStatus;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'apply_patch_call';
}

/**
 * @title Apply Patch Tool Call Item Param 数据结构
 * @description OpenAI API 合约中的 Apply Patch Tool Call Item Param 结构定义。
 */
export type ApplyPatchToolCallItemParam = {
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title operation 值
   * @description OpenAI API 合约中的 operation 值。
   */
  operation: ApplyPatchOperationParam;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: ApplyPatchCallStatusParam;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'apply_patch_call';
}

/**
 * @title Apply Patch Tool Call Output 数据结构
 * @description OpenAI API 合约中的 Apply Patch Tool Call Output 结构定义。
 */
export type ApplyPatchToolCallOutput = {
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title created by 值
   * @description OpenAI API 合约中的 created by 值。
   */
  created_by?: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output?: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: ApplyPatchCallOutputStatus;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'apply_patch_call_output';
}

/**
 * @title Apply Patch Tool Call Output Item Param 数据结构
 * @description OpenAI API 合约中的 Apply Patch Tool Call Output Item Param 结构定义。
 */
export type ApplyPatchToolCallOutputItemParam = {
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output?: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: ApplyPatchCallOutputStatusParam;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'apply_patch_call_output';
}

/**
 * @title Apply Patch Tool Param 数据结构
 * @description OpenAI API 合约中的 Apply Patch Tool Param 结构定义。
 */
export type ApplyPatchToolParam = {
  /**
   * @title allowed callers 值
   * @description OpenAI API 合约中的 allowed callers 值。
   */
  allowed_callers?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'apply_patch';
}

/**
 * @title Apply Patch Update File Operation 数据结构
 * @description OpenAI API 合约中的 Apply Patch Update File Operation 结构定义。
 */
export type ApplyPatchUpdateFileOperation = {
  /**
   * @title diff 值
   * @description OpenAI API 合约中的 diff 值。
   */
  diff: string;
  /**
   * @title path 值
   * @description OpenAI API 合约中的 path 值。
   */
  path: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'update_file';
}

/**
 * @title Apply Patch Update File Operation Param 数据结构
 * @description OpenAI API 合约中的 Apply Patch Update File Operation Param 结构定义。
 */
export type ApplyPatchUpdateFileOperationParam = {
  /**
   * @title diff 值
   * @description OpenAI API 合约中的 diff 值。
   */
  diff: string;
  /**
   * @title path 值
   * @description OpenAI API 合约中的 path 值。
   */
  path: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'update_file';
}

/**
 * @title Approximate Location 数据结构
 * @description OpenAI API 合约中的 Approximate Location 结构定义。
 */
export type ApproximateLocation = {
  /**
   * @title city 值
   * @description OpenAI API 合约中的 city 值。
   */
  city?: any;
  /**
   * @title country 值
   * @description OpenAI API 合约中的 country 值。
   */
  country?: any;
  /**
   * @title region 值
   * @description OpenAI API 合约中的 region 值。
   */
  region?: any;
  /**
   * @title timezone 值
   * @description OpenAI API 合约中的 timezone 值。
   */
  timezone?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'approximate';
}

/**
 * @title Assigned Role Details 数据结构
 * @description OpenAI API 合约中的 Assigned Role Details 结构定义。
 */
export type AssignedRoleDetails = {
  /**
   * @title assignment sources 值
   * @description OpenAI API 合约中的 assignment sources 值。
   */
  assignment_sources: any;
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: any;
  /**
   * @title created by 值
   * @description OpenAI API 合约中的 created by 值。
   */
  created_by: any;
  /**
   * @title created by user obj 值
   * @description OpenAI API 合约中的 created by user obj 值。
   */
  created_by_user_obj: any;
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title permissions 值
   * @description OpenAI API 合约中的 permissions 值。
   */
  permissions: Array<string>;
  /**
   * @title predefined role 值
   * @description OpenAI API 合约中的 predefined role 值。
   */
  predefined_role: boolean;
  /**
   * @title resource type 值
   * @description OpenAI API 合约中的 resource type 值。
   */
  resource_type: string;
  /**
   * @title updated at 值
   * @description OpenAI API 合约中的 updated at 值。
   */
  updated_at: any;
}

/**
 * @title Assistant Message Item 数据结构
 * @description OpenAI API 合约中的 Assistant Message Item 结构定义。
 */
export type AssistantMessageItem = {
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: Array<ResponseOutputText>;
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'chatkit.thread_item';
  /**
   * @title thread id 值
   * @description OpenAI API 合约中的 thread id 值。
   */
  thread_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'chatkit.assistant_message';
}

/**
 * @title Assistant Object 数据结构
 * @description OpenAI API 合约中的 Assistant Object 结构定义。
 */
export type AssistantObject = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title instructions 值
   * @description OpenAI API 合约中的 instructions 值。
   */
  instructions: any;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata: Metadata;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'assistant';
  /**
   * @title response format 值
   * @description OpenAI API 合约中的 response format 值。
   */
  response_format?: any;
  /**
   * @title temperature 值
   * @description OpenAI API 合约中的 temperature 值。
   */
  temperature?: any;
  /**
   * @title tool resources 值
   * @description OpenAI API 合约中的 tool resources 值。
   */
  tool_resources?: any;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools: Array<any>;
  /**
   * @title top p 值
   * @description OpenAI API 合约中的 top p 值。
   */
  top_p?: any;
}

/**
 * @title Assistant Stream Event 数据结构
 * @description OpenAI API 合约中的 Assistant Stream Event 结构定义。
 */
export type AssistantStreamEvent = any

/**
 * @title Assistant Supported Models 数据结构
 * @description OpenAI API 合约中的 Assistant Supported Models 结构定义。
 */
export type AssistantSupportedModels = 'gpt-5' | 'gpt-5-mini' | 'gpt-5-nano' | 'gpt-5-2025-08-07' | 'gpt-5-mini-2025-08-07' | 'gpt-5-nano-2025-08-07' | 'gpt-4.1' | 'gpt-4.1-mini' | 'gpt-4.1-nano' | 'gpt-4.1-2025-04-14' | 'gpt-4.1-mini-2025-04-14' | 'gpt-4.1-nano-2025-04-14' | 'o3-mini' | 'o3-mini-2025-01-31' | 'o1' | 'o1-2024-12-17' | 'gpt-4o' | 'gpt-4o-2024-11-20' | 'gpt-4o-2024-08-06' | 'gpt-4o-2024-05-13' | 'gpt-4o-mini' | 'gpt-4o-mini-2024-07-18' | 'gpt-4.5-preview' | 'gpt-4.5-preview-2025-02-27' | 'gpt-4-turbo' | 'gpt-4-turbo-2024-04-09' | 'gpt-4-0125-preview' | 'gpt-4-turbo-preview' | 'gpt-4-1106-preview' | 'gpt-4-vision-preview' | 'gpt-4' | 'gpt-4-0314' | 'gpt-4-0613' | 'gpt-4-32k' | 'gpt-4-32k-0314' | 'gpt-4-32k-0613' | 'gpt-3.5-turbo' | 'gpt-3.5-turbo-16k' | 'gpt-3.5-turbo-0613' | 'gpt-3.5-turbo-1106' | 'gpt-3.5-turbo-0125' | 'gpt-3.5-turbo-16k-0613'

/**
 * @title Assistant Tools Code 数据结构
 * @description OpenAI API 合约中的 Assistant Tools Code 结构定义。
 */
export type AssistantToolsCode = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'code_interpreter';
}

/**
 * @title Assistant Tools File Search 数据结构
 * @description OpenAI API 合约中的 Assistant Tools File Search 结构定义。
 */
export type AssistantToolsFileSearch = {
  /**
   * @title file search 值
   * @description OpenAI API 合约中的 file search 值。
   */
  file_search?: {
    /**
     * @title max num results 值
     * @description OpenAI API 合约中的 max num results 值。
     */
    max_num_results?: number;
    /**
     * @title ranking options 值
     * @description OpenAI API 合约中的 ranking options 值。
     */
    ranking_options?: FileSearchRankingOptions
  };
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file_search';
}

/**
 * @title Assistant Tools File Search Type Only 数据结构
 * @description OpenAI API 合约中的 Assistant Tools File Search Type Only 结构定义。
 */
export type AssistantToolsFileSearchTypeOnly = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file_search';
}

/**
 * @title Assistant Tools Function 数据结构
 * @description OpenAI API 合约中的 Assistant Tools Function 结构定义。
 */
export type AssistantToolsFunction = {
  /**
   * @title function 值
   * @description OpenAI API 合约中的 function 值。
   */
  function: FunctionObject;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'function';
}

/**
 * @title Assistants Api Response Format Option 数据结构
 * @description OpenAI API 合约中的 Assistants Api Response Format Option 结构定义。
 */
export type AssistantsApiResponseFormatOption = any

/**
 * @title Assistants Api Tool Choice Option 数据结构
 * @description OpenAI API 合约中的 Assistants Api Tool Choice Option 结构定义。
 */
export type AssistantsApiToolChoiceOption = any

/**
 * @title Assistants Named Tool Choice 数据结构
 * @description OpenAI API 合约中的 Assistants Named Tool Choice 结构定义。
 */
export type AssistantsNamedToolChoice = {
  /**
   * @title function 值
   * @description OpenAI API 合约中的 function 值。
   */
  function?: {
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name: string
  };
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'function' | 'code_interpreter' | 'file_search';
}

/**
 * @title Attachment 数据结构
 * @description OpenAI API 合约中的 Attachment 结构定义。
 */
export type Attachment = {
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title mime type 值
   * @description OpenAI API 合约中的 mime type 值。
   */
  mime_type: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title preview url 值
   * @description OpenAI API 合约中的 preview url 值。
   */
  preview_url: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: AttachmentType;
}

/**
 * @title Attachment Type 数据结构
 * @description OpenAI API 合约中的 Attachment Type 结构定义。
 */
export type AttachmentType = 'image' | 'file'

/**
 * @title Audio Response Format 数据结构
 * @description OpenAI API 合约中的 Audio Response Format 结构定义。
 */
export type AudioResponseFormat = 'json' | 'text' | 'srt' | 'verbose_json' | 'vtt' | 'diarized_json'

/**
 * @title Audio Transcription 数据结构
 * @description OpenAI API 合约中的 Audio Transcription 结构定义。
 */
export type AudioTranscription = {
  /**
   * @title delay 值
   * @description OpenAI API 合约中的 delay 值。
   */
  delay?: 'minimal' | 'low' | 'medium' | 'high' | 'xhigh';
  /**
   * @title keywords 值
   * @description OpenAI API 合约中的 keywords 值。
   */
  keywords?: Array<string>;
  /**
   * @title language 值
   * @description OpenAI API 合约中的 language 值。
   */
  language?: string;
  /**
   * @title languages 值
   * @description OpenAI API 合约中的 languages 值。
   */
  languages?: Array<string>;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt?: string;
}

/**
 * @title Audio Transcription Response 数据结构
 * @description OpenAI API 合约中的 Audio Transcription Response 结构定义。
 */
export type AudioTranscriptionResponse = {
  /**
   * @title language 值
   * @description OpenAI API 合约中的 language 值。
   */
  language?: string;
  /**
   * @title languages 值
   * @description OpenAI API 合约中的 languages 值。
   */
  languages?: Array<string>;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt?: string;
}

/**
 * @title Audit Log 数据结构
 * @description OpenAI API 合约中的 Audit Log 结构定义。
 */
export type AuditLog = {
  /**
   * @title actor 值
   * @description OpenAI API 合约中的 actor 值。
   */
  actor?: any;
  /**
   * @title api key created 值
   * @description OpenAI API 合约中的 api key created 值。
   */
  'api_key.created'?: {
    /**
     * @title data 值
     * @description OpenAI API 合约中的 data 值。
     */
    data?: {
      /**
       * @title scopes 值
       * @description OpenAI API 合约中的 scopes 值。
       */
      scopes?: Array<string>
    };
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title api key deleted 值
   * @description OpenAI API 合约中的 api key deleted 值。
   */
  'api_key.deleted'?: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title api key updated 值
   * @description OpenAI API 合约中的 api key updated 值。
   */
  'api_key.updated'?: {
    /**
     * @title changes requested 值
     * @description OpenAI API 合约中的 changes requested 值。
     */
    changes_requested?: {
      /**
       * @title scopes 值
       * @description OpenAI API 合约中的 scopes 值。
       */
      scopes?: Array<string>
    };
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title certificate created 值
   * @description OpenAI API 合约中的 certificate created 值。
   */
  'certificate.created'?: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name?: string
  };
  /**
   * @title certificate deleted 值
   * @description OpenAI API 合约中的 certificate deleted 值。
   */
  'certificate.deleted'?: {
    /**
     * @title certificate 值
     * @description OpenAI API 合约中的 certificate 值。
     */
    certificate?: string;
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name?: string
  };
  /**
   * @title certificate updated 值
   * @description OpenAI API 合约中的 certificate updated 值。
   */
  'certificate.updated'?: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name?: string
  };
  /**
   * @title certificates activated 值
   * @description OpenAI API 合约中的 certificates activated 值。
   */
  'certificates.activated'?: {
    /**
     * @title certificates 值
     * @description OpenAI API 合约中的 certificates 值。
     */
    certificates?: Array<{
      /**
       * @title id 值
       * @description OpenAI API 合约中的 id 值。
       */
      id?: string;
      /**
       * @title name 值
       * @description OpenAI API 合约中的 name 值。
       */
      name?: string
    }>
  };
  /**
   * @title certificates deactivated 值
   * @description OpenAI API 合约中的 certificates deactivated 值。
   */
  'certificates.deactivated'?: {
    /**
     * @title certificates 值
     * @description OpenAI API 合约中的 certificates 值。
     */
    certificates?: Array<{
      /**
       * @title id 值
       * @description OpenAI API 合约中的 id 值。
       */
      id?: string;
      /**
       * @title name 值
       * @description OpenAI API 合约中的 name 值。
       */
      name?: string
    }>
  };
  /**
   * @title checkpoint permission created 值
   * @description OpenAI API 合约中的 checkpoint permission created 值。
   */
  'checkpoint.permission.created'?: {
    /**
     * @title data 值
     * @description OpenAI API 合约中的 data 值。
     */
    data?: {
      /**
       * @title fine tuned model checkpoint 值
       * @description OpenAI API 合约中的 fine tuned model checkpoint 值。
       */
      fine_tuned_model_checkpoint?: string;
      /**
       * @title project id 值
       * @description OpenAI API 合约中的 project id 值。
       */
      project_id?: string
    };
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title checkpoint permission deleted 值
   * @description OpenAI API 合约中的 checkpoint permission deleted 值。
   */
  'checkpoint.permission.deleted'?: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title effective at 值
   * @description OpenAI API 合约中的 effective at 值。
   */
  effective_at: number;
  /**
   * @title external key registered 值
   * @description OpenAI API 合约中的 external key registered 值。
   */
  'external_key.registered'?: {
    /**
     * @title data 值
     * @description OpenAI API 合约中的 data 值。
     */
    data?: any;
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title external key removed 值
   * @description OpenAI API 合约中的 external key removed 值。
   */
  'external_key.removed'?: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title group created 值
   * @description OpenAI API 合约中的 group created 值。
   */
  'group.created'?: {
    /**
     * @title data 值
     * @description OpenAI API 合约中的 data 值。
     */
    data?: {
      /**
       * @title group name 值
       * @description OpenAI API 合约中的 group name 值。
       */
      group_name?: string
    };
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title group deleted 值
   * @description OpenAI API 合约中的 group deleted 值。
   */
  'group.deleted'?: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title group updated 值
   * @description OpenAI API 合约中的 group updated 值。
   */
  'group.updated'?: {
    /**
     * @title changes requested 值
     * @description OpenAI API 合约中的 changes requested 值。
     */
    changes_requested?: {
      /**
       * @title group name 值
       * @description OpenAI API 合约中的 group name 值。
       */
      group_name?: string
    };
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title invite accepted 值
   * @description OpenAI API 合约中的 invite accepted 值。
   */
  'invite.accepted'?: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title invite deleted 值
   * @description OpenAI API 合约中的 invite deleted 值。
   */
  'invite.deleted'?: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title invite sent 值
   * @description OpenAI API 合约中的 invite sent 值。
   */
  'invite.sent'?: {
    /**
     * @title data 值
     * @description OpenAI API 合约中的 data 值。
     */
    data?: {
      /**
       * @title email 值
       * @description OpenAI API 合约中的 email 值。
       */
      email?: string;
      /**
       * @title role 值
       * @description OpenAI API 合约中的 role 值。
       */
      role?: string
    };
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title ip allowlist config activated 值
   * @description OpenAI API 合约中的 ip allowlist config activated 值。
   */
  'ip_allowlist.config.activated'?: {
    /**
     * @title configs 值
     * @description OpenAI API 合约中的 configs 值。
     */
    configs?: Array<{
      /**
       * @title id 值
       * @description OpenAI API 合约中的 id 值。
       */
      id?: string;
      /**
       * @title name 值
       * @description OpenAI API 合约中的 name 值。
       */
      name?: string
    }>
  };
  /**
   * @title ip allowlist config deactivated 值
   * @description OpenAI API 合约中的 ip allowlist config deactivated 值。
   */
  'ip_allowlist.config.deactivated'?: {
    /**
     * @title configs 值
     * @description OpenAI API 合约中的 configs 值。
     */
    configs?: Array<{
      /**
       * @title id 值
       * @description OpenAI API 合约中的 id 值。
       */
      id?: string;
      /**
       * @title name 值
       * @description OpenAI API 合约中的 name 值。
       */
      name?: string
    }>
  };
  /**
   * @title ip allowlist created 值
   * @description OpenAI API 合约中的 ip allowlist created 值。
   */
  'ip_allowlist.created'?: {
    /**
     * @title allowed ips 值
     * @description OpenAI API 合约中的 allowed ips 值。
     */
    allowed_ips?: Array<string>;
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name?: string
  };
  /**
   * @title ip allowlist deleted 值
   * @description OpenAI API 合约中的 ip allowlist deleted 值。
   */
  'ip_allowlist.deleted'?: {
    /**
     * @title allowed ips 值
     * @description OpenAI API 合约中的 allowed ips 值。
     */
    allowed_ips?: Array<string>;
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name?: string
  };
  /**
   * @title ip allowlist updated 值
   * @description OpenAI API 合约中的 ip allowlist updated 值。
   */
  'ip_allowlist.updated'?: {
    /**
     * @title allowed ips 值
     * @description OpenAI API 合约中的 allowed ips 值。
     */
    allowed_ips?: Array<string>;
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title login failed 值
   * @description OpenAI API 合约中的 login failed 值。
   */
  'login.failed'?: {
    /**
     * @title error code 值
     * @description OpenAI API 合约中的 error code 值。
     */
    error_code?: string;
    /**
     * @title error message 值
     * @description OpenAI API 合约中的 error message 值。
     */
    error_message?: string
  };
  /**
   * @title login succeeded 值
   * @description OpenAI API 合约中的 login succeeded 值。
   */
  'login.succeeded'?: any;
  /**
   * @title logout failed 值
   * @description OpenAI API 合约中的 logout failed 值。
   */
  'logout.failed'?: {
    /**
     * @title error code 值
     * @description OpenAI API 合约中的 error code 值。
     */
    error_code?: string;
    /**
     * @title error message 值
     * @description OpenAI API 合约中的 error message 值。
     */
    error_message?: string
  };
  /**
   * @title logout succeeded 值
   * @description OpenAI API 合约中的 logout succeeded 值。
   */
  'logout.succeeded'?: any;
  /**
   * @title organization updated 值
   * @description OpenAI API 合约中的 organization updated 值。
   */
  'organization.updated'?: {
    /**
     * @title changes requested 值
     * @description OpenAI API 合约中的 changes requested 值。
     */
    changes_requested?: {
      /**
       * @title api call logging 值
       * @description OpenAI API 合约中的 api call logging 值。
       */
      api_call_logging?: string;
      /**
       * @title api call logging project ids 值
       * @description OpenAI API 合约中的 api call logging project ids 值。
       */
      api_call_logging_project_ids?: string;
      /**
       * @title description 值
       * @description OpenAI API 合约中的 description 值。
       */
      description?: string;
      /**
       * @title name 值
       * @description OpenAI API 合约中的 name 值。
       */
      name?: string;
      /**
       * @title threads ui visibility 值
       * @description OpenAI API 合约中的 threads ui visibility 值。
       */
      threads_ui_visibility?: string;
      /**
       * @title title 值
       * @description OpenAI API 合约中的 title 值。
       */
      title?: string;
      /**
       * @title usage dashboard visibility 值
       * @description OpenAI API 合约中的 usage dashboard visibility 值。
       */
      usage_dashboard_visibility?: string
    };
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title project 值
   * @description OpenAI API 合约中的 project 值。
   */
  project?: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name?: string
  };
  /**
   * @title project archived 值
   * @description OpenAI API 合约中的 project archived 值。
   */
  'project.archived'?: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title project created 值
   * @description OpenAI API 合约中的 project created 值。
   */
  'project.created'?: {
    /**
     * @title data 值
     * @description OpenAI API 合约中的 data 值。
     */
    data?: {
      /**
       * @title name 值
       * @description OpenAI API 合约中的 name 值。
       */
      name?: string;
      /**
       * @title title 值
       * @description OpenAI API 合约中的 title 值。
       */
      title?: string
    };
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title project deleted 值
   * @description OpenAI API 合约中的 project deleted 值。
   */
  'project.deleted'?: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title project updated 值
   * @description OpenAI API 合约中的 project updated 值。
   */
  'project.updated'?: {
    /**
     * @title changes requested 值
     * @description OpenAI API 合约中的 changes requested 值。
     */
    changes_requested?: {
      /**
       * @title title 值
       * @description OpenAI API 合约中的 title 值。
       */
      title?: string
    };
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title rate limit deleted 值
   * @description OpenAI API 合约中的 rate limit deleted 值。
   */
  'rate_limit.deleted'?: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title rate limit updated 值
   * @description OpenAI API 合约中的 rate limit updated 值。
   */
  'rate_limit.updated'?: {
    /**
     * @title changes requested 值
     * @description OpenAI API 合约中的 changes requested 值。
     */
    changes_requested?: {
      /**
       * @title batch 1 day max input tokens 值
       * @description OpenAI API 合约中的 batch 1 day max input tokens 值。
       */
      batch_1_day_max_input_tokens?: number;
      /**
       * @title max audio megabytes per 1 minute 值
       * @description OpenAI API 合约中的 max audio megabytes per 1 minute 值。
       */
      max_audio_megabytes_per_1_minute?: number;
      /**
       * @title max images per 1 minute 值
       * @description OpenAI API 合约中的 max images per 1 minute 值。
       */
      max_images_per_1_minute?: number;
      /**
       * @title max requests per 1 day 值
       * @description OpenAI API 合约中的 max requests per 1 day 值。
       */
      max_requests_per_1_day?: number;
      /**
       * @title max requests per 1 minute 值
       * @description OpenAI API 合约中的 max requests per 1 minute 值。
       */
      max_requests_per_1_minute?: number;
      /**
       * @title max tokens per 1 minute 值
       * @description OpenAI API 合约中的 max tokens per 1 minute 值。
       */
      max_tokens_per_1_minute?: number
    };
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title role assignment created 值
   * @description OpenAI API 合约中的 role assignment created 值。
   */
  'role.assignment.created'?: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string;
    /**
     * @title principal id 值
     * @description OpenAI API 合约中的 principal id 值。
     */
    principal_id?: string;
    /**
     * @title principal type 值
     * @description OpenAI API 合约中的 principal type 值。
     */
    principal_type?: string;
    /**
     * @title resource id 值
     * @description OpenAI API 合约中的 resource id 值。
     */
    resource_id?: string;
    /**
     * @title resource type 值
     * @description OpenAI API 合约中的 resource type 值。
     */
    resource_type?: string
  };
  /**
   * @title role assignment deleted 值
   * @description OpenAI API 合约中的 role assignment deleted 值。
   */
  'role.assignment.deleted'?: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string;
    /**
     * @title principal id 值
     * @description OpenAI API 合约中的 principal id 值。
     */
    principal_id?: string;
    /**
     * @title principal type 值
     * @description OpenAI API 合约中的 principal type 值。
     */
    principal_type?: string;
    /**
     * @title resource id 值
     * @description OpenAI API 合约中的 resource id 值。
     */
    resource_id?: string;
    /**
     * @title resource type 值
     * @description OpenAI API 合约中的 resource type 值。
     */
    resource_type?: string
  };
  /**
   * @title role bound to resource 值
   * @description OpenAI API 合约中的 role bound to resource 值。
   */
  'role.bound_to_resource'?: {
    /**
     * @title connector id 值
     * @description OpenAI API 合约中的 connector id 值。
     */
    connector_id?: string;
    /**
     * @title connector name 值
     * @description OpenAI API 合约中的 connector name 值。
     */
    connector_name?: string;
    /**
     * @title enabled 值
     * @description OpenAI API 合约中的 enabled 值。
     */
    enabled?: boolean;
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string;
    /**
     * @title permissions 值
     * @description OpenAI API 合约中的 permissions 值。
     */
    permissions?: Array<string>;
    /**
     * @title resource id 值
     * @description OpenAI API 合约中的 resource id 值。
     */
    resource_id?: string;
    /**
     * @title resource type 值
     * @description OpenAI API 合约中的 resource type 值。
     */
    resource_type?: string;
    /**
     * @title role id 值
     * @description OpenAI API 合约中的 role id 值。
     */
    role_id?: string;
    /**
     * @title source 值
     * @description OpenAI API 合约中的 source 值。
     */
    source?: 'role_toggle' | 'role_connector_update' | 'role_delete' | 'workspace_permissions' | 'connector_publish';
    /**
     * @title workspace id 值
     * @description OpenAI API 合约中的 workspace id 值。
     */
    workspace_id?: string
  };
  /**
   * @title role created 值
   * @description OpenAI API 合约中的 role created 值。
   */
  'role.created'?: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string;
    /**
     * @title permissions 值
     * @description OpenAI API 合约中的 permissions 值。
     */
    permissions?: Array<string>;
    /**
     * @title resource id 值
     * @description OpenAI API 合约中的 resource id 值。
     */
    resource_id?: string;
    /**
     * @title resource type 值
     * @description OpenAI API 合约中的 resource type 值。
     */
    resource_type?: string;
    /**
     * @title role name 值
     * @description OpenAI API 合约中的 role name 值。
     */
    role_name?: string
  };
  /**
   * @title role deleted 值
   * @description OpenAI API 合约中的 role deleted 值。
   */
  'role.deleted'?: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title role unbound from resource 值
   * @description OpenAI API 合约中的 role unbound from resource 值。
   */
  'role.unbound_from_resource'?: {
    /**
     * @title connector id 值
     * @description OpenAI API 合约中的 connector id 值。
     */
    connector_id?: string;
    /**
     * @title connector name 值
     * @description OpenAI API 合约中的 connector name 值。
     */
    connector_name?: string;
    /**
     * @title enabled 值
     * @description OpenAI API 合约中的 enabled 值。
     */
    enabled?: boolean;
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string;
    /**
     * @title permissions 值
     * @description OpenAI API 合约中的 permissions 值。
     */
    permissions?: Array<string>;
    /**
     * @title resource id 值
     * @description OpenAI API 合约中的 resource id 值。
     */
    resource_id?: string;
    /**
     * @title resource type 值
     * @description OpenAI API 合约中的 resource type 值。
     */
    resource_type?: string;
    /**
     * @title role id 值
     * @description OpenAI API 合约中的 role id 值。
     */
    role_id?: string;
    /**
     * @title source 值
     * @description OpenAI API 合约中的 source 值。
     */
    source?: 'role_toggle' | 'role_connector_update' | 'role_delete' | 'workspace_permissions' | 'connector_publish';
    /**
     * @title workspace id 值
     * @description OpenAI API 合约中的 workspace id 值。
     */
    workspace_id?: string
  };
  /**
   * @title role updated 值
   * @description OpenAI API 合约中的 role updated 值。
   */
  'role.updated'?: {
    /**
     * @title changes requested 值
     * @description OpenAI API 合约中的 changes requested 值。
     */
    changes_requested?: {
      /**
       * @title description 值
       * @description OpenAI API 合约中的 description 值。
       */
      description?: string;
      /**
       * @title metadata 值
       * @description OpenAI API 合约中的 metadata 值。
       */
      metadata?: any;
      /**
       * @title permissions added 值
       * @description OpenAI API 合约中的 permissions added 值。
       */
      permissions_added?: Array<string>;
      /**
       * @title permissions removed 值
       * @description OpenAI API 合约中的 permissions removed 值。
       */
      permissions_removed?: Array<string>;
      /**
       * @title resource id 值
       * @description OpenAI API 合约中的 resource id 值。
       */
      resource_id?: string;
      /**
       * @title resource type 值
       * @description OpenAI API 合约中的 resource type 值。
       */
      resource_type?: string;
      /**
       * @title role name 值
       * @description OpenAI API 合约中的 role name 值。
       */
      role_name?: string
    };
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title scim disabled 值
   * @description OpenAI API 合约中的 scim disabled 值。
   */
  'scim.disabled'?: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title scim enabled 值
   * @description OpenAI API 合约中的 scim enabled 值。
   */
  'scim.enabled'?: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title service account created 值
   * @description OpenAI API 合约中的 service account created 值。
   */
  'service_account.created'?: {
    /**
     * @title data 值
     * @description OpenAI API 合约中的 data 值。
     */
    data?: {
      /**
       * @title role 值
       * @description OpenAI API 合约中的 role 值。
       */
      role?: string
    };
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title service account deleted 值
   * @description OpenAI API 合约中的 service account deleted 值。
   */
  'service_account.deleted'?: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title service account updated 值
   * @description OpenAI API 合约中的 service account updated 值。
   */
  'service_account.updated'?: {
    /**
     * @title changes requested 值
     * @description OpenAI API 合约中的 changes requested 值。
     */
    changes_requested?: {
      /**
       * @title role 值
       * @description OpenAI API 合约中的 role 值。
       */
      role?: string
    };
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: AuditLogEventType;
  /**
   * @title user added 值
   * @description OpenAI API 合约中的 user added 值。
   */
  'user.added'?: {
    /**
     * @title data 值
     * @description OpenAI API 合约中的 data 值。
     */
    data?: {
      /**
       * @title role 值
       * @description OpenAI API 合约中的 role 值。
       */
      role?: string
    };
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title user deleted 值
   * @description OpenAI API 合约中的 user deleted 值。
   */
  'user.deleted'?: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title user updated 值
   * @description OpenAI API 合约中的 user updated 值。
   */
  'user.updated'?: {
    /**
     * @title changes requested 值
     * @description OpenAI API 合约中的 changes requested 值。
     */
    changes_requested?: {
      /**
       * @title role 值
       * @description OpenAI API 合约中的 role 值。
       */
      role?: string
    };
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title workload identity provider created 值
   * @description OpenAI API 合约中的 workload identity provider created 值。
   */
  'workload_identity_provider.created'?: {
    /**
     * @title data 值
     * @description OpenAI API 合约中的 data 值。
     */
    data?: any;
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title workload identity provider deleted 值
   * @description OpenAI API 合约中的 workload identity provider deleted 值。
   */
  'workload_identity_provider.deleted'?: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name?: string
  };
  /**
   * @title workload identity provider updated 值
   * @description OpenAI API 合约中的 workload identity provider updated 值。
   */
  'workload_identity_provider.updated'?: {
    /**
     * @title changes requested 值
     * @description OpenAI API 合约中的 changes requested 值。
     */
    changes_requested?: any;
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string
  };
  /**
   * @title workload identity provider mapping created 值
   * @description OpenAI API 合约中的 workload identity provider mapping created 值。
   */
  'workload_identity_provider_mapping.created'?: {
    /**
     * @title data 值
     * @description OpenAI API 合约中的 data 值。
     */
    data?: any;
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string;
    /**
     * @title identity provider id 值
     * @description OpenAI API 合约中的 identity provider id 值。
     */
    identity_provider_id?: string
  };
  /**
   * @title workload identity provider mapping deleted 值
   * @description OpenAI API 合约中的 workload identity provider mapping deleted 值。
   */
  'workload_identity_provider_mapping.deleted'?: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string;
    /**
     * @title identity provider id 值
     * @description OpenAI API 合约中的 identity provider id 值。
     */
    identity_provider_id?: string;
    /**
     * @title project id 值
     * @description OpenAI API 合约中的 project id 值。
     */
    project_id?: string;
    /**
     * @title service account id 值
     * @description OpenAI API 合约中的 service account id 值。
     */
    service_account_id?: string
  };
  /**
   * @title workload identity provider mapping updated 值
   * @description OpenAI API 合约中的 workload identity provider mapping updated 值。
   */
  'workload_identity_provider_mapping.updated'?: {
    /**
     * @title changes requested 值
     * @description OpenAI API 合约中的 changes requested 值。
     */
    changes_requested?: any;
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string;
    /**
     * @title identity provider id 值
     * @description OpenAI API 合约中的 identity provider id 值。
     */
    identity_provider_id?: string
  };
}

/**
 * @title Audit Log Actor 数据结构
 * @description OpenAI API 合约中的 Audit Log Actor 结构定义。
 */
export type AuditLogActor = {
  /**
   * @title api key 值
   * @description OpenAI API 合约中的 api key 值。
   */
  api_key?: AuditLogActorApiKey;
  /**
   * @title session 值
   * @description OpenAI API 合约中的 session 值。
   */
  session?: AuditLogActorSession;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type?: 'session' | 'api_key';
}

/**
 * @title Audit Log Actor Api Key 数据结构
 * @description OpenAI API 合约中的 Audit Log Actor Api Key 结构定义。
 */
export type AuditLogActorApiKey = {
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title service account 值
   * @description OpenAI API 合约中的 service account 值。
   */
  service_account?: AuditLogActorServiceAccount;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type?: 'user' | 'service_account';
  /**
   * @title user 值
   * @description OpenAI API 合约中的 user 值。
   */
  user?: AuditLogActorUser;
}

/**
 * @title Audit Log Actor Service Account 数据结构
 * @description OpenAI API 合约中的 Audit Log Actor Service Account 结构定义。
 */
export type AuditLogActorServiceAccount = {
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
}

/**
 * @title Audit Log Actor Session 数据结构
 * @description OpenAI API 合约中的 Audit Log Actor Session 结构定义。
 */
export type AuditLogActorSession = {
  /**
   * @title ip address 值
   * @description OpenAI API 合约中的 ip address 值。
   */
  ip_address?: string;
  /**
   * @title user 值
   * @description OpenAI API 合约中的 user 值。
   */
  user?: AuditLogActorUser;
}

/**
 * @title Audit Log Actor User 数据结构
 * @description OpenAI API 合约中的 Audit Log Actor User 结构定义。
 */
export type AuditLogActorUser = {
  /**
   * @title email 值
   * @description OpenAI API 合约中的 email 值。
   */
  email?: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
}

/**
 * @title Audit Log Event Type 数据结构
 * @description OpenAI API 合约中的 Audit Log Event Type 结构定义。
 */
export type AuditLogEventType = 'api_key.created' | 'api_key.updated' | 'api_key.deleted' | 'certificate.created' | 'certificate.updated' | 'certificate.deleted' | 'certificates.activated' | 'certificates.deactivated' | 'checkpoint.permission.created' | 'checkpoint.permission.deleted' | 'external_key.registered' | 'external_key.removed' | 'group.created' | 'group.updated' | 'group.deleted' | 'invite.sent' | 'invite.accepted' | 'invite.deleted' | 'ip_allowlist.created' | 'ip_allowlist.updated' | 'ip_allowlist.deleted' | 'ip_allowlist.config.activated' | 'ip_allowlist.config.deactivated' | 'login.succeeded' | 'login.failed' | 'logout.succeeded' | 'logout.failed' | 'organization.updated' | 'project.created' | 'project.updated' | 'project.archived' | 'project.deleted' | 'rate_limit.updated' | 'rate_limit.deleted' | 'resource.deleted' | 'tunnel.created' | 'tunnel.updated' | 'tunnel.deleted' | 'workload_identity_provider.created' | 'workload_identity_provider.updated' | 'workload_identity_provider.deleted' | 'workload_identity_provider_mapping.created' | 'workload_identity_provider_mapping.updated' | 'workload_identity_provider_mapping.deleted' | 'role.created' | 'role.updated' | 'role.deleted' | 'role.assignment.created' | 'role.assignment.deleted' | 'role.bound_to_resource' | 'role.unbound_from_resource' | 'scim.enabled' | 'scim.disabled' | 'service_account.created' | 'service_account.updated' | 'service_account.deleted' | 'user.added' | 'user.updated' | 'user.deleted' | 'tenant.metadata.updated' | 'tenant.microsoft_entra_mapping.upserted' | 'tenant.microsoft_entra_mapping.deleted' | 'tenant.workload_identity.provider.created' | 'tenant.workload_identity.provider.updated' | 'tenant.workload_identity.provider.archived' | 'tenant.workload_identity.mapping.created' | 'tenant.workload_identity.mapping.updated' | 'tenant.workload_identity.mapping.archived' | 'tenant.workload_identity.binding.created' | 'tenant.workload_identity.principal.provisioned' | 'tenant.workload_identity.access_token.issued' | 'tenant.admin_api_key.created' | 'tenant.admin_api_key.updated' | 'tenant.admin_api_key.deleted' | 'tenant.project_api_key.created' | 'tenant.chatgpt_access_token.revoked' | 'tenant.migration.completed' | 'tenant.sso.migrated' | 'tenant.domains.migrated' | 'tenant.sso_connection.created' | 'tenant.sso_connection.updated' | 'tenant.sso_connection.deleted' | 'tenant.sso_connection.setup.started' | 'tenant.policy.created' | 'tenant.policy.updated' | 'tenant.policy.deleted' | 'tenant.policy.attached' | 'tenant.policy.detached' | 'tenant.principal_authentication_policy.resolved' | 'tenant.scim.setup.started' | 'tenant.scim.deletion.requested' | 'tenant.scim.directory.created' | 'tenant.product_access_policy.updated' | 'tenant.resource_share_grant.created' | 'tenant.resource_share_grant.updated' | 'tenant.resource_share_grant.accepted' | 'tenant.resource_share_grant.declined' | 'tenant.resource_share_grant.revoked' | 'tenant.resource_share_grant.deleted' | 'tenant.service_account.updated' | 'tenant.service_account.deleted' | 'tenant.service_account.token.revoked' | 'tenant.billing.overage_limit.updated' | 'tenant.billing.alerts.updated' | 'tenant.billing.info.updated' | 'tenant.usage_limit.workspace.updated' | 'tenant.usage_limit.group.updated' | 'tenant.usage_limit.user.updated' | 'tenant.usage_limit.increase_request.updated' | 'tenant.usage_limit.increase_request.resolved' | 'tenant.group.created' | 'tenant.group.updated' | 'tenant.group.deleted' | 'tenant.group.member.added' | 'tenant.group.member.removed' | 'tenant.migration_rollout.status.updated' | 'tenant.migration_rollout.tier.updated' | 'tenant.role.metadata.updated' | 'tenant.custom_role.created' | 'tenant.custom_role.updated' | 'tenant.custom_role.deleted' | 'tenant.role_assignment.created' | 'tenant.role_assignment.deleted' | 'tenant.resource_role_assignment.created' | 'tenant.resource_role_assignment.deleted' | 'tenant.resource_access.updated' | 'tenant.resource_access.deleted' | 'tenant.ads_account.onboarding.redemption' | 'tenant.session_policy.created' | 'tenant.session_policy.updated' | 'tenant.session_policy.deleted' | 'tenant.session_revocation.started' | 'tenant.third_party_app_policy.updated' | 'tenant.user.added' | 'tenant.user.updated' | 'tenant.user.removed' | 'tenant.user.looked_up' | 'tenant.user.invited' | 'tenant.membership.revoked' | 'tenant.api_organization_invite.upserted' | 'tenant.api_organization_invite.deleted' | 'tenant.chatgpt_workspace_invite.upserted' | 'tenant.membership.accepted' | 'tenant.membership.declined' | 'tenant.workspace_invite_email_settings.updated'

/**
 * @title Auto Chunking Strategy Request Param 数据结构
 * @description OpenAI API 合约中的 Auto Chunking Strategy Request Param 结构定义。
 */
export type AutoChunkingStrategyRequestParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'auto';
}

/**
 * @title Auto Code Interpreter Tool Param 数据结构
 * @description OpenAI API 合约中的 Auto Code Interpreter Tool Param 结构定义。
 */
export type AutoCodeInterpreterToolParam = {
  /**
   * @title file ids 值
   * @description OpenAI API 合约中的 file ids 值。
   */
  file_ids?: Array<string>;
  /**
   * @title memory limit 值
   * @description OpenAI API 合约中的 memory limit 值。
   */
  memory_limit?: any;
  /**
   * @title network policy 值
   * @description OpenAI API 合约中的 network policy 值。
   */
  network_policy?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'auto';
}

/**
 * @title Automatic Thread Titling Param 数据结构
 * @description OpenAI API 合约中的 Automatic Thread Titling Param 结构定义。
 */
export type AutomaticThreadTitlingParam = {
  /**
   * @title enabled 值
   * @description OpenAI API 合约中的 enabled 值。
   */
  enabled?: boolean;
}

/**
 * @title Batch 数据结构
 * @description OpenAI API 合约中的 Batch 结构定义。
 */
export type Batch = {
  /**
   * @title cancelled at 值
   * @description OpenAI API 合约中的 cancelled at 值。
   */
  cancelled_at?: number;
  /**
   * @title cancelling at 值
   * @description OpenAI API 合约中的 cancelling at 值。
   */
  cancelling_at?: number;
  /**
   * @title completed at 值
   * @description OpenAI API 合约中的 completed at 值。
   */
  completed_at?: number;
  /**
   * @title completion window 值
   * @description OpenAI API 合约中的 completion window 值。
   */
  completion_window: string;
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title endpoint 值
   * @description OpenAI API 合约中的 endpoint 值。
   */
  endpoint: string;
  /**
   * @title error file id 值
   * @description OpenAI API 合约中的 error file id 值。
   */
  error_file_id?: string;
  /**
   * @title errors 值
   * @description OpenAI API 合约中的 errors 值。
   */
  errors?: {
    /**
     * @title data 值
     * @description OpenAI API 合约中的 data 值。
     */
    data?: Array<BatchError>;
    /**
     * @title object 值
     * @description OpenAI API 合约中的 object 值。
     */
    object?: string
  };
  /**
   * @title expired at 值
   * @description OpenAI API 合约中的 expired at 值。
   */
  expired_at?: number;
  /**
   * @title expires at 值
   * @description OpenAI API 合约中的 expires at 值。
   */
  expires_at?: number;
  /**
   * @title failed at 值
   * @description OpenAI API 合约中的 failed at 值。
   */
  failed_at?: number;
  /**
   * @title finalizing at 值
   * @description OpenAI API 合约中的 finalizing at 值。
   */
  finalizing_at?: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title in progress at 值
   * @description OpenAI API 合约中的 in progress at 值。
   */
  in_progress_at?: number;
  /**
   * @title input file id 值
   * @description OpenAI API 合约中的 input file id 值。
   */
  input_file_id: string;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'batch';
  /**
   * @title output file id 值
   * @description OpenAI API 合约中的 output file id 值。
   */
  output_file_id?: string;
  /**
   * @title request counts 值
   * @description OpenAI API 合约中的 request counts 值。
   */
  request_counts?: BatchRequestCounts;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'validating' | 'failed' | 'in_progress' | 'finalizing' | 'completed' | 'expired' | 'cancelling' | 'cancelled';
  /**
   * @title usage 值
   * @description OpenAI API 合约中的 usage 值。
   */
  usage?: {
    /**
     * @title input tokens 值
     * @description OpenAI API 合约中的 input tokens 值。
     */
    input_tokens: number;
    /**
     * @title input tokens details 值
     * @description OpenAI API 合约中的 input tokens details 值。
     */
    input_tokens_details: {
      /**
       * @title cached tokens 值
       * @description OpenAI API 合约中的 cached tokens 值。
       */
      cached_tokens: number
    };
    /**
     * @title output tokens 值
     * @description OpenAI API 合约中的 output tokens 值。
     */
    output_tokens: number;
    /**
     * @title output tokens details 值
     * @description OpenAI API 合约中的 output tokens details 值。
     */
    output_tokens_details: {
      /**
       * @title reasoning tokens 值
       * @description OpenAI API 合约中的 reasoning tokens 值。
       */
      reasoning_tokens: number
    };
    /**
     * @title total tokens 值
     * @description OpenAI API 合约中的 total tokens 值。
     */
    total_tokens: number
  };
}

/**
 * @title Batch Error 数据结构
 * @description OpenAI API 合约中的 Batch Error 结构定义。
 */
export type BatchError = {
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code?: string;
  /**
   * @title line 值
   * @description OpenAI API 合约中的 line 值。
   */
  line?: any;
  /**
   * @title message 值
   * @description OpenAI API 合约中的 message 值。
   */
  message?: string;
  /**
   * @title param 值
   * @description OpenAI API 合约中的 param 值。
   */
  param?: any;
}

/**
 * @title Batch File Expiration After 数据结构
 * @description OpenAI API 合约中的 Batch File Expiration After 结构定义。
 */
export type BatchFileExpirationAfter = {
  /**
   * @title anchor 值
   * @description OpenAI API 合约中的 anchor 值。
   */
  anchor: 'created_at';
  /**
   * @title seconds 值
   * @description OpenAI API 合约中的 seconds 值。
   */
  seconds: number;
}

/**
 * @title Batch Request Counts 数据结构
 * @description OpenAI API 合约中的 Batch Request Counts 结构定义。
 */
export type BatchRequestCounts = {
  /**
   * @title completed 值
   * @description OpenAI API 合约中的 completed 值。
   */
  completed: number;
  /**
   * @title failed 值
   * @description OpenAI API 合约中的 failed 值。
   */
  failed: number;
  /**
   * @title total 值
   * @description OpenAI API 合约中的 total 值。
   */
  total: number;
}

/**
 * @title Beta Additional Tools 数据结构
 * @description OpenAI API 合约中的 Beta Additional Tools 结构定义。
 */
export type BetaAdditionalTools = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: BetaAgentTag;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: BetaMessageRole;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools: Array<BetaTool>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'additional_tools';
}

/**
 * @title Beta Additional Tools Item Param 数据结构
 * @description OpenAI API 合约中的 Beta Additional Tools Item Param 结构定义。
 */
export type BetaAdditionalToolsItemParam = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'developer';
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools: Array<BetaTool>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'additional_tools';
}

/**
 * @title Beta Agent Message 数据结构
 * @description OpenAI API 合约中的 Beta Agent Message 结构定义。
 */
export type BetaAgentMessage = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: BetaAgentTag;
  /**
   * @title author 值
   * @description OpenAI API 合约中的 author 值。
   */
  author: string;
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: Array<any>;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title recipient 值
   * @description OpenAI API 合约中的 recipient 值。
   */
  recipient: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'agent_message';
}

/**
 * @title Beta Agent Message Item Param 数据结构
 * @description OpenAI API 合约中的 Beta Agent Message Item Param 结构定义。
 */
export type BetaAgentMessageItemParam = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title author 值
   * @description OpenAI API 合约中的 author 值。
   */
  author: string;
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: Array<any>;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title recipient 值
   * @description OpenAI API 合约中的 recipient 值。
   */
  recipient: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'agent_message';
}

/**
 * @title Beta Agent Tag 数据结构
 * @description OpenAI API 合约中的 Beta Agent Tag 结构定义。
 */
export type BetaAgentTag = {
  /**
   * @title agent name 值
   * @description OpenAI API 合约中的 agent name 值。
   */
  agent_name: string;
}

/**
 * @title Beta Annotation 数据结构
 * @description OpenAI API 合约中的 Beta Annotation 结构定义。
 */
export type BetaAnnotation = any

/**
 * @title Beta Apply Patch Call Output Status 数据结构
 * @description OpenAI API 合约中的 Beta Apply Patch Call Output Status 结构定义。
 */
export type BetaApplyPatchCallOutputStatus = 'completed' | 'failed'

/**
 * @title Beta Apply Patch Call Output Status Param 数据结构
 * @description OpenAI API 合约中的 Beta Apply Patch Call Output Status Param 结构定义。
 */
export type BetaApplyPatchCallOutputStatusParam = 'completed' | 'failed'

/**
 * @title Beta Apply Patch Call Status 数据结构
 * @description OpenAI API 合约中的 Beta Apply Patch Call Status 结构定义。
 */
export type BetaApplyPatchCallStatus = 'in_progress' | 'completed'

/**
 * @title Beta Apply Patch Call Status Param 数据结构
 * @description OpenAI API 合约中的 Beta Apply Patch Call Status Param 结构定义。
 */
export type BetaApplyPatchCallStatusParam = 'in_progress' | 'completed'

/**
 * @title Beta Apply Patch Create File Operation 数据结构
 * @description OpenAI API 合约中的 Beta Apply Patch Create File Operation 结构定义。
 */
export type BetaApplyPatchCreateFileOperation = {
  /**
   * @title diff 值
   * @description OpenAI API 合约中的 diff 值。
   */
  diff: string;
  /**
   * @title path 值
   * @description OpenAI API 合约中的 path 值。
   */
  path: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'create_file';
}

/**
 * @title Beta Apply Patch Create File Operation Param 数据结构
 * @description OpenAI API 合约中的 Beta Apply Patch Create File Operation Param 结构定义。
 */
export type BetaApplyPatchCreateFileOperationParam = {
  /**
   * @title diff 值
   * @description OpenAI API 合约中的 diff 值。
   */
  diff: string;
  /**
   * @title path 值
   * @description OpenAI API 合约中的 path 值。
   */
  path: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'create_file';
}

/**
 * @title Beta Apply Patch Delete File Operation 数据结构
 * @description OpenAI API 合约中的 Beta Apply Patch Delete File Operation 结构定义。
 */
export type BetaApplyPatchDeleteFileOperation = {
  /**
   * @title path 值
   * @description OpenAI API 合约中的 path 值。
   */
  path: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'delete_file';
}

/**
 * @title Beta Apply Patch Delete File Operation Param 数据结构
 * @description OpenAI API 合约中的 Beta Apply Patch Delete File Operation Param 结构定义。
 */
export type BetaApplyPatchDeleteFileOperationParam = {
  /**
   * @title path 值
   * @description OpenAI API 合约中的 path 值。
   */
  path: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'delete_file';
}

/**
 * @title Beta Apply Patch Operation Param 数据结构
 * @description OpenAI API 合约中的 Beta Apply Patch Operation Param 结构定义。
 */
export type BetaApplyPatchOperationParam = any

/**
 * @title Beta Apply Patch Tool Call 数据结构
 * @description OpenAI API 合约中的 Beta Apply Patch Tool Call 结构定义。
 */
export type BetaApplyPatchToolCall = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: BetaAgentTag;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title created by 值
   * @description OpenAI API 合约中的 created by 值。
   */
  created_by?: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title operation 值
   * @description OpenAI API 合约中的 operation 值。
   */
  operation: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: BetaApplyPatchCallStatus;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'apply_patch_call';
}

/**
 * @title Beta Apply Patch Tool Call Item Param 数据结构
 * @description OpenAI API 合约中的 Beta Apply Patch Tool Call Item Param 结构定义。
 */
export type BetaApplyPatchToolCallItemParam = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title operation 值
   * @description OpenAI API 合约中的 operation 值。
   */
  operation: BetaApplyPatchOperationParam;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: BetaApplyPatchCallStatusParam;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'apply_patch_call';
}

/**
 * @title Beta Apply Patch Tool Call Output 数据结构
 * @description OpenAI API 合约中的 Beta Apply Patch Tool Call Output 结构定义。
 */
export type BetaApplyPatchToolCallOutput = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: BetaAgentTag;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title created by 值
   * @description OpenAI API 合约中的 created by 值。
   */
  created_by?: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output?: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: BetaApplyPatchCallOutputStatus;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'apply_patch_call_output';
}

/**
 * @title Beta Apply Patch Tool Call Output Item Param 数据结构
 * @description OpenAI API 合约中的 Beta Apply Patch Tool Call Output Item Param 结构定义。
 */
export type BetaApplyPatchToolCallOutputItemParam = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output?: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: BetaApplyPatchCallOutputStatusParam;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'apply_patch_call_output';
}

/**
 * @title Beta Apply Patch Tool Param 数据结构
 * @description OpenAI API 合约中的 Beta Apply Patch Tool Param 结构定义。
 */
export type BetaApplyPatchToolParam = {
  /**
   * @title allowed callers 值
   * @description OpenAI API 合约中的 allowed callers 值。
   */
  allowed_callers?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'apply_patch';
}

/**
 * @title Beta Apply Patch Update File Operation 数据结构
 * @description OpenAI API 合约中的 Beta Apply Patch Update File Operation 结构定义。
 */
export type BetaApplyPatchUpdateFileOperation = {
  /**
   * @title diff 值
   * @description OpenAI API 合约中的 diff 值。
   */
  diff: string;
  /**
   * @title path 值
   * @description OpenAI API 合约中的 path 值。
   */
  path: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'update_file';
}

/**
 * @title Beta Apply Patch Update File Operation Param 数据结构
 * @description OpenAI API 合约中的 Beta Apply Patch Update File Operation Param 结构定义。
 */
export type BetaApplyPatchUpdateFileOperationParam = {
  /**
   * @title diff 值
   * @description OpenAI API 合约中的 diff 值。
   */
  diff: string;
  /**
   * @title path 值
   * @description OpenAI API 合约中的 path 值。
   */
  path: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'update_file';
}

/**
 * @title Beta Approximate Location 数据结构
 * @description OpenAI API 合约中的 Beta Approximate Location 结构定义。
 */
export type BetaApproximateLocation = {
  /**
   * @title city 值
   * @description OpenAI API 合约中的 city 值。
   */
  city?: any;
  /**
   * @title country 值
   * @description OpenAI API 合约中的 country 值。
   */
  country?: any;
  /**
   * @title region 值
   * @description OpenAI API 合约中的 region 值。
   */
  region?: any;
  /**
   * @title timezone 值
   * @description OpenAI API 合约中的 timezone 值。
   */
  timezone?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'approximate';
}

/**
 * @title Beta Auto Code Interpreter Tool Param 数据结构
 * @description OpenAI API 合约中的 Beta Auto Code Interpreter Tool Param 结构定义。
 */
export type BetaAutoCodeInterpreterToolParam = {
  /**
   * @title file ids 值
   * @description OpenAI API 合约中的 file ids 值。
   */
  file_ids?: Array<string>;
  /**
   * @title memory limit 值
   * @description OpenAI API 合约中的 memory limit 值。
   */
  memory_limit?: any;
  /**
   * @title network policy 值
   * @description OpenAI API 合约中的 network policy 值。
   */
  network_policy?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'auto';
}

/**
 * @title Beta Callable Tool Allowed Caller 数据结构
 * @description OpenAI API 合约中的 Beta Callable Tool Allowed Caller 结构定义。
 */
export type BetaCallableToolAllowedCaller = 'direct' | 'programmatic'

/**
 * @title Beta Click Button Type 数据结构
 * @description OpenAI API 合约中的 Beta Click Button Type 结构定义。
 */
export type BetaClickButtonType = 'left' | 'right' | 'wheel' | 'back' | 'forward'

/**
 * @title Beta Click Param 数据结构
 * @description OpenAI API 合约中的 Beta Click Param 结构定义。
 */
export type BetaClickParam = {
  /**
   * @title button 值
   * @description OpenAI API 合约中的 button 值。
   */
  button: BetaClickButtonType;
  /**
   * @title keys 值
   * @description OpenAI API 合约中的 keys 值。
   */
  keys?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'click';
  /**
   * @title x 值
   * @description OpenAI API 合约中的 x 值。
   */
  x: number;
  /**
   * @title y 值
   * @description OpenAI API 合约中的 y 值。
   */
  y: number;
}

/**
 * @title Beta Code Interpreter Output Image 数据结构
 * @description OpenAI API 合约中的 Beta Code Interpreter Output Image 结构定义。
 */
export type BetaCodeInterpreterOutputImage = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'image';
  /**
   * @title url 值
   * @description OpenAI API 合约中的 url 值。
   */
  url: string;
}

/**
 * @title Beta Code Interpreter Output Logs 数据结构
 * @description OpenAI API 合约中的 Beta Code Interpreter Output Logs 结构定义。
 */
export type BetaCodeInterpreterOutputLogs = {
  /**
   * @title logs 值
   * @description OpenAI API 合约中的 logs 值。
   */
  logs: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'logs';
}

/**
 * @title Beta Code Interpreter Tool 数据结构
 * @description OpenAI API 合约中的 Beta Code Interpreter Tool 结构定义。
 */
export type BetaCodeInterpreterTool = {
  /**
   * @title allowed callers 值
   * @description OpenAI API 合约中的 allowed callers 值。
   */
  allowed_callers?: any;
  /**
   * @title container 值
   * @description OpenAI API 合约中的 container 值。
   */
  container: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'code_interpreter';
}

/**
 * @title Beta Code Interpreter Tool Call 数据结构
 * @description OpenAI API 合约中的 Beta Code Interpreter Tool Call 结构定义。
 */
export type BetaCodeInterpreterToolCall = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: any;
  /**
   * @title container id 值
   * @description OpenAI API 合约中的 container id 值。
   */
  container_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title outputs 值
   * @description OpenAI API 合约中的 outputs 值。
   */
  outputs: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'in_progress' | 'completed' | 'incomplete' | 'interpreting' | 'failed';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'code_interpreter_call';
}

/**
 * @title Beta Compact Resource 数据结构
 * @description OpenAI API 合约中的 Beta Compact Resource 结构定义。
 */
export type BetaCompactResource = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'response.compaction';
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: Array<BetaItemField>;
  /**
   * @title usage 值
   * @description OpenAI API 合约中的 usage 值。
   */
  usage: BetaResponseUsage;
}

/**
 * @title Beta Compact Response Method Public Body 数据结构
 * @description OpenAI API 合约中的 Beta Compact Response Method Public Body 结构定义。
 */
export type BetaCompactResponseMethodPublicBody = {
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input?: any;
  /**
   * @title instructions 值
   * @description OpenAI API 合约中的 instructions 值。
   */
  instructions?: any;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: BetaModelIdsCompaction;
  /**
   * @title previous response id 值
   * @description OpenAI API 合约中的 previous response id 值。
   */
  previous_response_id?: any;
  /**
   * @title prompt cache key 值
   * @description OpenAI API 合约中的 prompt cache key 值。
   */
  prompt_cache_key?: any;
  /**
   * @title prompt cache options 值
   * @description OpenAI API 合约中的 prompt cache options 值。
   */
  prompt_cache_options?: any;
  /**
   * @title prompt cache retention 值
   * @description OpenAI API 合约中的 prompt cache retention 值。
   */
  prompt_cache_retention?: any;
  /**
   * @title service tier 值
   * @description OpenAI API 合约中的 service tier 值。
   */
  service_tier?: any;
}

/**
 * @title Beta Compaction Body 数据结构
 * @description OpenAI API 合约中的 Beta Compaction Body 结构定义。
 */
export type BetaCompactionBody = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: BetaAgentTag;
  /**
   * @title created by 值
   * @description OpenAI API 合约中的 created by 值。
   */
  created_by?: string;
  /**
   * @title encrypted content 值
   * @description OpenAI API 合约中的 encrypted content 值。
   */
  encrypted_content: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'compaction';
}

/**
 * @title Beta Compaction Summary Item Param 数据结构
 * @description OpenAI API 合约中的 Beta Compaction Summary Item Param 结构定义。
 */
export type BetaCompactionSummaryItemParam = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title encrypted content 值
   * @description OpenAI API 合约中的 encrypted content 值。
   */
  encrypted_content: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'compaction';
}

/**
 * @title Beta Compaction Trigger Item Param 数据结构
 * @description OpenAI API 合约中的 Beta Compaction Trigger Item Param 结构定义。
 */
export type BetaCompactionTriggerItemParam = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'compaction_trigger';
}

/**
 * @title Beta Comparison Filter 数据结构
 * @description OpenAI API 合约中的 Beta Comparison Filter 结构定义。
 */
export type BetaComparisonFilter = {
  /**
   * @title key 值
   * @description OpenAI API 合约中的 key 值。
   */
  key: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'nin';
  /**
   * @title value 值
   * @description OpenAI API 合约中的 value 值。
   */
  value: any;
}

/**
 * @title Beta Compound Filter 数据结构
 * @description OpenAI API 合约中的 Beta Compound Filter 结构定义。
 */
export type BetaCompoundFilter = {
  /**
   * @title filters 值
   * @description OpenAI API 合约中的 filters 值。
   */
  filters: Array<any>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'and' | 'or';
}

/**
 * @title Beta Computer Action 数据结构
 * @description OpenAI API 合约中的 Beta Computer Action 结构定义。
 */
export type BetaComputerAction = any

/**
 * @title Beta Computer Action List 数据结构
 * @description OpenAI API 合约中的 Beta Computer Action List 结构定义。
 */
export type BetaComputerActionList = Array<BetaComputerAction>

/**
 * @title Beta Computer Call Output Item Param 数据结构
 * @description OpenAI API 合约中的 Beta Computer Call Output Item Param 结构定义。
 */
export type BetaComputerCallOutputItemParam = {
  /**
   * @title acknowledged safety checks 值
   * @description OpenAI API 合约中的 acknowledged safety checks 值。
   */
  acknowledged_safety_checks?: any;
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: BetaComputerScreenshotImage;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'computer_call_output';
}

/**
 * @title Beta Computer Call Output Status 数据结构
 * @description OpenAI API 合约中的 Beta Computer Call Output Status 结构定义。
 */
export type BetaComputerCallOutputStatus = 'completed' | 'incomplete' | 'failed'

/**
 * @title Beta Computer Call Safety Check Param 数据结构
 * @description OpenAI API 合约中的 Beta Computer Call Safety Check Param 结构定义。
 */
export type BetaComputerCallSafetyCheckParam = {
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title message 值
   * @description OpenAI API 合约中的 message 值。
   */
  message?: any;
}

/**
 * @title Beta Computer Environment 数据结构
 * @description OpenAI API 合约中的 Beta Computer Environment 结构定义。
 */
export type BetaComputerEnvironment = 'windows' | 'mac' | 'linux' | 'ubuntu' | 'browser'

/**
 * @title Beta Computer Screenshot Content 数据结构
 * @description OpenAI API 合约中的 Beta Computer Screenshot Content 结构定义。
 */
export type BetaComputerScreenshotContent = {
  /**
   * @title detail 值
   * @description OpenAI API 合约中的 detail 值。
   */
  detail: BetaImageDetail;
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id: any;
  /**
   * @title image url 值
   * @description OpenAI API 合约中的 image url 值。
   */
  image_url: any;
  /**
   * @title prompt cache breakpoint 值
   * @description OpenAI API 合约中的 prompt cache breakpoint 值。
   */
  prompt_cache_breakpoint?: BetaPromptCacheBreakpointConfig;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'computer_screenshot';
}

/**
 * @title Beta Computer Screenshot Image 数据结构
 * @description OpenAI API 合约中的 Beta Computer Screenshot Image 结构定义。
 */
export type BetaComputerScreenshotImage = {
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id?: string;
  /**
   * @title image url 值
   * @description OpenAI API 合约中的 image url 值。
   */
  image_url?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'computer_screenshot';
}

/**
 * @title Beta Computer Tool 数据结构
 * @description OpenAI API 合约中的 Beta Computer Tool 结构定义。
 */
export type BetaComputerTool = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'computer';
}

/**
 * @title Beta Computer Tool Call 数据结构
 * @description OpenAI API 合约中的 Beta Computer Tool Call 结构定义。
 */
export type BetaComputerToolCall = {
  /**
   * @title action 值
   * @description OpenAI API 合约中的 action 值。
   */
  action?: BetaComputerAction;
  /**
   * @title actions 值
   * @description OpenAI API 合约中的 actions 值。
   */
  actions?: BetaComputerActionList;
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title pending safety checks 值
   * @description OpenAI API 合约中的 pending safety checks 值。
   */
  pending_safety_checks: Array<BetaComputerCallSafetyCheckParam>;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'in_progress' | 'completed' | 'incomplete';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'computer_call';
}

/**
 * @title Beta Computer Tool Call Output 数据结构
 * @description OpenAI API 合约中的 Beta Computer Tool Call Output 结构定义。
 */
export type BetaComputerToolCallOutput = {
  /**
   * @title acknowledged safety checks 值
   * @description OpenAI API 合约中的 acknowledged safety checks 值。
   */
  acknowledged_safety_checks?: Array<BetaComputerCallSafetyCheckParam>;
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: BetaComputerScreenshotImage;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: 'in_progress' | 'completed' | 'incomplete';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'computer_call_output';
}

/**
 * @title Beta Computer Tool Call Output Resource 数据结构
 * @description OpenAI API 合约中的 Beta Computer Tool Call Output Resource 结构定义。
 */
export type BetaComputerToolCallOutputResource = any

/**
 * @title Beta Computer Use Preview Tool 数据结构
 * @description OpenAI API 合约中的 Beta Computer Use Preview Tool 结构定义。
 */
export type BetaComputerUsePreviewTool = {
  /**
   * @title display height 值
   * @description OpenAI API 合约中的 display height 值。
   */
  display_height: number;
  /**
   * @title display width 值
   * @description OpenAI API 合约中的 display width 值。
   */
  display_width: number;
  /**
   * @title environment 值
   * @description OpenAI API 合约中的 environment 值。
   */
  environment: BetaComputerEnvironment;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'computer_use_preview';
}

/**
 * @title Beta Container Auto Param 数据结构
 * @description OpenAI API 合约中的 Beta Container Auto Param 结构定义。
 */
export type BetaContainerAutoParam = {
  /**
   * @title file ids 值
   * @description OpenAI API 合约中的 file ids 值。
   */
  file_ids?: Array<string>;
  /**
   * @title memory limit 值
   * @description OpenAI API 合约中的 memory limit 值。
   */
  memory_limit?: any;
  /**
   * @title network policy 值
   * @description OpenAI API 合约中的 network policy 值。
   */
  network_policy?: any;
  /**
   * @title skills 值
   * @description OpenAI API 合约中的 skills 值。
   */
  skills?: Array<any>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'container_auto';
}

/**
 * @title Beta Container File Citation Body 数据结构
 * @description OpenAI API 合约中的 Beta Container File Citation Body 结构定义。
 */
export type BetaContainerFileCitationBody = {
  /**
   * @title container id 值
   * @description OpenAI API 合约中的 container id 值。
   */
  container_id: string;
  /**
   * @title end index 值
   * @description OpenAI API 合约中的 end index 值。
   */
  end_index: number;
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id: string;
  /**
   * @title filename 值
   * @description OpenAI API 合约中的 filename 值。
   */
  filename: string;
  /**
   * @title start index 值
   * @description OpenAI API 合约中的 start index 值。
   */
  start_index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'container_file_citation';
}

/**
 * @title Beta Container File Citation Param 数据结构
 * @description OpenAI API 合约中的 Beta Container File Citation Param 结构定义。
 */
export type BetaContainerFileCitationParam = {
  /**
   * @title container id 值
   * @description OpenAI API 合约中的 container id 值。
   */
  container_id: string;
  /**
   * @title end index 值
   * @description OpenAI API 合约中的 end index 值。
   */
  end_index: number;
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id: string;
  /**
   * @title filename 值
   * @description OpenAI API 合约中的 filename 值。
   */
  filename: string;
  /**
   * @title start index 值
   * @description OpenAI API 合约中的 start index 值。
   */
  start_index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'container_file_citation';
}

/**
 * @title Beta Container Memory Limit 数据结构
 * @description OpenAI API 合约中的 Beta Container Memory Limit 结构定义。
 */
export type BetaContainerMemoryLimit = '1g' | '4g' | '16g' | '64g'

/**
 * @title Beta Container Network Policy Allowlist Param 数据结构
 * @description OpenAI API 合约中的 Beta Container Network Policy Allowlist Param 结构定义。
 */
export type BetaContainerNetworkPolicyAllowlistParam = {
  /**
   * @title allowed domains 值
   * @description OpenAI API 合约中的 allowed domains 值。
   */
  allowed_domains: Array<string>;
  /**
   * @title domain secrets 值
   * @description OpenAI API 合约中的 domain secrets 值。
   */
  domain_secrets?: Array<BetaContainerNetworkPolicyDomainSecretParam>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'allowlist';
}

/**
 * @title Beta Container Network Policy Disabled Param 数据结构
 * @description OpenAI API 合约中的 Beta Container Network Policy Disabled Param 结构定义。
 */
export type BetaContainerNetworkPolicyDisabledParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'disabled';
}

/**
 * @title Beta Container Network Policy Domain Secret Param 数据结构
 * @description OpenAI API 合约中的 Beta Container Network Policy Domain Secret Param 结构定义。
 */
export type BetaContainerNetworkPolicyDomainSecretParam = {
  /**
   * @title domain 值
   * @description OpenAI API 合约中的 domain 值。
   */
  domain: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title value 值
   * @description OpenAI API 合约中的 value 值。
   */
  value: string;
}

/**
 * @title Beta Container Reference Param 数据结构
 * @description OpenAI API 合约中的 Beta Container Reference Param 结构定义。
 */
export type BetaContainerReferenceParam = {
  /**
   * @title container id 值
   * @description OpenAI API 合约中的 container id 值。
   */
  container_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'container_reference';
}

/**
 * @title Beta Container Reference Resource 数据结构
 * @description OpenAI API 合约中的 Beta Container Reference Resource 结构定义。
 */
export type BetaContainerReferenceResource = {
  /**
   * @title container id 值
   * @description OpenAI API 合约中的 container id 值。
   */
  container_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'container_reference';
}

/**
 * @title Beta Content 数据结构
 * @description OpenAI API 合约中的 Beta Content 结构定义。
 */
export type BetaContent = any

/**
 * @title Beta Context Management Param 数据结构
 * @description OpenAI API 合约中的 Beta Context Management Param 结构定义。
 */
export type BetaContextManagementParam = {
  /**
   * @title compact threshold 值
   * @description OpenAI API 合约中的 compact threshold 值。
   */
  compact_threshold?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: string;
}

/**
 * @title Beta Conversation Param 数据结构
 * @description OpenAI API 合约中的 Beta Conversation Param 结构定义。
 */
export type BetaConversationParam = any

/**
 * @title Beta Coord Param 数据结构
 * @description OpenAI API 合约中的 Beta Coord Param 结构定义。
 */
export type BetaCoordParam = {
  /**
   * @title x 值
   * @description OpenAI API 合约中的 x 值。
   */
  x: number;
  /**
   * @title y 值
   * @description OpenAI API 合约中的 y 值。
   */
  y: number;
}

/**
 * @title Beta Create Model Response Properties 数据结构
 * @description OpenAI API 合约中的 Beta Create Model Response Properties 结构定义。
 */
export type BetaCreateModelResponseProperties = any

/**
 * @title Beta Create Response 数据结构
 * @description OpenAI API 合约中的 Beta Create Response 结构定义。
 */
export type BetaCreateResponse = any

/**
 * @title Beta Custom Grammar Format Param 数据结构
 * @description OpenAI API 合约中的 Beta Custom Grammar Format Param 结构定义。
 */
export type BetaCustomGrammarFormatParam = {
  /**
   * @title definition 值
   * @description OpenAI API 合约中的 definition 值。
   */
  definition: string;
  /**
   * @title syntax 值
   * @description OpenAI API 合约中的 syntax 值。
   */
  syntax: BetaGrammarSyntax1;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'grammar';
}

/**
 * @title Beta Custom Text Format Param 数据结构
 * @description OpenAI API 合约中的 Beta Custom Text Format Param 结构定义。
 */
export type BetaCustomTextFormatParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'text';
}

/**
 * @title Beta Custom Tool Call 数据结构
 * @description OpenAI API 合约中的 Beta Custom Tool Call 结构定义。
 */
export type BetaCustomToolCall = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title namespace 值
   * @description OpenAI API 合约中的 namespace 值。
   */
  namespace?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'custom_tool_call';
}

/**
 * @title Beta Custom Tool Call Output 数据结构
 * @description OpenAI API 合约中的 Beta Custom Tool Call Output 结构定义。
 */
export type BetaCustomToolCallOutput = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'custom_tool_call_output';
}

/**
 * @title Beta Custom Tool Call Output Resource 数据结构
 * @description OpenAI API 合约中的 Beta Custom Tool Call Output Resource 结构定义。
 */
export type BetaCustomToolCallOutputResource = any

/**
 * @title Beta Custom Tool Call Resource 数据结构
 * @description OpenAI API 合约中的 Beta Custom Tool Call Resource 结构定义。
 */
export type BetaCustomToolCallResource = any

/**
 * @title Beta Custom Tool Param 数据结构
 * @description OpenAI API 合约中的 Beta Custom Tool Param 结构定义。
 */
export type BetaCustomToolParam = {
  /**
   * @title allowed callers 值
   * @description OpenAI API 合约中的 allowed callers 值。
   */
  allowed_callers?: any;
  /**
   * @title defer loading 值
   * @description OpenAI API 合约中的 defer loading 值。
   */
  defer_loading?: boolean;
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description?: string;
  /**
   * @title format 值
   * @description OpenAI API 合约中的 format 值。
   */
  format?: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'custom';
}

/**
 * @title Beta Detail Enum 数据结构
 * @description OpenAI API 合约中的 Beta Detail Enum 结构定义。
 */
export type BetaDetailEnum = 'low' | 'high' | 'auto' | 'original'

/**
 * @title Beta Direct Tool Call Caller 数据结构
 * @description OpenAI API 合约中的 Beta Direct Tool Call Caller 结构定义。
 */
export type BetaDirectToolCallCaller = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'direct';
}

/**
 * @title Beta Direct Tool Call Caller Param 数据结构
 * @description OpenAI API 合约中的 Beta Direct Tool Call Caller Param 结构定义。
 */
export type BetaDirectToolCallCallerParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'direct';
}

/**
 * @title Beta Double Click Action 数据结构
 * @description OpenAI API 合约中的 Beta Double Click Action 结构定义。
 */
export type BetaDoubleClickAction = {
  /**
   * @title keys 值
   * @description OpenAI API 合约中的 keys 值。
   */
  keys: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'double_click';
  /**
   * @title x 值
   * @description OpenAI API 合约中的 x 值。
   */
  x: number;
  /**
   * @title y 值
   * @description OpenAI API 合约中的 y 值。
   */
  y: number;
}

/**
 * @title Beta Drag Param 数据结构
 * @description OpenAI API 合约中的 Beta Drag Param 结构定义。
 */
export type BetaDragParam = {
  /**
   * @title keys 值
   * @description OpenAI API 合约中的 keys 值。
   */
  keys?: any;
  /**
   * @title path 值
   * @description OpenAI API 合约中的 path 值。
   */
  path: Array<BetaCoordParam>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'drag';
}

/**
 * @title Beta Easy Input Message 数据结构
 * @description OpenAI API 合约中的 Beta Easy Input Message 结构定义。
 */
export type BetaEasyInputMessage = {
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: any;
  /**
   * @title phase 值
   * @description OpenAI API 合约中的 phase 值。
   */
  phase?: any;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'user' | 'assistant' | 'system' | 'developer';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type?: 'message';
}

/**
 * @title Beta Empty Model Param 数据结构
 * @description OpenAI API 合约中的 Beta Empty Model Param 结构定义。
 */
export type BetaEmptyModelParam = {

}

/**
 * @title Beta Encrypted Content 数据结构
 * @description OpenAI API 合约中的 Beta Encrypted Content 结构定义。
 */
export type BetaEncryptedContent = {
  /**
   * @title encrypted content 值
   * @description OpenAI API 合约中的 encrypted content 值。
   */
  encrypted_content: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'encrypted_content';
}

/**
 * @title Beta Encrypted Content Param 数据结构
 * @description OpenAI API 合约中的 Beta Encrypted Content Param 结构定义。
 */
export type BetaEncryptedContentParam = {
  /**
   * @title encrypted content 值
   * @description OpenAI API 合约中的 encrypted content 值。
   */
  encrypted_content: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'encrypted_content';
}

/**
 * @title Beta Error 数据结构
 * @description OpenAI API 合约中的 Beta Error 结构定义。
 */
export type BetaError = {
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: any;
  /**
   * @title message 值
   * @description OpenAI API 合约中的 message 值。
   */
  message: string;
  /**
   * @title param 值
   * @description OpenAI API 合约中的 param 值。
   */
  param: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: string;
}

/**
 * @title Beta Error Payload 数据结构
 * @description OpenAI API 合约中的 Beta Error Payload 结构定义。
 */
export type BetaErrorPayload = {
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: any;
  /**
   * @title headers 值
   * @description OpenAI API 合约中的 headers 值。
   */
  headers?: Record<any, string>;
  /**
   * @title message 值
   * @description OpenAI API 合约中的 message 值。
   */
  message: string;
  /**
   * @title param 值
   * @description OpenAI API 合约中的 param 值。
   */
  param: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: string;
}

/**
 * @title Beta File Citation Body 数据结构
 * @description OpenAI API 合约中的 Beta File Citation Body 结构定义。
 */
export type BetaFileCitationBody = {
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id: string;
  /**
   * @title filename 值
   * @description OpenAI API 合约中的 filename 值。
   */
  filename: string;
  /**
   * @title index 值
   * @description OpenAI API 合约中的 index 值。
   */
  index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file_citation';
}

/**
 * @title Beta File Citation Param 数据结构
 * @description OpenAI API 合约中的 Beta File Citation Param 结构定义。
 */
export type BetaFileCitationParam = {
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id: string;
  /**
   * @title filename 值
   * @description OpenAI API 合约中的 filename 值。
   */
  filename: string;
  /**
   * @title index 值
   * @description OpenAI API 合约中的 index 值。
   */
  index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file_citation';
}

/**
 * @title Beta File Detail Enum 数据结构
 * @description OpenAI API 合约中的 Beta File Detail Enum 结构定义。
 */
export type BetaFileDetailEnum = 'auto' | 'low' | 'high'

/**
 * @title Beta File Input Detail 数据结构
 * @description OpenAI API 合约中的 Beta File Input Detail 结构定义。
 */
export type BetaFileInputDetail = 'auto' | 'low' | 'high'

/**
 * @title Beta File Path 数据结构
 * @description OpenAI API 合约中的 Beta File Path 结构定义。
 */
export type BetaFilePath = {
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id: string;
  /**
   * @title index 值
   * @description OpenAI API 合约中的 index 值。
   */
  index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file_path';
}

/**
 * @title Beta File Search Tool 数据结构
 * @description OpenAI API 合约中的 Beta File Search Tool 结构定义。
 */
export type BetaFileSearchTool = {
  /**
   * @title filters 值
   * @description OpenAI API 合约中的 filters 值。
   */
  filters?: any;
  /**
   * @title max num results 值
   * @description OpenAI API 合约中的 max num results 值。
   */
  max_num_results?: number;
  /**
   * @title ranking options 值
   * @description OpenAI API 合约中的 ranking options 值。
   */
  ranking_options?: BetaRankingOptions;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file_search';
  /**
   * @title vector store ids 值
   * @description OpenAI API 合约中的 vector store ids 值。
   */
  vector_store_ids: Array<string>;
}

/**
 * @title Beta File Search Tool Call 数据结构
 * @description OpenAI API 合约中的 Beta File Search Tool Call 结构定义。
 */
export type BetaFileSearchToolCall = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title queries 值
   * @description OpenAI API 合约中的 queries 值。
   */
  queries: Array<string>;
  /**
   * @title results 值
   * @description OpenAI API 合约中的 results 值。
   */
  results?: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'in_progress' | 'searching' | 'completed' | 'incomplete' | 'failed';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file_search_call';
}

/**
 * @title Beta Filters 数据结构
 * @description OpenAI API 合约中的 Beta Filters 结构定义。
 */
export type BetaFilters = any

/**
 * @title Beta Function And Custom Tool Call Output 数据结构
 * @description OpenAI API 合约中的 Beta Function And Custom Tool Call Output 结构定义。
 */
export type BetaFunctionAndCustomToolCallOutput = any

/**
 * @title Beta Function Call Item Status 数据结构
 * @description OpenAI API 合约中的 Beta Function Call Item Status 结构定义。
 */
export type BetaFunctionCallItemStatus = 'in_progress' | 'completed' | 'incomplete'

/**
 * @title Beta Function Call Output Item Param 数据结构
 * @description OpenAI API 合约中的 Beta Function Call Output Item Param 结构定义。
 */
export type BetaFunctionCallOutputItemParam = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id?: any;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: any;
  /**
   * @title namespace 值
   * @description OpenAI API 合约中的 namespace 值。
   */
  namespace?: any;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'function_call_output';
}

/**
 * @title Beta Function Call Output Status Enum 数据结构
 * @description OpenAI API 合约中的 Beta Function Call Output Status Enum 结构定义。
 */
export type BetaFunctionCallOutputStatusEnum = 'in_progress' | 'completed' | 'incomplete'

/**
 * @title Beta Function Call Status 数据结构
 * @description OpenAI API 合约中的 Beta Function Call Status 结构定义。
 */
export type BetaFunctionCallStatus = 'in_progress' | 'completed' | 'incomplete'

/**
 * @title Beta Function Shell Action 数据结构
 * @description OpenAI API 合约中的 Beta Function Shell Action 结构定义。
 */
export type BetaFunctionShellAction = {
  /**
   * @title commands 值
   * @description OpenAI API 合约中的 commands 值。
   */
  commands: Array<string>;
  /**
   * @title max output length 值
   * @description OpenAI API 合约中的 max output length 值。
   */
  max_output_length: any;
  /**
   * @title timeout ms 值
   * @description OpenAI API 合约中的 timeout ms 值。
   */
  timeout_ms: any;
}

/**
 * @title Beta Function Shell Action Param 数据结构
 * @description OpenAI API 合约中的 Beta Function Shell Action Param 结构定义。
 */
export type BetaFunctionShellActionParam = {
  /**
   * @title commands 值
   * @description OpenAI API 合约中的 commands 值。
   */
  commands: Array<string>;
  /**
   * @title max output length 值
   * @description OpenAI API 合约中的 max output length 值。
   */
  max_output_length?: any;
  /**
   * @title timeout ms 值
   * @description OpenAI API 合约中的 timeout ms 值。
   */
  timeout_ms?: any;
}

/**
 * @title Beta Function Shell Call 数据结构
 * @description OpenAI API 合约中的 Beta Function Shell Call 结构定义。
 */
export type BetaFunctionShellCall = {
  /**
   * @title action 值
   * @description OpenAI API 合约中的 action 值。
   */
  action: BetaFunctionShellAction;
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: BetaAgentTag;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title created by 值
   * @description OpenAI API 合约中的 created by 值。
   */
  created_by?: string;
  /**
   * @title environment 值
   * @description OpenAI API 合约中的 environment 值。
   */
  environment: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: BetaFunctionShellCallStatus;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'shell_call';
}

/**
 * @title Beta Function Shell Call Item Param 数据结构
 * @description OpenAI API 合约中的 Beta Function Shell Call Item Param 结构定义。
 */
export type BetaFunctionShellCallItemParam = {
  /**
   * @title action 值
   * @description OpenAI API 合约中的 action 值。
   */
  action: BetaFunctionShellActionParam;
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title environment 值
   * @description OpenAI API 合约中的 environment 值。
   */
  environment?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'shell_call';
}

/**
 * @title Beta Function Shell Call Item Status 数据结构
 * @description OpenAI API 合约中的 Beta Function Shell Call Item Status 结构定义。
 */
export type BetaFunctionShellCallItemStatus = 'in_progress' | 'completed' | 'incomplete'

/**
 * @title Beta Function Shell Call Output 数据结构
 * @description OpenAI API 合约中的 Beta Function Shell Call Output 结构定义。
 */
export type BetaFunctionShellCallOutput = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: BetaAgentTag;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title created by 值
   * @description OpenAI API 合约中的 created by 值。
   */
  created_by?: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title max output length 值
   * @description OpenAI API 合约中的 max output length 值。
   */
  max_output_length: any;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: Array<BetaFunctionShellCallOutputContent>;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: BetaFunctionShellCallOutputStatusEnum;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'shell_call_output';
}

/**
 * @title Beta Function Shell Call Output Content 数据结构
 * @description OpenAI API 合约中的 Beta Function Shell Call Output Content 结构定义。
 */
export type BetaFunctionShellCallOutputContent = {
  /**
   * @title created by 值
   * @description OpenAI API 合约中的 created by 值。
   */
  created_by?: string;
  /**
   * @title outcome 值
   * @description OpenAI API 合约中的 outcome 值。
   */
  outcome: any;
  /**
   * @title stderr 值
   * @description OpenAI API 合约中的 stderr 值。
   */
  stderr: string;
  /**
   * @title stdout 值
   * @description OpenAI API 合约中的 stdout 值。
   */
  stdout: string;
}

/**
 * @title Beta Function Shell Call Output Content Param 数据结构
 * @description OpenAI API 合约中的 Beta Function Shell Call Output Content Param 结构定义。
 */
export type BetaFunctionShellCallOutputContentParam = {
  /**
   * @title outcome 值
   * @description OpenAI API 合约中的 outcome 值。
   */
  outcome: BetaFunctionShellCallOutputOutcomeParam;
  /**
   * @title stderr 值
   * @description OpenAI API 合约中的 stderr 值。
   */
  stderr: string;
  /**
   * @title stdout 值
   * @description OpenAI API 合约中的 stdout 值。
   */
  stdout: string;
}

/**
 * @title Beta Function Shell Call Output Exit Outcome 数据结构
 * @description OpenAI API 合约中的 Beta Function Shell Call Output Exit Outcome 结构定义。
 */
export type BetaFunctionShellCallOutputExitOutcome = {
  /**
   * @title exit code 值
   * @description OpenAI API 合约中的 exit code 值。
   */
  exit_code: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'exit';
}

/**
 * @title Beta Function Shell Call Output Exit Outcome Param 数据结构
 * @description OpenAI API 合约中的 Beta Function Shell Call Output Exit Outcome Param 结构定义。
 */
export type BetaFunctionShellCallOutputExitOutcomeParam = {
  /**
   * @title exit code 值
   * @description OpenAI API 合约中的 exit code 值。
   */
  exit_code: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'exit';
}

/**
 * @title Beta Function Shell Call Output Item Param 数据结构
 * @description OpenAI API 合约中的 Beta Function Shell Call Output Item Param 结构定义。
 */
export type BetaFunctionShellCallOutputItemParam = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title max output length 值
   * @description OpenAI API 合约中的 max output length 值。
   */
  max_output_length?: any;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: Array<BetaFunctionShellCallOutputContentParam>;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'shell_call_output';
}

/**
 * @title Beta Function Shell Call Output Outcome Param 数据结构
 * @description OpenAI API 合约中的 Beta Function Shell Call Output Outcome Param 结构定义。
 */
export type BetaFunctionShellCallOutputOutcomeParam = any

/**
 * @title Beta Function Shell Call Output Status Enum 数据结构
 * @description OpenAI API 合约中的 Beta Function Shell Call Output Status Enum 结构定义。
 */
export type BetaFunctionShellCallOutputStatusEnum = 'in_progress' | 'completed' | 'incomplete'

/**
 * @title Beta Function Shell Call Output Timeout Outcome 数据结构
 * @description OpenAI API 合约中的 Beta Function Shell Call Output Timeout Outcome 结构定义。
 */
export type BetaFunctionShellCallOutputTimeoutOutcome = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'timeout';
}

/**
 * @title Beta Function Shell Call Output Timeout Outcome Param 数据结构
 * @description OpenAI API 合约中的 Beta Function Shell Call Output Timeout Outcome Param 结构定义。
 */
export type BetaFunctionShellCallOutputTimeoutOutcomeParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'timeout';
}

/**
 * @title Beta Function Shell Call Status 数据结构
 * @description OpenAI API 合约中的 Beta Function Shell Call Status 结构定义。
 */
export type BetaFunctionShellCallStatus = 'in_progress' | 'completed' | 'incomplete'

/**
 * @title Beta Function Shell Tool Param 数据结构
 * @description OpenAI API 合约中的 Beta Function Shell Tool Param 结构定义。
 */
export type BetaFunctionShellToolParam = {
  /**
   * @title allowed callers 值
   * @description OpenAI API 合约中的 allowed callers 值。
   */
  allowed_callers?: any;
  /**
   * @title environment 值
   * @description OpenAI API 合约中的 environment 值。
   */
  environment?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'shell';
}

/**
 * @title Beta Function Tool 数据结构
 * @description OpenAI API 合约中的 Beta Function Tool 结构定义。
 */
export type BetaFunctionTool = {
  /**
   * @title allowed callers 值
   * @description OpenAI API 合约中的 allowed callers 值。
   */
  allowed_callers?: any;
  /**
   * @title defer loading 值
   * @description OpenAI API 合约中的 defer loading 值。
   */
  defer_loading?: boolean;
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description?: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title output schema 值
   * @description OpenAI API 合约中的 output schema 值。
   */
  output_schema?: any;
  /**
   * @title parameters 值
   * @description OpenAI API 合约中的 parameters 值。
   */
  parameters: any;
  /**
   * @title strict 值
   * @description OpenAI API 合约中的 strict 值。
   */
  strict: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'function';
}

/**
 * @title Beta Function Tool Call 数据结构
 * @description OpenAI API 合约中的 Beta Function Tool Call 结构定义。
 */
export type BetaFunctionToolCall = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: string;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title namespace 值
   * @description OpenAI API 合约中的 namespace 值。
   */
  namespace?: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: 'in_progress' | 'completed' | 'incomplete';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'function_call';
}

/**
 * @title Beta Function Tool Call Output 数据结构
 * @description OpenAI API 合约中的 Beta Function Tool Call Output 结构定义。
 */
export type BetaFunctionToolCallOutput = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id?: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: string;
  /**
   * @title namespace 值
   * @description OpenAI API 合约中的 namespace 值。
   */
  namespace?: string;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: 'in_progress' | 'completed' | 'incomplete';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'function_call_output';
}

/**
 * @title Beta Function Tool Call Output Resource 数据结构
 * @description OpenAI API 合约中的 Beta Function Tool Call Output Resource 结构定义。
 */
export type BetaFunctionToolCallOutputResource = any

/**
 * @title Beta Function Tool Call Resource 数据结构
 * @description OpenAI API 合约中的 Beta Function Tool Call Resource 结构定义。
 */
export type BetaFunctionToolCallResource = any

/**
 * @title Beta Function Tool Param 数据结构
 * @description OpenAI API 合约中的 Beta Function Tool Param 结构定义。
 */
export type BetaFunctionToolParam = {
  /**
   * @title allowed callers 值
   * @description OpenAI API 合约中的 allowed callers 值。
   */
  allowed_callers?: any;
  /**
   * @title defer loading 值
   * @description OpenAI API 合约中的 defer loading 值。
   */
  defer_loading?: boolean;
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description?: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title output schema 值
   * @description OpenAI API 合约中的 output schema 值。
   */
  output_schema?: any;
  /**
   * @title parameters 值
   * @description OpenAI API 合约中的 parameters 值。
   */
  parameters?: any;
  /**
   * @title strict 值
   * @description OpenAI API 合约中的 strict 值。
   */
  strict?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'function';
}

/**
 * @title Beta Grammar Syntax1 数据结构
 * @description OpenAI API 合约中的 Beta Grammar Syntax1 结构定义。
 */
export type BetaGrammarSyntax1 = 'lark' | 'regex'

/**
 * @title Beta HTTPError 数据结构
 * @description OpenAI API 合约中的 Beta HTTPError 结构定义。
 */
export type BetaHTTPError = {
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: number;
  /**
   * @title message 值
   * @description OpenAI API 合约中的 message 值。
   */
  message: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'http_error';
}

/**
 * @title Beta Hybrid Search Options 数据结构
 * @description OpenAI API 合约中的 Beta Hybrid Search Options 结构定义。
 */
export type BetaHybridSearchOptions = {
  /**
   * @title embedding weight 值
   * @description OpenAI API 合约中的 embedding weight 值。
   */
  embedding_weight: number;
  /**
   * @title text weight 值
   * @description OpenAI API 合约中的 text weight 值。
   */
  text_weight: number;
}

/**
 * @title Beta Image Detail 数据结构
 * @description OpenAI API 合约中的 Beta Image Detail 结构定义。
 */
export type BetaImageDetail = 'low' | 'high' | 'auto' | 'original'

/**
 * @title Beta Image Gen Action Enum 数据结构
 * @description OpenAI API 合约中的 Beta Image Gen Action Enum 结构定义。
 */
export type BetaImageGenActionEnum = 'generate' | 'edit' | 'auto'

/**
 * @title Beta Image Gen Tool 数据结构
 * @description OpenAI API 合约中的 Beta Image Gen Tool 结构定义。
 */
export type BetaImageGenTool = {
  /**
   * @title action 值
   * @description OpenAI API 合约中的 action 值。
   */
  action?: BetaImageGenActionEnum;
  /**
   * @title background 值
   * @description OpenAI API 合约中的 background 值。
   */
  background?: 'transparent' | 'opaque' | 'auto';
  /**
   * @title input fidelity 值
   * @description OpenAI API 合约中的 input fidelity 值。
   */
  input_fidelity?: any;
  /**
   * @title input image mask 值
   * @description OpenAI API 合约中的 input image mask 值。
   */
  input_image_mask?: {
    /**
     * @title file id 值
     * @description OpenAI API 合约中的 file id 值。
     */
    file_id?: string;
    /**
     * @title image url 值
     * @description OpenAI API 合约中的 image url 值。
     */
    image_url?: string
  };
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title moderation 值
   * @description OpenAI API 合约中的 moderation 值。
   */
  moderation?: 'auto' | 'low';
  /**
   * @title output compression 值
   * @description OpenAI API 合约中的 output compression 值。
   */
  output_compression?: number;
  /**
   * @title output format 值
   * @description OpenAI API 合约中的 output format 值。
   */
  output_format?: 'png' | 'webp' | 'jpeg';
  /**
   * @title partial images 值
   * @description OpenAI API 合约中的 partial images 值。
   */
  partial_images?: number;
  /**
   * @title quality 值
   * @description OpenAI API 合约中的 quality 值。
   */
  quality?: 'low' | 'medium' | 'high' | 'auto';
  /**
   * @title size 值
   * @description OpenAI API 合约中的 size 值。
   */
  size?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'image_generation';
}

/**
 * @title Beta Image Gen Tool Call 数据结构
 * @description OpenAI API 合约中的 Beta Image Gen Tool Call 结构定义。
 */
export type BetaImageGenToolCall = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title result 值
   * @description OpenAI API 合约中的 result 值。
   */
  result: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'in_progress' | 'completed' | 'generating' | 'failed';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'image_generation_call';
}

/**
 * @title Beta Include Enum 数据结构
 * @description OpenAI API 合约中的 Beta Include Enum 结构定义。
 */
export type BetaIncludeEnum = 'file_search_call.results' | 'web_search_call.results' | 'web_search_call.action.sources' | 'message.input_image.image_url' | 'computer_call_output.output.image_url' | 'code_interpreter_call.outputs' | 'reasoning.encrypted_content' | 'message.output_text.logprobs'

/**
 * @title Beta Inline Skill Param 数据结构
 * @description OpenAI API 合约中的 Beta Inline Skill Param 结构定义。
 */
export type BetaInlineSkillParam = {
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title source 值
   * @description OpenAI API 合约中的 source 值。
   */
  source: BetaInlineSkillSourceParam;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'inline';
}

/**
 * @title Beta Inline Skill Source Param 数据结构
 * @description OpenAI API 合约中的 Beta Inline Skill Source Param 结构定义。
 */
export type BetaInlineSkillSourceParam = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: string;
  /**
   * @title media type 值
   * @description OpenAI API 合约中的 media type 值。
   */
  media_type: 'application/zip';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'base64';
}

/**
 * @title Beta Input Audio 数据结构
 * @description OpenAI API 合约中的 Beta Input Audio 结构定义。
 */
export type BetaInputAudio = {
  /**
   * @title input audio 值
   * @description OpenAI API 合约中的 input audio 值。
   */
  input_audio: {
    /**
     * @title data 值
     * @description OpenAI API 合约中的 data 值。
     */
    data: string;
    /**
     * @title format 值
     * @description OpenAI API 合约中的 format 值。
     */
    format: 'mp3' | 'wav'
  };
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_audio';
}

/**
 * @title Beta Input Content 数据结构
 * @description OpenAI API 合约中的 Beta Input Content 结构定义。
 */
export type BetaInputContent = any

/**
 * @title Beta Input Fidelity 数据结构
 * @description OpenAI API 合约中的 Beta Input Fidelity 结构定义。
 */
export type BetaInputFidelity = 'high' | 'low'

/**
 * @title Beta Input File Content 数据结构
 * @description OpenAI API 合约中的 Beta Input File Content 结构定义。
 */
export type BetaInputFileContent = {
  /**
   * @title detail 值
   * @description OpenAI API 合约中的 detail 值。
   */
  detail?: BetaFileInputDetail;
  /**
   * @title file data 值
   * @description OpenAI API 合约中的 file data 值。
   */
  file_data?: string;
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id?: any;
  /**
   * @title file url 值
   * @description OpenAI API 合约中的 file url 值。
   */
  file_url?: string;
  /**
   * @title filename 值
   * @description OpenAI API 合约中的 filename 值。
   */
  filename?: string;
  /**
   * @title prompt cache breakpoint 值
   * @description OpenAI API 合约中的 prompt cache breakpoint 值。
   */
  prompt_cache_breakpoint?: BetaPromptCacheBreakpointConfig;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_file';
}

/**
 * @title Beta Input File Content Param 数据结构
 * @description OpenAI API 合约中的 Beta Input File Content Param 结构定义。
 */
export type BetaInputFileContentParam = {
  /**
   * @title detail 值
   * @description OpenAI API 合约中的 detail 值。
   */
  detail?: BetaFileDetailEnum;
  /**
   * @title file data 值
   * @description OpenAI API 合约中的 file data 值。
   */
  file_data?: any;
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id?: any;
  /**
   * @title file url 值
   * @description OpenAI API 合约中的 file url 值。
   */
  file_url?: any;
  /**
   * @title filename 值
   * @description OpenAI API 合约中的 filename 值。
   */
  filename?: any;
  /**
   * @title prompt cache breakpoint 值
   * @description OpenAI API 合约中的 prompt cache breakpoint 值。
   */
  prompt_cache_breakpoint?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_file';
}

/**
 * @title Beta Input Image Content 数据结构
 * @description OpenAI API 合约中的 Beta Input Image Content 结构定义。
 */
export type BetaInputImageContent = {
  /**
   * @title detail 值
   * @description OpenAI API 合约中的 detail 值。
   */
  detail: BetaImageDetail;
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id?: any;
  /**
   * @title image url 值
   * @description OpenAI API 合约中的 image url 值。
   */
  image_url?: any;
  /**
   * @title prompt cache breakpoint 值
   * @description OpenAI API 合约中的 prompt cache breakpoint 值。
   */
  prompt_cache_breakpoint?: BetaPromptCacheBreakpointConfig;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_image';
}

/**
 * @title Beta Input Image Content Param Auto Param 数据结构
 * @description OpenAI API 合约中的 Beta Input Image Content Param Auto Param 结构定义。
 */
export type BetaInputImageContentParamAutoParam = {
  /**
   * @title detail 值
   * @description OpenAI API 合约中的 detail 值。
   */
  detail?: any;
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id?: any;
  /**
   * @title image url 值
   * @description OpenAI API 合约中的 image url 值。
   */
  image_url?: any;
  /**
   * @title prompt cache breakpoint 值
   * @description OpenAI API 合约中的 prompt cache breakpoint 值。
   */
  prompt_cache_breakpoint?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_image';
}

/**
 * @title Beta Input Item 数据结构
 * @description OpenAI API 合约中的 Beta Input Item 结构定义。
 */
export type BetaInputItem = any

/**
 * @title Beta Input Message 数据结构
 * @description OpenAI API 合约中的 Beta Input Message 结构定义。
 */
export type BetaInputMessage = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: BetaInputMessageContentList;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'user' | 'system' | 'developer';
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: 'in_progress' | 'completed' | 'incomplete';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type?: 'message';
}

/**
 * @title Beta Input Message Content List 数据结构
 * @description OpenAI API 合约中的 Beta Input Message Content List 结构定义。
 */
export type BetaInputMessageContentList = Array<BetaInputContent>

/**
 * @title Beta Input Message Resource 数据结构
 * @description OpenAI API 合约中的 Beta Input Message Resource 结构定义。
 */
export type BetaInputMessageResource = any

/**
 * @title Beta Input Param 数据结构
 * @description OpenAI API 合约中的 Beta Input Param 结构定义。
 */
export type BetaInputParam = any

/**
 * @title Beta Input Text Content 数据结构
 * @description OpenAI API 合约中的 Beta Input Text Content 结构定义。
 */
export type BetaInputTextContent = {
  /**
   * @title prompt cache breakpoint 值
   * @description OpenAI API 合约中的 prompt cache breakpoint 值。
   */
  prompt_cache_breakpoint?: BetaPromptCacheBreakpointConfig;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_text';
}

/**
 * @title Beta Input Text Content Param 数据结构
 * @description OpenAI API 合约中的 Beta Input Text Content Param 结构定义。
 */
export type BetaInputTextContentParam = {
  /**
   * @title prompt cache breakpoint 值
   * @description OpenAI API 合约中的 prompt cache breakpoint 值。
   */
  prompt_cache_breakpoint?: any;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_text';
}

/**
 * @title Beta Item 数据结构
 * @description OpenAI API 合约中的 Beta Item 结构定义。
 */
export type BetaItem = any

/**
 * @title Beta Item Field 数据结构
 * @description OpenAI API 合约中的 Beta Item Field 结构定义。
 */
export type BetaItemField = any

/**
 * @title Beta Item Reference Param 数据结构
 * @description OpenAI API 合约中的 Beta Item Reference Param 结构定义。
 */
export type BetaItemReferenceParam = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type?: any;
}

/**
 * @title Beta Item Resource 数据结构
 * @description OpenAI API 合约中的 Beta Item Resource 结构定义。
 */
export type BetaItemResource = any

/**
 * @title Beta Key Press Action 数据结构
 * @description OpenAI API 合约中的 Beta Key Press Action 结构定义。
 */
export type BetaKeyPressAction = {
  /**
   * @title keys 值
   * @description OpenAI API 合约中的 keys 值。
   */
  keys: Array<string>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'keypress';
}

/**
 * @title Beta Local Environment Param 数据结构
 * @description OpenAI API 合约中的 Beta Local Environment Param 结构定义。
 */
export type BetaLocalEnvironmentParam = {
  /**
   * @title skills 值
   * @description OpenAI API 合约中的 skills 值。
   */
  skills?: Array<BetaLocalSkillParam>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'local';
}

/**
 * @title Beta Local Environment Resource 数据结构
 * @description OpenAI API 合约中的 Beta Local Environment Resource 结构定义。
 */
export type BetaLocalEnvironmentResource = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'local';
}

/**
 * @title Beta Local Shell Exec Action 数据结构
 * @description OpenAI API 合约中的 Beta Local Shell Exec Action 结构定义。
 */
export type BetaLocalShellExecAction = {
  /**
   * @title command 值
   * @description OpenAI API 合约中的 command 值。
   */
  command: Array<string>;
  /**
   * @title env 值
   * @description OpenAI API 合约中的 env 值。
   */
  env: Record<any, string>;
  /**
   * @title timeout ms 值
   * @description OpenAI API 合约中的 timeout ms 值。
   */
  timeout_ms?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'exec';
  /**
   * @title user 值
   * @description OpenAI API 合约中的 user 值。
   */
  user?: any;
  /**
   * @title working directory 值
   * @description OpenAI API 合约中的 working directory 值。
   */
  working_directory?: any;
}

/**
 * @title Beta Local Shell Tool Call 数据结构
 * @description OpenAI API 合约中的 Beta Local Shell Tool Call 结构定义。
 */
export type BetaLocalShellToolCall = {
  /**
   * @title action 值
   * @description OpenAI API 合约中的 action 值。
   */
  action: BetaLocalShellExecAction;
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'in_progress' | 'completed' | 'incomplete';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'local_shell_call';
}

/**
 * @title Beta Local Shell Tool Call Output 数据结构
 * @description OpenAI API 合约中的 Beta Local Shell Tool Call Output 结构定义。
 */
export type BetaLocalShellToolCallOutput = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'local_shell_call_output';
}

/**
 * @title Beta Local Shell Tool Param 数据结构
 * @description OpenAI API 合约中的 Beta Local Shell Tool Param 结构定义。
 */
export type BetaLocalShellToolParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'local_shell';
}

/**
 * @title Beta Local Skill Param 数据结构
 * @description OpenAI API 合约中的 Beta Local Skill Param 结构定义。
 */
export type BetaLocalSkillParam = {
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title path 值
   * @description OpenAI API 合约中的 path 值。
   */
  path: string;
}

/**
 * @title Beta Log Prob 数据结构
 * @description OpenAI API 合约中的 Beta Log Prob 结构定义。
 */
export type BetaLogProb = {
  /**
   * @title bytes 值
   * @description OpenAI API 合约中的 bytes 值。
   */
  bytes: Array<number>;
  /**
   * @title logprob 值
   * @description OpenAI API 合约中的 logprob 值。
   */
  logprob: number;
  /**
   * @title token 值
   * @description OpenAI API 合约中的 token 值。
   */
  token: string;
  /**
   * @title top logprobs 值
   * @description OpenAI API 合约中的 top logprobs 值。
   */
  top_logprobs: Array<BetaTopLogProb>;
}

/**
 * @title Beta MCPApproval Request 数据结构
 * @description OpenAI API 合约中的 Beta MCPApproval Request 结构定义。
 */
export type BetaMCPApprovalRequest = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title server label 值
   * @description OpenAI API 合约中的 server label 值。
   */
  server_label: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_approval_request';
}

/**
 * @title Beta MCPApproval Response 数据结构
 * @description OpenAI API 合约中的 Beta MCPApproval Response 结构定义。
 */
export type BetaMCPApprovalResponse = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title approval request id 值
   * @description OpenAI API 合约中的 approval request id 值。
   */
  approval_request_id: string;
  /**
   * @title approve 值
   * @description OpenAI API 合约中的 approve 值。
   */
  approve: boolean;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title reason 值
   * @description OpenAI API 合约中的 reason 值。
   */
  reason?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_approval_response';
}

/**
 * @title Beta MCPApproval Response Resource 数据结构
 * @description OpenAI API 合约中的 Beta MCPApproval Response Resource 结构定义。
 */
export type BetaMCPApprovalResponseResource = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title approval request id 值
   * @description OpenAI API 合约中的 approval request id 值。
   */
  approval_request_id: string;
  /**
   * @title approve 值
   * @description OpenAI API 合约中的 approve 值。
   */
  approve: boolean;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title reason 值
   * @description OpenAI API 合约中的 reason 值。
   */
  reason?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_approval_response';
}

/**
 * @title Beta MCPList Tools 数据结构
 * @description OpenAI API 合约中的 Beta MCPList Tools 结构定义。
 */
export type BetaMCPListTools = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title error 值
   * @description OpenAI API 合约中的 error 值。
   */
  error?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title server label 值
   * @description OpenAI API 合约中的 server label 值。
   */
  server_label: string;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools: Array<BetaMCPListToolsTool>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_list_tools';
}

/**
 * @title Beta MCPList Tools Tool 数据结构
 * @description OpenAI API 合约中的 Beta MCPList Tools Tool 结构定义。
 */
export type BetaMCPListToolsTool = {
  /**
   * @title annotations 值
   * @description OpenAI API 合约中的 annotations 值。
   */
  annotations?: any;
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description?: any;
  /**
   * @title input schema 值
   * @description OpenAI API 合约中的 input schema 值。
   */
  input_schema: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
}

/**
 * @title Beta MCPProtocol Error 数据结构
 * @description OpenAI API 合约中的 Beta MCPProtocol Error 结构定义。
 */
export type BetaMCPProtocolError = {
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: number;
  /**
   * @title message 值
   * @description OpenAI API 合约中的 message 值。
   */
  message: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_protocol_error';
}

/**
 * @title Beta MCPTool 数据结构
 * @description OpenAI API 合约中的 Beta MCPTool 结构定义。
 */
export type BetaMCPTool = {
  /**
   * @title allowed callers 值
   * @description OpenAI API 合约中的 allowed callers 值。
   */
  allowed_callers?: any;
  /**
   * @title allowed tools 值
   * @description OpenAI API 合约中的 allowed tools 值。
   */
  allowed_tools?: any;
  /**
   * @title authorization 值
   * @description OpenAI API 合约中的 authorization 值。
   */
  authorization?: string;
  /**
   * @title connector id 值
   * @description OpenAI API 合约中的 connector id 值。
   */
  connector_id?: 'connector_dropbox' | 'connector_gmail' | 'connector_googlecalendar' | 'connector_googledrive' | 'connector_microsoftteams' | 'connector_outlookcalendar' | 'connector_outlookemail' | 'connector_sharepoint';
  /**
   * @title defer loading 值
   * @description OpenAI API 合约中的 defer loading 值。
   */
  defer_loading?: boolean;
  /**
   * @title headers 值
   * @description OpenAI API 合约中的 headers 值。
   */
  headers?: any;
  /**
   * @title require approval 值
   * @description OpenAI API 合约中的 require approval 值。
   */
  require_approval?: any;
  /**
   * @title server description 值
   * @description OpenAI API 合约中的 server description 值。
   */
  server_description?: string;
  /**
   * @title server label 值
   * @description OpenAI API 合约中的 server label 值。
   */
  server_label: string;
  /**
   * @title server url 值
   * @description OpenAI API 合约中的 server url 值。
   */
  server_url?: string;
  /**
   * @title tunnel id 值
   * @description OpenAI API 合约中的 tunnel id 值。
   */
  tunnel_id?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp';
}

/**
 * @title Beta MCPTool Call 数据结构
 * @description OpenAI API 合约中的 Beta MCPTool Call 结构定义。
 */
export type BetaMCPToolCall = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title approval request id 值
   * @description OpenAI API 合约中的 approval request id 值。
   */
  approval_request_id?: any;
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: string;
  /**
   * @title error 值
   * @description OpenAI API 合约中的 error 值。
   */
  error?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output?: any;
  /**
   * @title server label 值
   * @description OpenAI API 合约中的 server label 值。
   */
  server_label: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: BetaMCPToolCallStatus;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_call';
}

/**
 * @title Beta MCPTool Call Error 数据结构
 * @description OpenAI API 合约中的 Beta MCPTool Call Error 结构定义。
 */
export type BetaMCPToolCallError = any

/**
 * @title Beta MCPTool Call Status 数据结构
 * @description OpenAI API 合约中的 Beta MCPTool Call Status 结构定义。
 */
export type BetaMCPToolCallStatus = 'in_progress' | 'completed' | 'incomplete' | 'calling' | 'failed'

/**
 * @title Beta MCPTool Execution Error 数据结构
 * @description OpenAI API 合约中的 Beta MCPTool Execution Error 结构定义。
 */
export type BetaMCPToolExecutionError = {
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_tool_execution_error';
}

/**
 * @title Beta MCPTool Filter 数据结构
 * @description OpenAI API 合约中的 Beta MCPTool Filter 结构定义。
 */
export type BetaMCPToolFilter = {
  /**
   * @title read only 值
   * @description OpenAI API 合约中的 read only 值。
   */
  read_only?: boolean;
  /**
   * @title tool names 值
   * @description OpenAI API 合约中的 tool names 值。
   */
  tool_names?: Array<string>;
}

/**
 * @title Beta Message 数据结构
 * @description OpenAI API 合约中的 Beta Message 结构定义。
 */
export type BetaMessage = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: BetaAgentTag;
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: Array<any>;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title phase 值
   * @description OpenAI API 合约中的 phase 值。
   */
  phase?: any;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: BetaMessageRole;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: BetaMessageStatus;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'message';
}

/**
 * @title Beta Message Phase 数据结构
 * @description OpenAI API 合约中的 Beta Message Phase 结构定义。
 */
export type BetaMessagePhase = 'commentary' | 'final_answer'

/**
 * @title Beta Message Role 数据结构
 * @description OpenAI API 合约中的 Beta Message Role 结构定义。
 */
export type BetaMessageRole = 'unknown' | 'user' | 'assistant' | 'system' | 'critic' | 'discriminator' | 'developer' | 'tool'

/**
 * @title Beta Message Status 数据结构
 * @description OpenAI API 合约中的 Beta Message Status 结构定义。
 */
export type BetaMessageStatus = 'in_progress' | 'completed' | 'incomplete'

/**
 * @title Beta Metadata 数据结构
 * @description OpenAI API 合约中的 Beta Metadata 结构定义。
 */
export type BetaMetadata = any

/**
 * @title Beta Model Ids Compaction 数据结构
 * @description OpenAI API 合约中的 Beta Model Ids Compaction 结构定义。
 */
export type BetaModelIdsCompaction = any

/**
 * @title Beta Model Ids Responses 数据结构
 * @description OpenAI API 合约中的 Beta Model Ids Responses 结构定义。
 */
export type BetaModelIdsResponses = any

/**
 * @title Beta Model Ids Shared 数据结构
 * @description OpenAI API 合约中的 Beta Model Ids Shared 结构定义。
 */
export type BetaModelIdsShared = any

/**
 * @title Beta Model Response Properties 数据结构
 * @description OpenAI API 合约中的 Beta Model Response Properties 结构定义。
 */
export type BetaModelResponseProperties = {
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: BetaMetadata;
  /**
   * @title prompt cache key 值
   * @description OpenAI API 合约中的 prompt cache key 值。
   */
  prompt_cache_key?: any;
  /**
   * @title prompt cache retention 值
   * @description OpenAI API 合约中的 prompt cache retention 值。
   */
  prompt_cache_retention?: any;
  /**
   * @title safety identifier 值
   * @description OpenAI API 合约中的 safety identifier 值。
   */
  safety_identifier?: any;
  /**
   * @title temperature 值
   * @description OpenAI API 合约中的 temperature 值。
   */
  temperature?: any;
  /**
   * @title top logprobs 值
   * @description OpenAI API 合约中的 top logprobs 值。
   */
  top_logprobs?: any;
  /**
   * @title top p 值
   * @description OpenAI API 合约中的 top p 值。
   */
  top_p?: any;
  /**
   * @title user 值
   * @description OpenAI API 合约中的 user 值。
   */
  user?: string;
}

/**
 * @title Beta Moderation 数据结构
 * @description OpenAI API 合约中的 Beta Moderation 结构定义。
 */
export type BetaModeration = {
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input: any;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: any;
}

/**
 * @title Beta Moderation Config Param 数据结构
 * @description OpenAI API 合约中的 Beta Moderation Config Param 结构定义。
 */
export type BetaModerationConfigParam = {
  /**
   * @title mode 值
   * @description OpenAI API 合约中的 mode 值。
   */
  mode: BetaModerationMode;
}

/**
 * @title Beta Moderation Error Body 数据结构
 * @description OpenAI API 合约中的 Beta Moderation Error Body 结构定义。
 */
export type BetaModerationErrorBody = {
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: string;
  /**
   * @title message 值
   * @description OpenAI API 合约中的 message 值。
   */
  message: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'error';
}

/**
 * @title Beta Moderation Input Type 数据结构
 * @description OpenAI API 合约中的 Beta Moderation Input Type 结构定义。
 */
export type BetaModerationInputType = 'text' | 'image'

/**
 * @title Beta Moderation Mode 数据结构
 * @description OpenAI API 合约中的 Beta Moderation Mode 结构定义。
 */
export type BetaModerationMode = 'score' | 'block'

/**
 * @title Beta Moderation Param 数据结构
 * @description OpenAI API 合约中的 Beta Moderation Param 结构定义。
 */
export type BetaModerationParam = {
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: string;
  /**
   * @title policy 值
   * @description OpenAI API 合约中的 policy 值。
   */
  policy?: any;
}

/**
 * @title Beta Moderation Policy Param 数据结构
 * @description OpenAI API 合约中的 Beta Moderation Policy Param 结构定义。
 */
export type BetaModerationPolicyParam = {
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input?: any;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output?: any;
}

/**
 * @title Beta Moderation Result Body 数据结构
 * @description OpenAI API 合约中的 Beta Moderation Result Body 结构定义。
 */
export type BetaModerationResultBody = {
  /**
   * @title categories 值
   * @description OpenAI API 合约中的 categories 值。
   */
  categories: Record<any, boolean>;
  /**
   * @title category applied input types 值
   * @description OpenAI API 合约中的 category applied input types 值。
   */
  category_applied_input_types: Record<any, Array<BetaModerationInputType>>;
  /**
   * @title category scores 值
   * @description OpenAI API 合约中的 category scores 值。
   */
  category_scores: Record<any, number>;
  /**
   * @title flagged 值
   * @description OpenAI API 合约中的 flagged 值。
   */
  flagged: boolean;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'moderation_result';
}

/**
 * @title Beta Move Param 数据结构
 * @description OpenAI API 合约中的 Beta Move Param 结构定义。
 */
export type BetaMoveParam = {
  /**
   * @title keys 值
   * @description OpenAI API 合约中的 keys 值。
   */
  keys?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'move';
  /**
   * @title x 值
   * @description OpenAI API 合约中的 x 值。
   */
  x: number;
  /**
   * @title y 值
   * @description OpenAI API 合约中的 y 值。
   */
  y: number;
}

/**
 * @title Beta Multi Agent Action 数据结构
 * @description OpenAI API 合约中的 Beta Multi Agent Action 结构定义。
 */
export type BetaMultiAgentAction = 'spawn_agent' | 'interrupt_agent' | 'list_agents' | 'send_message' | 'followup_task' | 'wait_agent'

/**
 * @title Beta Multi Agent Action1 数据结构
 * @description OpenAI API 合约中的 Beta Multi Agent Action1 结构定义。
 */
export type BetaMultiAgentAction1 = 'spawn_agent' | 'interrupt_agent' | 'list_agents' | 'send_message' | 'followup_task' | 'wait_agent'

/**
 * @title Beta Multi Agent Call 数据结构
 * @description OpenAI API 合约中的 Beta Multi Agent Call 结构定义。
 */
export type BetaMultiAgentCall = {
  /**
   * @title action 值
   * @description OpenAI API 合约中的 action 值。
   */
  action: BetaMultiAgentAction;
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: BetaAgentTag;
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: string;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'multi_agent_call';
}

/**
 * @title Beta Multi Agent Call Item Param 数据结构
 * @description OpenAI API 合约中的 Beta Multi Agent Call Item Param 结构定义。
 */
export type BetaMultiAgentCallItemParam = {
  /**
   * @title action 值
   * @description OpenAI API 合约中的 action 值。
   */
  action: BetaMultiAgentAction1;
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: string;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'multi_agent_call';
}

/**
 * @title Beta Multi Agent Call Output 数据结构
 * @description OpenAI API 合约中的 Beta Multi Agent Call Output 结构定义。
 */
export type BetaMultiAgentCallOutput = {
  /**
   * @title action 值
   * @description OpenAI API 合约中的 action 值。
   */
  action: BetaMultiAgentAction;
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: BetaAgentTag;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: Array<BetaOutputTextContent>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'multi_agent_call_output';
}

/**
 * @title Beta Multi Agent Call Output Item Param 数据结构
 * @description OpenAI API 合约中的 Beta Multi Agent Call Output Item Param 结构定义。
 */
export type BetaMultiAgentCallOutputItemParam = {
  /**
   * @title action 值
   * @description OpenAI API 合约中的 action 值。
   */
  action: BetaMultiAgentAction1;
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: Array<BetaOutputTextContentParam>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'multi_agent_call_output';
}

/**
 * @title Beta Multi Agent Param 数据结构
 * @description OpenAI API 合约中的 Beta Multi Agent Param 结构定义。
 */
export type BetaMultiAgentParam = {
  /**
   * @title enabled 值
   * @description OpenAI API 合约中的 enabled 值。
   */
  enabled: boolean;
  /**
   * @title max concurrent subagents 值
   * @description OpenAI API 合约中的 max concurrent subagents 值。
   */
  max_concurrent_subagents?: number;
}

/**
 * @title Beta Namespace Tool Param 数据结构
 * @description OpenAI API 合约中的 Beta Namespace Tool Param 结构定义。
 */
export type BetaNamespaceToolParam = {
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools: Array<any>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'namespace';
}

/**
 * @title Beta Output Audio 数据结构
 * @description OpenAI API 合约中的 Beta Output Audio 结构定义。
 */
export type BetaOutputAudio = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: string;
  /**
   * @title transcript 值
   * @description OpenAI API 合约中的 transcript 值。
   */
  transcript: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'output_audio';
}

/**
 * @title Beta Output Content 数据结构
 * @description OpenAI API 合约中的 Beta Output Content 结构定义。
 */
export type BetaOutputContent = any

/**
 * @title Beta Output Item 数据结构
 * @description OpenAI API 合约中的 Beta Output Item 结构定义。
 */
export type BetaOutputItem = any

/**
 * @title Beta Output Message 数据结构
 * @description OpenAI API 合约中的 Beta Output Message 结构定义。
 */
export type BetaOutputMessage = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: Array<BetaOutputMessageContent>;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title phase 值
   * @description OpenAI API 合约中的 phase 值。
   */
  phase?: any;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'assistant';
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'in_progress' | 'completed' | 'incomplete';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'message';
}

/**
 * @title Beta Output Message Content 数据结构
 * @description OpenAI API 合约中的 Beta Output Message Content 结构定义。
 */
export type BetaOutputMessageContent = any

/**
 * @title Beta Output Text Content 数据结构
 * @description OpenAI API 合约中的 Beta Output Text Content 结构定义。
 */
export type BetaOutputTextContent = {
  /**
   * @title annotations 值
   * @description OpenAI API 合约中的 annotations 值。
   */
  annotations: Array<BetaAnnotation>;
  /**
   * @title logprobs 值
   * @description OpenAI API 合约中的 logprobs 值。
   */
  logprobs: Array<BetaLogProb>;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'output_text';
}

/**
 * @title Beta Output Text Content Param 数据结构
 * @description OpenAI API 合约中的 Beta Output Text Content Param 结构定义。
 */
export type BetaOutputTextContentParam = {
  /**
   * @title annotations 值
   * @description OpenAI API 合约中的 annotations 值。
   */
  annotations?: Array<any>;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'output_text';
}

/**
 * @title Beta Personality Enum 数据结构
 * @description OpenAI API 合约中的 Beta Personality Enum 结构定义。
 */
export type BetaPersonalityEnum = any

/**
 * @title Beta Program 数据结构
 * @description OpenAI API 合约中的 Beta Program 结构定义。
 */
export type BetaProgram = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: BetaAgentTag;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: string;
  /**
   * @title fingerprint 值
   * @description OpenAI API 合约中的 fingerprint 值。
   */
  fingerprint: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'program';
}

/**
 * @title Beta Program Item Param 数据结构
 * @description OpenAI API 合约中的 Beta Program Item Param 结构定义。
 */
export type BetaProgramItemParam = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: string;
  /**
   * @title fingerprint 值
   * @description OpenAI API 合约中的 fingerprint 值。
   */
  fingerprint: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'program';
}

/**
 * @title Beta Program Output 数据结构
 * @description OpenAI API 合约中的 Beta Program Output 结构定义。
 */
export type BetaProgramOutput = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: BetaAgentTag;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title result 值
   * @description OpenAI API 合约中的 result 值。
   */
  result: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: BetaProgramOutputStatus;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'program_output';
}

/**
 * @title Beta Program Output Item Param 数据结构
 * @description OpenAI API 合约中的 Beta Program Output Item Param 结构定义。
 */
export type BetaProgramOutputItemParam = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title result 值
   * @description OpenAI API 合约中的 result 值。
   */
  result: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: BetaProgramOutputItemStatus;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'program_output';
}

/**
 * @title Beta Program Output Item Status 数据结构
 * @description OpenAI API 合约中的 Beta Program Output Item Status 结构定义。
 */
export type BetaProgramOutputItemStatus = 'completed' | 'incomplete'

/**
 * @title Beta Program Output Status 数据结构
 * @description OpenAI API 合约中的 Beta Program Output Status 结构定义。
 */
export type BetaProgramOutputStatus = 'completed' | 'incomplete'

/**
 * @title Beta Program Tool Call Caller 数据结构
 * @description OpenAI API 合约中的 Beta Program Tool Call Caller 结构定义。
 */
export type BetaProgramToolCallCaller = {
  /**
   * @title caller id 值
   * @description OpenAI API 合约中的 caller id 值。
   */
  caller_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'program';
}

/**
 * @title Beta Program Tool Call Caller Param 数据结构
 * @description OpenAI API 合约中的 Beta Program Tool Call Caller Param 结构定义。
 */
export type BetaProgramToolCallCallerParam = {
  /**
   * @title caller id 值
   * @description OpenAI API 合约中的 caller id 值。
   */
  caller_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'program';
}

/**
 * @title Beta Programmatic Tool Calling Param 数据结构
 * @description OpenAI API 合约中的 Beta Programmatic Tool Calling Param 结构定义。
 */
export type BetaProgrammaticToolCallingParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'programmatic_tool_calling';
}

/**
 * @title Beta Prompt 数据结构
 * @description OpenAI API 合约中的 Beta Prompt 结构定义。
 */
export type BetaPrompt = any

/**
 * @title Beta Prompt Cache Breakpoint Config 数据结构
 * @description OpenAI API 合约中的 Beta Prompt Cache Breakpoint Config 结构定义。
 */
export type BetaPromptCacheBreakpointConfig = {
  /**
   * @title mode 值
   * @description OpenAI API 合约中的 mode 值。
   */
  mode: 'explicit';
}

/**
 * @title Beta Prompt Cache Breakpoint Param 数据结构
 * @description OpenAI API 合约中的 Beta Prompt Cache Breakpoint Param 结构定义。
 */
export type BetaPromptCacheBreakpointParam = {
  /**
   * @title mode 值
   * @description OpenAI API 合约中的 mode 值。
   */
  mode: 'explicit';
}

/**
 * @title Beta Prompt Cache Mode Enum 数据结构
 * @description OpenAI API 合约中的 Beta Prompt Cache Mode Enum 结构定义。
 */
export type BetaPromptCacheModeEnum = 'implicit' | 'explicit'

/**
 * @title Beta Prompt Cache Options 数据结构
 * @description OpenAI API 合约中的 Beta Prompt Cache Options 结构定义。
 */
export type BetaPromptCacheOptions = {
  /**
   * @title mode 值
   * @description OpenAI API 合约中的 mode 值。
   */
  mode: BetaPromptCacheModeEnum;
  /**
   * @title ttl 值
   * @description OpenAI API 合约中的 ttl 值。
   */
  ttl: BetaPromptCacheTTLEnum;
}

/**
 * @title Beta Prompt Cache Options Param 数据结构
 * @description OpenAI API 合约中的 Beta Prompt Cache Options Param 结构定义。
 */
export type BetaPromptCacheOptionsParam = {
  /**
   * @title mode 值
   * @description OpenAI API 合约中的 mode 值。
   */
  mode?: BetaPromptCacheModeEnum;
  /**
   * @title ttl 值
   * @description OpenAI API 合约中的 ttl 值。
   */
  ttl?: BetaPromptCacheTTLEnum;
}

/**
 * @title Beta Prompt Cache Retention Enum 数据结构
 * @description OpenAI API 合约中的 Beta Prompt Cache Retention Enum 结构定义。
 */
export type BetaPromptCacheRetentionEnum = 'in_memory' | '24h'

/**
 * @title Beta Prompt Cache TTLEnum 数据结构
 * @description OpenAI API 合约中的 Beta Prompt Cache TTLEnum 结构定义。
 */
export type BetaPromptCacheTTLEnum = '30m'

/**
 * @title Beta Ranker Version Type 数据结构
 * @description OpenAI API 合约中的 Beta Ranker Version Type 结构定义。
 */
export type BetaRankerVersionType = 'auto' | 'default-2024-11-15'

/**
 * @title Beta Ranking Options 数据结构
 * @description OpenAI API 合约中的 Beta Ranking Options 结构定义。
 */
export type BetaRankingOptions = {
  /**
   * @title hybrid search 值
   * @description OpenAI API 合约中的 hybrid search 值。
   */
  hybrid_search?: BetaHybridSearchOptions;
  /**
   * @title ranker 值
   * @description OpenAI API 合约中的 ranker 值。
   */
  ranker?: BetaRankerVersionType;
  /**
   * @title score threshold 值
   * @description OpenAI API 合约中的 score threshold 值。
   */
  score_threshold?: number;
}

/**
 * @title Beta Reasoning 数据结构
 * @description OpenAI API 合约中的 Beta Reasoning 结构定义。
 */
export type BetaReasoning = {
  /**
   * @title context 值
   * @description OpenAI API 合约中的 context 值。
   */
  context?: any;
  /**
   * @title effort 值
   * @description OpenAI API 合约中的 effort 值。
   */
  effort?: BetaReasoningEffort;
  /**
   * @title generate summary 值
   * @description OpenAI API 合约中的 generate summary 值。
   */
  generate_summary?: any;
  /**
   * @title mode 值
   * @description OpenAI API 合约中的 mode 值。
   */
  mode?: BetaReasoningModeEnum;
  /**
   * @title summary 值
   * @description OpenAI API 合约中的 summary 值。
   */
  summary?: any;
}

/**
 * @title Beta Reasoning Effort 数据结构
 * @description OpenAI API 合约中的 Beta Reasoning Effort 结构定义。
 */
export type BetaReasoningEffort = any

/**
 * @title Beta Reasoning Item 数据结构
 * @description OpenAI API 合约中的 Beta Reasoning Item 结构定义。
 */
export type BetaReasoningItem = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content?: Array<BetaReasoningTextContent>;
  /**
   * @title encrypted content 值
   * @description OpenAI API 合约中的 encrypted content 值。
   */
  encrypted_content?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: 'in_progress' | 'completed' | 'incomplete';
  /**
   * @title summary 值
   * @description OpenAI API 合约中的 summary 值。
   */
  summary: Array<BetaSummaryTextContent>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'reasoning';
}

/**
 * @title Beta Reasoning Mode Enum 数据结构
 * @description OpenAI API 合约中的 Beta Reasoning Mode Enum 结构定义。
 */
export type BetaReasoningModeEnum = any

/**
 * @title Beta Reasoning Text Content 数据结构
 * @description OpenAI API 合约中的 Beta Reasoning Text Content 结构定义。
 */
export type BetaReasoningTextContent = {
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'reasoning_text';
}

/**
 * @title Beta Refusal Content 数据结构
 * @description OpenAI API 合约中的 Beta Refusal Content 结构定义。
 */
export type BetaRefusalContent = {
  /**
   * @title refusal 值
   * @description OpenAI API 合约中的 refusal 值。
   */
  refusal: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'refusal';
}

/**
 * @title Beta Response 数据结构
 * @description OpenAI API 合约中的 Beta Response 结构定义。
 */
export type BetaResponse = any

/**
 * @title Beta Response Audio Delta Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Audio Delta Event 结构定义。
 */
export type BetaResponseAudioDeltaEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.audio.delta';
}

/**
 * @title Beta Response Audio Done Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Audio Done Event 结构定义。
 */
export type BetaResponseAudioDoneEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.audio.done';
}

/**
 * @title Beta Response Audio Transcript Delta Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Audio Transcript Delta Event 结构定义。
 */
export type BetaResponseAudioTranscriptDeltaEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.audio.transcript.delta';
}

/**
 * @title Beta Response Audio Transcript Done Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Audio Transcript Done Event 结构定义。
 */
export type BetaResponseAudioTranscriptDoneEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.audio.transcript.done';
}

/**
 * @title Beta Response Code Interpreter Call Code Delta Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Code Interpreter Call Code Delta Event 结构定义。
 */
export type BetaResponseCodeInterpreterCallCodeDeltaEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.code_interpreter_call_code.delta';
}

/**
 * @title Beta Response Code Interpreter Call Code Done Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Code Interpreter Call Code Done Event 结构定义。
 */
export type BetaResponseCodeInterpreterCallCodeDoneEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.code_interpreter_call_code.done';
}

/**
 * @title Beta Response Code Interpreter Call Completed Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Code Interpreter Call Completed Event 结构定义。
 */
export type BetaResponseCodeInterpreterCallCompletedEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.code_interpreter_call.completed';
}

/**
 * @title Beta Response Code Interpreter Call In Progress Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Code Interpreter Call In Progress Event 结构定义。
 */
export type BetaResponseCodeInterpreterCallInProgressEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.code_interpreter_call.in_progress';
}

/**
 * @title Beta Response Code Interpreter Call Interpreting Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Code Interpreter Call Interpreting Event 结构定义。
 */
export type BetaResponseCodeInterpreterCallInterpretingEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.code_interpreter_call.interpreting';
}

/**
 * @title Beta Response Completed Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Completed Event 结构定义。
 */
export type BetaResponseCompletedEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title response 值
   * @description OpenAI API 合约中的 response 值。
   */
  response: BetaResponse;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.completed';
}

/**
 * @title Beta Response Content Part Added Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Content Part Added Event 结构定义。
 */
export type BetaResponseContentPartAddedEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title part 值
   * @description OpenAI API 合约中的 part 值。
   */
  part: BetaOutputContent;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.content_part.added';
}

/**
 * @title Beta Response Content Part Done Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Content Part Done Event 结构定义。
 */
export type BetaResponseContentPartDoneEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title part 值
   * @description OpenAI API 合约中的 part 值。
   */
  part: BetaOutputContent;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.content_part.done';
}

/**
 * @title Beta Response Conversation 数据结构
 * @description OpenAI API 合约中的 Beta Response Conversation 结构定义。
 */
export type BetaResponseConversation = {
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
}

/**
 * @title Beta Response Created Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Created Event 结构定义。
 */
export type BetaResponseCreatedEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title response 值
   * @description OpenAI API 合约中的 response 值。
   */
  response: BetaResponse;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.created';
}

/**
 * @title Beta Response Custom Tool Call Input Delta Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Custom Tool Call Input Delta Event 结构定义。
 */
export type BetaResponseCustomToolCallInputDeltaEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.custom_tool_call_input.delta';
}

/**
 * @title Beta Response Custom Tool Call Input Done Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Custom Tool Call Input Done Event 结构定义。
 */
export type BetaResponseCustomToolCallInputDoneEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.custom_tool_call_input.done';
}

/**
 * @title Beta Response Error 数据结构
 * @description OpenAI API 合约中的 Beta Response Error 结构定义。
 */
export type BetaResponseError = any

/**
 * @title Beta Response Error Code 数据结构
 * @description OpenAI API 合约中的 Beta Response Error Code 结构定义。
 */
export type BetaResponseErrorCode = 'server_error' | 'rate_limit_exceeded' | 'invalid_prompt' | 'data_residency_mismatch' | 'bio_policy' | 'vector_store_timeout' | 'invalid_image' | 'invalid_image_format' | 'invalid_base64_image' | 'invalid_image_url' | 'image_too_large' | 'image_too_small' | 'image_parse_error' | 'image_content_policy_violation' | 'invalid_image_mode' | 'image_file_too_large' | 'unsupported_image_media_type' | 'empty_image_file' | 'failed_to_download_image' | 'image_file_not_found'

/**
 * @title Beta Response Error Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Error Event 结构定义。
 */
export type BetaResponseErrorEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: any;
  /**
   * @title message 值
   * @description OpenAI API 合约中的 message 值。
   */
  message: string;
  /**
   * @title param 值
   * @description OpenAI API 合约中的 param 值。
   */
  param: any;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'error';
}

/**
 * @title Beta Response Failed Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Failed Event 结构定义。
 */
export type BetaResponseFailedEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title response 值
   * @description OpenAI API 合约中的 response 值。
   */
  response: BetaResponse;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.failed';
}

/**
 * @title Beta Response File Search Call Completed Event 数据结构
 * @description OpenAI API 合约中的 Beta Response File Search Call Completed Event 结构定义。
 */
export type BetaResponseFileSearchCallCompletedEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.file_search_call.completed';
}

/**
 * @title Beta Response File Search Call In Progress Event 数据结构
 * @description OpenAI API 合约中的 Beta Response File Search Call In Progress Event 结构定义。
 */
export type BetaResponseFileSearchCallInProgressEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.file_search_call.in_progress';
}

/**
 * @title Beta Response File Search Call Searching Event 数据结构
 * @description OpenAI API 合约中的 Beta Response File Search Call Searching Event 结构定义。
 */
export type BetaResponseFileSearchCallSearchingEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.file_search_call.searching';
}

/**
 * @title Beta Response Format Json Object 数据结构
 * @description OpenAI API 合约中的 Beta Response Format Json Object 结构定义。
 */
export type BetaResponseFormatJsonObject = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'json_object';
}

/**
 * @title Beta Response Format Json Schema Schema 数据结构
 * @description OpenAI API 合约中的 Beta Response Format Json Schema Schema 结构定义。
 */
export type BetaResponseFormatJsonSchemaSchema = Record<any, any>

/**
 * @title Beta Response Format Text 数据结构
 * @description OpenAI API 合约中的 Beta Response Format Text 结构定义。
 */
export type BetaResponseFormatText = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'text';
}

/**
 * @title Beta Response Function Call Arguments Delta Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Function Call Arguments Delta Event 结构定义。
 */
export type BetaResponseFunctionCallArgumentsDeltaEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.function_call_arguments.delta';
}

/**
 * @title Beta Response Function Call Arguments Done Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Function Call Arguments Done Event 结构定义。
 */
export type BetaResponseFunctionCallArgumentsDoneEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.function_call_arguments.done';
}

/**
 * @title Beta Response Image Gen Call Completed Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Image Gen Call Completed Event 结构定义。
 */
export type BetaResponseImageGenCallCompletedEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.image_generation_call.completed';
}

/**
 * @title Beta Response Image Gen Call Generating Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Image Gen Call Generating Event 结构定义。
 */
export type BetaResponseImageGenCallGeneratingEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.image_generation_call.generating';
}

/**
 * @title Beta Response Image Gen Call In Progress Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Image Gen Call In Progress Event 结构定义。
 */
export type BetaResponseImageGenCallInProgressEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.image_generation_call.in_progress';
}

/**
 * @title Beta Response Image Gen Call Partial Image Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Image Gen Call Partial Image Event 结构定义。
 */
export type BetaResponseImageGenCallPartialImageEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title background 值
   * @description OpenAI API 合约中的 background 值。
   */
  background?: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output format 值
   * @description OpenAI API 合约中的 output format 值。
   */
  output_format?: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title partial image b64 值
   * @description OpenAI API 合约中的 partial image b64 值。
   */
  partial_image_b64: string;
  /**
   * @title partial image index 值
   * @description OpenAI API 合约中的 partial image index 值。
   */
  partial_image_index: number;
  /**
   * @title quality 值
   * @description OpenAI API 合约中的 quality 值。
   */
  quality?: string;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title size 值
   * @description OpenAI API 合约中的 size 值。
   */
  size?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.image_generation_call.partial_image';
}

/**
 * @title Beta Response In Progress Event 数据结构
 * @description OpenAI API 合约中的 Beta Response In Progress Event 结构定义。
 */
export type BetaResponseInProgressEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title response 值
   * @description OpenAI API 合约中的 response 值。
   */
  response: BetaResponse;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.in_progress';
}

/**
 * @title Beta Response Incomplete Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Incomplete Event 结构定义。
 */
export type BetaResponseIncompleteEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title response 值
   * @description OpenAI API 合约中的 response 值。
   */
  response: BetaResponse;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.incomplete';
}

/**
 * @title Beta Response Inject Created Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Inject Created Event 结构定义。
 */
export type BetaResponseInjectCreatedEvent = {
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title stream id 值
   * @description OpenAI API 合约中的 stream id 值。
   */
  stream_id?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.inject.created';
}

/**
 * @title Beta Response Inject Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Inject Event 结构定义。
 */
export type BetaResponseInjectEvent = {
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input: Array<BetaInputItem>;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.inject';
}

/**
 * @title Beta Response Inject Failed Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Inject Failed Event 结构定义。
 */
export type BetaResponseInjectFailedEvent = {
  /**
   * @title error 值
   * @description OpenAI API 合约中的 error 值。
   */
  error: {
    /**
     * @title code 值
     * @description OpenAI API 合约中的 code 值。
     */
    code: 'response_already_completed' | 'response_not_found';
    /**
     * @title message 值
     * @description OpenAI API 合约中的 message 值。
     */
    message: string
  };
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input: Array<BetaInputItem>;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title stream id 值
   * @description OpenAI API 合约中的 stream id 值。
   */
  stream_id?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.inject.failed';
}

/**
 * @title Beta Response Item List 数据结构
 * @description OpenAI API 合约中的 Beta Response Item List 结构定义。
 */
export type BetaResponseItemList = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<BetaItemResource>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id: string;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Beta Response Log Prob 数据结构
 * @description OpenAI API 合约中的 Beta Response Log Prob 结构定义。
 */
export type BetaResponseLogProb = {
  /**
   * @title logprob 值
   * @description OpenAI API 合约中的 logprob 值。
   */
  logprob: number;
  /**
   * @title token 值
   * @description OpenAI API 合约中的 token 值。
   */
  token: string;
  /**
   * @title top logprobs 值
   * @description OpenAI API 合约中的 top logprobs 值。
   */
  top_logprobs?: Array<{
    /**
     * @title logprob 值
     * @description OpenAI API 合约中的 logprob 值。
     */
    logprob?: number;
    /**
     * @title token 值
     * @description OpenAI API 合约中的 token 值。
     */
    token?: string
  }>;
}

/**
 * @title Beta Response MCPCall Arguments Delta Event 数据结构
 * @description OpenAI API 合约中的 Beta Response MCPCall Arguments Delta Event 结构定义。
 */
export type BetaResponseMCPCallArgumentsDeltaEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_call_arguments.delta';
}

/**
 * @title Beta Response MCPCall Arguments Done Event 数据结构
 * @description OpenAI API 合约中的 Beta Response MCPCall Arguments Done Event 结构定义。
 */
export type BetaResponseMCPCallArgumentsDoneEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_call_arguments.done';
}

/**
 * @title Beta Response MCPCall Completed Event 数据结构
 * @description OpenAI API 合约中的 Beta Response MCPCall Completed Event 结构定义。
 */
export type BetaResponseMCPCallCompletedEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_call.completed';
}

/**
 * @title Beta Response MCPCall Failed Event 数据结构
 * @description OpenAI API 合约中的 Beta Response MCPCall Failed Event 结构定义。
 */
export type BetaResponseMCPCallFailedEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_call.failed';
}

/**
 * @title Beta Response MCPCall In Progress Event 数据结构
 * @description OpenAI API 合约中的 Beta Response MCPCall In Progress Event 结构定义。
 */
export type BetaResponseMCPCallInProgressEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_call.in_progress';
}

/**
 * @title Beta Response MCPList Tools Completed Event 数据结构
 * @description OpenAI API 合约中的 Beta Response MCPList Tools Completed Event 结构定义。
 */
export type BetaResponseMCPListToolsCompletedEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_list_tools.completed';
}

/**
 * @title Beta Response MCPList Tools Failed Event 数据结构
 * @description OpenAI API 合约中的 Beta Response MCPList Tools Failed Event 结构定义。
 */
export type BetaResponseMCPListToolsFailedEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_list_tools.failed';
}

/**
 * @title Beta Response MCPList Tools In Progress Event 数据结构
 * @description OpenAI API 合约中的 Beta Response MCPList Tools In Progress Event 结构定义。
 */
export type BetaResponseMCPListToolsInProgressEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_list_tools.in_progress';
}

/**
 * @title Beta Response Output Item Added Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Output Item Added Event 结构定义。
 */
export type BetaResponseOutputItemAddedEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title item 值
   * @description OpenAI API 合约中的 item 值。
   */
  item: BetaOutputItem;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_item.added';
}

/**
 * @title Beta Response Output Item Done Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Output Item Done Event 结构定义。
 */
export type BetaResponseOutputItemDoneEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title item 值
   * @description OpenAI API 合约中的 item 值。
   */
  item: BetaOutputItem;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_item.done';
}

/**
 * @title Beta Response Output Text Annotation Added Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Output Text Annotation Added Event 结构定义。
 */
export type BetaResponseOutputTextAnnotationAddedEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title annotation 值
   * @description OpenAI API 合约中的 annotation 值。
   */
  annotation: any;
  /**
   * @title annotation index 值
   * @description OpenAI API 合约中的 annotation index 值。
   */
  annotation_index: number;
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_text.annotation.added';
}

/**
 * @title Beta Response Prompt Variables 数据结构
 * @description OpenAI API 合约中的 Beta Response Prompt Variables 结构定义。
 */
export type BetaResponsePromptVariables = any

/**
 * @title Beta Response Properties 数据结构
 * @description OpenAI API 合约中的 Beta Response Properties 结构定义。
 */
export type BetaResponseProperties = {
  /**
   * @title background 值
   * @description OpenAI API 合约中的 background 值。
   */
  background?: any;
  /**
   * @title max tool calls 值
   * @description OpenAI API 合约中的 max tool calls 值。
   */
  max_tool_calls?: any;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: BetaModelIdsResponses;
  /**
   * @title previous response id 值
   * @description OpenAI API 合约中的 previous response id 值。
   */
  previous_response_id?: any;
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt?: BetaPrompt;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text?: BetaResponseTextParam;
  /**
   * @title tool choice 值
   * @description OpenAI API 合约中的 tool choice 值。
   */
  tool_choice?: BetaToolChoiceParam;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools?: BetaToolsArray;
}

/**
 * @title Beta Response Queued Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Queued Event 结构定义。
 */
export type BetaResponseQueuedEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title response 值
   * @description OpenAI API 合约中的 response 值。
   */
  response: BetaResponse;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.queued';
}

/**
 * @title Beta Response Reasoning Summary Part Added Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Reasoning Summary Part Added Event 结构定义。
 */
export type BetaResponseReasoningSummaryPartAddedEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title part 值
   * @description OpenAI API 合约中的 part 值。
   */
  part: {
    /**
     * @title text 值
     * @description OpenAI API 合约中的 text 值。
     */
    text: string;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type: 'summary_text'
  };
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title summary index 值
   * @description OpenAI API 合约中的 summary index 值。
   */
  summary_index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.reasoning_summary_part.added';
}

/**
 * @title Beta Response Reasoning Summary Part Done Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Reasoning Summary Part Done Event 结构定义。
 */
export type BetaResponseReasoningSummaryPartDoneEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title part 值
   * @description OpenAI API 合约中的 part 值。
   */
  part: {
    /**
     * @title text 值
     * @description OpenAI API 合约中的 text 值。
     */
    text: string;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type: 'summary_text'
  };
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: 'incomplete';
  /**
   * @title summary index 值
   * @description OpenAI API 合约中的 summary index 值。
   */
  summary_index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.reasoning_summary_part.done';
}

/**
 * @title Beta Response Reasoning Summary Text Delta Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Reasoning Summary Text Delta Event 结构定义。
 */
export type BetaResponseReasoningSummaryTextDeltaEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title summary index 值
   * @description OpenAI API 合约中的 summary index 值。
   */
  summary_index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.reasoning_summary_text.delta';
}

/**
 * @title Beta Response Reasoning Summary Text Done Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Reasoning Summary Text Done Event 结构定义。
 */
export type BetaResponseReasoningSummaryTextDoneEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title summary index 值
   * @description OpenAI API 合约中的 summary index 值。
   */
  summary_index: number;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.reasoning_summary_text.done';
}

/**
 * @title Beta Response Reasoning Text Delta Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Reasoning Text Delta Event 结构定义。
 */
export type BetaResponseReasoningTextDeltaEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.reasoning_text.delta';
}

/**
 * @title Beta Response Reasoning Text Done Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Reasoning Text Done Event 结构定义。
 */
export type BetaResponseReasoningTextDoneEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.reasoning_text.done';
}

/**
 * @title Beta Response Refusal Delta Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Refusal Delta Event 结构定义。
 */
export type BetaResponseRefusalDeltaEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.refusal.delta';
}

/**
 * @title Beta Response Refusal Done Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Refusal Done Event 结构定义。
 */
export type BetaResponseRefusalDoneEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title refusal 值
   * @description OpenAI API 合约中的 refusal 值。
   */
  refusal: string;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.refusal.done';
}

/**
 * @title Beta Response Shell Call Command Added Streaming Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Shell Call Command Added Streaming Event 结构定义。
 */
export type BetaResponseShellCallCommandAddedStreamingEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: BetaAgentTag;
  /**
   * @title command 值
   * @description OpenAI API 合约中的 command 值。
   */
  command: string;
  /**
   * @title command index 值
   * @description OpenAI API 合约中的 command index 值。
   */
  command_index: number;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.shell_call_command.added';
}

/**
 * @title Beta Response Shell Call Command Delta Streaming Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Shell Call Command Delta Streaming Event 结构定义。
 */
export type BetaResponseShellCallCommandDeltaStreamingEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: BetaAgentTag;
  /**
   * @title command index 值
   * @description OpenAI API 合约中的 command index 值。
   */
  command_index: number;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title obfuscation 值
   * @description OpenAI API 合约中的 obfuscation 值。
   */
  obfuscation?: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.shell_call_command.delta';
}

/**
 * @title Beta Response Shell Call Command Done Streaming Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Shell Call Command Done Streaming Event 结构定义。
 */
export type BetaResponseShellCallCommandDoneStreamingEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: BetaAgentTag;
  /**
   * @title command 值
   * @description OpenAI API 合约中的 command 值。
   */
  command: string;
  /**
   * @title command index 值
   * @description OpenAI API 合约中的 command index 值。
   */
  command_index: number;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.shell_call_command.done';
}

/**
 * @title Beta Response Shell Call Output Content Delta Streaming Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Shell Call Output Content Delta Streaming Event 结构定义。
 */
export type BetaResponseShellCallOutputContentDeltaStreamingEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: BetaAgentTag;
  /**
   * @title command index 值
   * @description OpenAI API 合约中的 command index 值。
   */
  command_index: number;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: BetaShellCallOutputDelta;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.shell_call_output_content.delta';
}

/**
 * @title Beta Response Shell Call Output Content Done Streaming Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Shell Call Output Content Done Streaming Event 结构定义。
 */
export type BetaResponseShellCallOutputContentDoneStreamingEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: BetaAgentTag;
  /**
   * @title command index 值
   * @description OpenAI API 合约中的 command index 值。
   */
  command_index: number;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: Array<BetaFunctionShellCallOutputContent>;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.shell_call_output_content.done';
}

/**
 * @title Beta Response Stream Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Stream Event 结构定义。
 */
export type BetaResponseStreamEvent = any

/**
 * @title Beta Response Stream Options 数据结构
 * @description OpenAI API 合约中的 Beta Response Stream Options 结构定义。
 */
export type BetaResponseStreamOptions = any

/**
 * @title Beta Response Text Delta Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Text Delta Event 结构定义。
 */
export type BetaResponseTextDeltaEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title logprobs 值
   * @description OpenAI API 合约中的 logprobs 值。
   */
  logprobs: Array<BetaResponseLogProb>;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_text.delta';
}

/**
 * @title Beta Response Text Done Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Text Done Event 结构定义。
 */
export type BetaResponseTextDoneEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title logprobs 值
   * @description OpenAI API 合约中的 logprobs 值。
   */
  logprobs: Array<BetaResponseLogProb>;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_text.done';
}

/**
 * @title Beta Response Text Param 数据结构
 * @description OpenAI API 合约中的 Beta Response Text Param 结构定义。
 */
export type BetaResponseTextParam = {
  /**
   * @title format 值
   * @description OpenAI API 合约中的 format 值。
   */
  format?: BetaTextResponseFormatConfiguration;
  /**
   * @title verbosity 值
   * @description OpenAI API 合约中的 verbosity 值。
   */
  verbosity?: BetaVerbosity;
}

/**
 * @title Beta Response Usage 数据结构
 * @description OpenAI API 合约中的 Beta Response Usage 结构定义。
 */
export type BetaResponseUsage = {
  /**
   * @title input tokens 值
   * @description OpenAI API 合约中的 input tokens 值。
   */
  input_tokens: number;
  /**
   * @title input tokens details 值
   * @description OpenAI API 合约中的 input tokens details 值。
   */
  input_tokens_details: {
    /**
     * @title cache write tokens 值
     * @description OpenAI API 合约中的 cache write tokens 值。
     */
    cache_write_tokens: number;
    /**
     * @title cached tokens 值
     * @description OpenAI API 合约中的 cached tokens 值。
     */
    cached_tokens: number
  };
  /**
   * @title output tokens 值
   * @description OpenAI API 合约中的 output tokens 值。
   */
  output_tokens: number;
  /**
   * @title output tokens details 值
   * @description OpenAI API 合约中的 output tokens details 值。
   */
  output_tokens_details: {
    /**
     * @title reasoning tokens 值
     * @description OpenAI API 合约中的 reasoning tokens 值。
     */
    reasoning_tokens: number
  };
  /**
   * @title total tokens 值
   * @description OpenAI API 合约中的 total tokens 值。
   */
  total_tokens: number;
}

/**
 * @title Beta Response Web Search Call Completed Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Web Search Call Completed Event 结构定义。
 */
export type BetaResponseWebSearchCallCompletedEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.web_search_call.completed';
}

/**
 * @title Beta Response Web Search Call In Progress Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Web Search Call In Progress Event 结构定义。
 */
export type BetaResponseWebSearchCallInProgressEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.web_search_call.in_progress';
}

/**
 * @title Beta Response Web Search Call Searching Event 数据结构
 * @description OpenAI API 合约中的 Beta Response Web Search Call Searching Event 结构定义。
 */
export type BetaResponseWebSearchCallSearchingEvent = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.web_search_call.searching';
}

/**
 * @title Beta Response Ws Error 数据结构
 * @description OpenAI API 合约中的 Beta Response Ws Error 结构定义。
 */
export type BetaResponseWsError = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title error 值
   * @description OpenAI API 合约中的 error 值。
   */
  error: BetaErrorPayload;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number?: number;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: number;
  /**
   * @title stream id 值
   * @description OpenAI API 合约中的 stream id 值。
   */
  stream_id?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'error';
}

/**
 * @title Beta Responses Client Event 数据结构
 * @description OpenAI API 合约中的 Beta Responses Client Event 结构定义。
 */
export type BetaResponsesClientEvent = any

/**
 * @title Beta Responses Client Event Response Create 数据结构
 * @description OpenAI API 合约中的 Beta Responses Client Event Response Create 结构定义。
 */
export type BetaResponsesClientEventResponseCreate = any

/**
 * @title Beta Responses Server Event 数据结构
 * @description OpenAI API 合约中的 Beta Responses Server Event 结构定义。
 */
export type BetaResponsesServerEvent = any

/**
 * @title Beta Responses Web Socket Stream Event 数据结构
 * @description OpenAI API 合约中的 Beta Responses Web Socket Stream Event 结构定义。
 */
export type BetaResponsesWebSocketStreamEvent = any

/**
 * @title Beta Screenshot Param 数据结构
 * @description OpenAI API 合约中的 Beta Screenshot Param 结构定义。
 */
export type BetaScreenshotParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'screenshot';
}

/**
 * @title Beta Scroll Param 数据结构
 * @description OpenAI API 合约中的 Beta Scroll Param 结构定义。
 */
export type BetaScrollParam = {
  /**
   * @title keys 值
   * @description OpenAI API 合约中的 keys 值。
   */
  keys?: any;
  /**
   * @title scroll x 值
   * @description OpenAI API 合约中的 scroll x 值。
   */
  scroll_x: number;
  /**
   * @title scroll y 值
   * @description OpenAI API 合约中的 scroll y 值。
   */
  scroll_y: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'scroll';
  /**
   * @title x 值
   * @description OpenAI API 合约中的 x 值。
   */
  x: number;
  /**
   * @title y 值
   * @description OpenAI API 合约中的 y 值。
   */
  y: number;
}

/**
 * @title Beta Search Content Type 数据结构
 * @description OpenAI API 合约中的 Beta Search Content Type 结构定义。
 */
export type BetaSearchContentType = 'text' | 'image'

/**
 * @title Beta Search Context Size 数据结构
 * @description OpenAI API 合约中的 Beta Search Context Size 结构定义。
 */
export type BetaSearchContextSize = 'low' | 'medium' | 'high'

/**
 * @title Beta Service Tier Enum 数据结构
 * @description OpenAI API 合约中的 Beta Service Tier Enum 结构定义。
 */
export type BetaServiceTierEnum = 'auto' | 'default' | 'fast' | 'flex' | 'priority'

/**
 * @title Beta Service Tier Responses 数据结构
 * @description OpenAI API 合约中的 Beta Service Tier Responses 结构定义。
 */
export type BetaServiceTierResponses = any

/**
 * @title Beta Shell Call Output Delta 数据结构
 * @description OpenAI API 合约中的 Beta Shell Call Output Delta 结构定义。
 */
export type BetaShellCallOutputDelta = {
  /**
   * @title stderr 值
   * @description OpenAI API 合约中的 stderr 值。
   */
  stderr?: string;
  /**
   * @title stdout 值
   * @description OpenAI API 合约中的 stdout 值。
   */
  stdout?: string;
}

/**
 * @title Beta Skill Reference Param 数据结构
 * @description OpenAI API 合约中的 Beta Skill Reference Param 结构定义。
 */
export type BetaSkillReferenceParam = {
  /**
   * @title skill id 值
   * @description OpenAI API 合约中的 skill id 值。
   */
  skill_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'skill_reference';
  /**
   * @title version 值
   * @description OpenAI API 合约中的 version 值。
   */
  version?: string;
}

/**
 * @title Beta Specific Apply Patch Param 数据结构
 * @description OpenAI API 合约中的 Beta Specific Apply Patch Param 结构定义。
 */
export type BetaSpecificApplyPatchParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'apply_patch';
}

/**
 * @title Beta Specific Function Shell Param 数据结构
 * @description OpenAI API 合约中的 Beta Specific Function Shell Param 结构定义。
 */
export type BetaSpecificFunctionShellParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'shell';
}

/**
 * @title Beta Specific Programmatic Tool Calling Param 数据结构
 * @description OpenAI API 合约中的 Beta Specific Programmatic Tool Calling Param 结构定义。
 */
export type BetaSpecificProgrammaticToolCallingParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'programmatic_tool_calling';
}

/**
 * @title Beta Summary Text Content 数据结构
 * @description OpenAI API 合约中的 Beta Summary Text Content 结构定义。
 */
export type BetaSummaryTextContent = {
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'summary_text';
}

/**
 * @title Beta Text Content 数据结构
 * @description OpenAI API 合约中的 Beta Text Content 结构定义。
 */
export type BetaTextContent = {
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'text';
}

/**
 * @title Beta Text Response Format Configuration 数据结构
 * @description OpenAI API 合约中的 Beta Text Response Format Configuration 结构定义。
 */
export type BetaTextResponseFormatConfiguration = any

/**
 * @title Beta Text Response Format Json Schema 数据结构
 * @description OpenAI API 合约中的 Beta Text Response Format Json Schema 结构定义。
 */
export type BetaTextResponseFormatJsonSchema = {
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description?: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title schema 值
   * @description OpenAI API 合约中的 schema 值。
   */
  schema: BetaResponseFormatJsonSchemaSchema;
  /**
   * @title strict 值
   * @description OpenAI API 合约中的 strict 值。
   */
  strict?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'json_schema';
}

/**
 * @title Beta Token Counts Body 数据结构
 * @description OpenAI API 合约中的 Beta Token Counts Body 结构定义。
 */
export type BetaTokenCountsBody = {
  /**
   * @title conversation 值
   * @description OpenAI API 合约中的 conversation 值。
   */
  conversation?: any;
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input?: any;
  /**
   * @title instructions 值
   * @description OpenAI API 合约中的 instructions 值。
   */
  instructions?: any;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title parallel tool calls 值
   * @description OpenAI API 合约中的 parallel tool calls 值。
   */
  parallel_tool_calls?: any;
  /**
   * @title personality 值
   * @description OpenAI API 合约中的 personality 值。
   */
  personality?: BetaPersonalityEnum;
  /**
   * @title previous response id 值
   * @description OpenAI API 合约中的 previous response id 值。
   */
  previous_response_id?: any;
  /**
   * @title reasoning 值
   * @description OpenAI API 合约中的 reasoning 值。
   */
  reasoning?: any;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text?: any;
  /**
   * @title tool choice 值
   * @description OpenAI API 合约中的 tool choice 值。
   */
  tool_choice?: any;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools?: any;
  /**
   * @title truncation 值
   * @description OpenAI API 合约中的 truncation 值。
   */
  truncation?: BetaTruncationEnum;
}

/**
 * @title Beta Token Counts Resource 数据结构
 * @description OpenAI API 合约中的 Beta Token Counts Resource 结构定义。
 */
export type BetaTokenCountsResource = {
  /**
   * @title input tokens 值
   * @description OpenAI API 合约中的 input tokens 值。
   */
  input_tokens: number;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'response.input_tokens';
}

/**
 * @title Beta Tool 数据结构
 * @description OpenAI API 合约中的 Beta Tool 结构定义。
 */
export type BetaTool = any

/**
 * @title Beta Tool Call Caller 数据结构
 * @description OpenAI API 合约中的 Beta Tool Call Caller 结构定义。
 */
export type BetaToolCallCaller = any

/**
 * @title Beta Tool Call Caller Param 数据结构
 * @description OpenAI API 合约中的 Beta Tool Call Caller Param 结构定义。
 */
export type BetaToolCallCallerParam = any

/**
 * @title Beta Tool Choice Allowed 数据结构
 * @description OpenAI API 合约中的 Beta Tool Choice Allowed 结构定义。
 */
export type BetaToolChoiceAllowed = {
  /**
   * @title mode 值
   * @description OpenAI API 合约中的 mode 值。
   */
  mode: 'auto' | 'required';
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools: Array<Record<any, any>>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'allowed_tools';
}

/**
 * @title Beta Tool Choice Custom 数据结构
 * @description OpenAI API 合约中的 Beta Tool Choice Custom 结构定义。
 */
export type BetaToolChoiceCustom = {
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'custom';
}

/**
 * @title Beta Tool Choice Function 数据结构
 * @description OpenAI API 合约中的 Beta Tool Choice Function 结构定义。
 */
export type BetaToolChoiceFunction = {
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'function';
}

/**
 * @title Beta Tool Choice MCP 数据结构
 * @description OpenAI API 合约中的 Beta Tool Choice MCP 结构定义。
 */
export type BetaToolChoiceMCP = {
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: any;
  /**
   * @title server label 值
   * @description OpenAI API 合约中的 server label 值。
   */
  server_label: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp';
}

/**
 * @title Beta Tool Choice Options 数据结构
 * @description OpenAI API 合约中的 Beta Tool Choice Options 结构定义。
 */
export type BetaToolChoiceOptions = 'none' | 'auto' | 'required'

/**
 * @title Beta Tool Choice Param 数据结构
 * @description OpenAI API 合约中的 Beta Tool Choice Param 结构定义。
 */
export type BetaToolChoiceParam = any

/**
 * @title Beta Tool Choice Types 数据结构
 * @description OpenAI API 合约中的 Beta Tool Choice Types 结构定义。
 */
export type BetaToolChoiceTypes = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file_search' | 'web_search_preview' | 'computer' | 'computer_use_preview' | 'computer_use' | 'web_search_preview_2025_03_11' | 'image_generation' | 'code_interpreter';
}

/**
 * @title Beta Tool Search Call 数据结构
 * @description OpenAI API 合约中的 Beta Tool Search Call 结构定义。
 */
export type BetaToolSearchCall = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: BetaAgentTag;
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: any;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: any;
  /**
   * @title created by 值
   * @description OpenAI API 合约中的 created by 值。
   */
  created_by?: string;
  /**
   * @title execution 值
   * @description OpenAI API 合约中的 execution 值。
   */
  execution: BetaToolSearchExecutionType;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: BetaFunctionCallStatus;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'tool_search_call';
}

/**
 * @title Beta Tool Search Call Item Param 数据结构
 * @description OpenAI API 合约中的 Beta Tool Search Call Item Param 结构定义。
 */
export type BetaToolSearchCallItemParam = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: BetaEmptyModelParam;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id?: any;
  /**
   * @title execution 值
   * @description OpenAI API 合约中的 execution 值。
   */
  execution?: BetaToolSearchExecutionType;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'tool_search_call';
}

/**
 * @title Beta Tool Search Execution Type 数据结构
 * @description OpenAI API 合约中的 Beta Tool Search Execution Type 结构定义。
 */
export type BetaToolSearchExecutionType = 'server' | 'client'

/**
 * @title Beta Tool Search Output 数据结构
 * @description OpenAI API 合约中的 Beta Tool Search Output 结构定义。
 */
export type BetaToolSearchOutput = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: BetaAgentTag;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: any;
  /**
   * @title created by 值
   * @description OpenAI API 合约中的 created by 值。
   */
  created_by?: string;
  /**
   * @title execution 值
   * @description OpenAI API 合约中的 execution 值。
   */
  execution: BetaToolSearchExecutionType;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: BetaFunctionCallOutputStatusEnum;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools: Array<BetaTool>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'tool_search_output';
}

/**
 * @title Beta Tool Search Output Item Param 数据结构
 * @description OpenAI API 合约中的 Beta Tool Search Output Item Param 结构定义。
 */
export type BetaToolSearchOutputItemParam = {
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id?: any;
  /**
   * @title execution 值
   * @description OpenAI API 合约中的 execution 值。
   */
  execution?: BetaToolSearchExecutionType;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: any;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools: Array<BetaTool>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'tool_search_output';
}

/**
 * @title Beta Tool Search Tool Param 数据结构
 * @description OpenAI API 合约中的 Beta Tool Search Tool Param 结构定义。
 */
export type BetaToolSearchToolParam = {
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description?: any;
  /**
   * @title execution 值
   * @description OpenAI API 合约中的 execution 值。
   */
  execution?: BetaToolSearchExecutionType;
  /**
   * @title parameters 值
   * @description OpenAI API 合约中的 parameters 值。
   */
  parameters?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'tool_search';
}

/**
 * @title Beta Tools Array 数据结构
 * @description OpenAI API 合约中的 Beta Tools Array 结构定义。
 */
export type BetaToolsArray = Array<BetaTool>

/**
 * @title Beta Top Log Prob 数据结构
 * @description OpenAI API 合约中的 Beta Top Log Prob 结构定义。
 */
export type BetaTopLogProb = {
  /**
   * @title bytes 值
   * @description OpenAI API 合约中的 bytes 值。
   */
  bytes: Array<number>;
  /**
   * @title logprob 值
   * @description OpenAI API 合约中的 logprob 值。
   */
  logprob: number;
  /**
   * @title token 值
   * @description OpenAI API 合约中的 token 值。
   */
  token: string;
}

/**
 * @title Beta Truncation Enum 数据结构
 * @description OpenAI API 合约中的 Beta Truncation Enum 结构定义。
 */
export type BetaTruncationEnum = 'auto' | 'disabled'

/**
 * @title Beta Type Param 数据结构
 * @description OpenAI API 合约中的 Beta Type Param 结构定义。
 */
export type BetaTypeParam = {
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'type';
}

/**
 * @title Beta Url Citation Body 数据结构
 * @description OpenAI API 合约中的 Beta Url Citation Body 结构定义。
 */
export type BetaUrlCitationBody = {
  /**
   * @title end index 值
   * @description OpenAI API 合约中的 end index 值。
   */
  end_index: number;
  /**
   * @title start index 值
   * @description OpenAI API 合约中的 start index 值。
   */
  start_index: number;
  /**
   * @title title 值
   * @description OpenAI API 合约中的 title 值。
   */
  title: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'url_citation';
  /**
   * @title url 值
   * @description OpenAI API 合约中的 url 值。
   */
  url: string;
}

/**
 * @title Beta Url Citation Param 数据结构
 * @description OpenAI API 合约中的 Beta Url Citation Param 结构定义。
 */
export type BetaUrlCitationParam = {
  /**
   * @title end index 值
   * @description OpenAI API 合约中的 end index 值。
   */
  end_index: number;
  /**
   * @title start index 值
   * @description OpenAI API 合约中的 start index 值。
   */
  start_index: number;
  /**
   * @title title 值
   * @description OpenAI API 合约中的 title 值。
   */
  title: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'url_citation';
  /**
   * @title url 值
   * @description OpenAI API 合约中的 url 值。
   */
  url: string;
}

/**
 * @title Beta Vector Store File Attributes 数据结构
 * @description OpenAI API 合约中的 Beta Vector Store File Attributes 结构定义。
 */
export type BetaVectorStoreFileAttributes = any

/**
 * @title Beta Verbosity 数据结构
 * @description OpenAI API 合约中的 Beta Verbosity 结构定义。
 */
export type BetaVerbosity = any

/**
 * @title Beta Wait Param 数据结构
 * @description OpenAI API 合约中的 Beta Wait Param 结构定义。
 */
export type BetaWaitParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'wait';
}

/**
 * @title Beta Web Search Action Find 数据结构
 * @description OpenAI API 合约中的 Beta Web Search Action Find 结构定义。
 */
export type BetaWebSearchActionFind = {
  /**
   * @title pattern 值
   * @description OpenAI API 合约中的 pattern 值。
   */
  pattern: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'find_in_page';
  /**
   * @title url 值
   * @description OpenAI API 合约中的 url 值。
   */
  url: string;
}

/**
 * @title Beta Web Search Action Open Page 数据结构
 * @description OpenAI API 合约中的 Beta Web Search Action Open Page 结构定义。
 */
export type BetaWebSearchActionOpenPage = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'open_page';
  /**
   * @title url 值
   * @description OpenAI API 合约中的 url 值。
   */
  url?: any;
}

/**
 * @title Beta Web Search Action Search 数据结构
 * @description OpenAI API 合约中的 Beta Web Search Action Search 结构定义。
 */
export type BetaWebSearchActionSearch = {
  /**
   * @title queries 值
   * @description OpenAI API 合约中的 queries 值。
   */
  queries?: Array<string>;
  /**
   * @title query 值
   * @description OpenAI API 合约中的 query 值。
   */
  query?: string;
  /**
   * @title sources 值
   * @description OpenAI API 合约中的 sources 值。
   */
  sources?: Array<{
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type: 'url';
    /**
     * @title url 值
     * @description OpenAI API 合约中的 url 值。
     */
    url: string
  }>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'search';
}

/**
 * @title Beta Web Search Approximate Location 数据结构
 * @description OpenAI API 合约中的 Beta Web Search Approximate Location 结构定义。
 */
export type BetaWebSearchApproximateLocation = any

/**
 * @title Beta Web Search Preview Tool 数据结构
 * @description OpenAI API 合约中的 Beta Web Search Preview Tool 结构定义。
 */
export type BetaWebSearchPreviewTool = {
  /**
   * @title search content types 值
   * @description OpenAI API 合约中的 search content types 值。
   */
  search_content_types?: Array<BetaSearchContentType>;
  /**
   * @title search context size 值
   * @description OpenAI API 合约中的 search context size 值。
   */
  search_context_size?: BetaSearchContextSize;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'web_search_preview' | 'web_search_preview_2025_03_11';
  /**
   * @title user location 值
   * @description OpenAI API 合约中的 user location 值。
   */
  user_location?: any;
}

/**
 * @title Beta Web Search Tool 数据结构
 * @description OpenAI API 合约中的 Beta Web Search Tool 结构定义。
 */
export type BetaWebSearchTool = {
  /**
   * @title external web access 值
   * @description OpenAI API 合约中的 external web access 值。
   */
  external_web_access?: boolean;
  /**
   * @title filters 值
   * @description OpenAI API 合约中的 filters 值。
   */
  filters?: any;
  /**
   * @title search context size 值
   * @description OpenAI API 合约中的 search context size 值。
   */
  search_context_size?: 'low' | 'medium' | 'high';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'web_search' | 'web_search_2025_08_26';
  /**
   * @title user location 值
   * @description OpenAI API 合约中的 user location 值。
   */
  user_location?: BetaWebSearchApproximateLocation;
}

/**
 * @title Beta Web Search Tool Call 数据结构
 * @description OpenAI API 合约中的 Beta Web Search Tool Call 结构定义。
 */
export type BetaWebSearchToolCall = {
  /**
   * @title action 值
   * @description OpenAI API 合约中的 action 值。
   */
  action: any;
  /**
   * @title agent 值
   * @description OpenAI API 合约中的 agent 值。
   */
  agent?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'in_progress' | 'searching' | 'completed' | 'failed';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'web_search_call';
}

/**
 * @title Beta Agent Tag Param 数据结构
 * @description OpenAI API 合约中的 Beta Agent Tag Param 结构定义。
 */
export type Beta_AgentTagParam = {
  /**
   * @title agent name 值
   * @description OpenAI API 合约中的 agent name 值。
   */
  agent_name: string;
}

/**
 * @title C2 PAProvenance Result 数据结构
 * @description OpenAI API 合约中的 C2 PAProvenance Result 结构定义。
 */
export type C2PAProvenanceResult = {
  /**
   * @title generated at 值
   * @description OpenAI API 合约中的 generated at 值。
   */
  generated_at: any;
  /**
   * @title issuer 值
   * @description OpenAI API 合约中的 issuer 值。
   */
  issuer: any;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: any;
  /**
   * @title outcome 值
   * @description OpenAI API 合约中的 outcome 值。
   */
  outcome: ProvenanceDetectionResultApi;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'c2pa';
  /**
   * @title validation state 值
   * @description OpenAI API 合约中的 validation state 值。
   */
  validation_state: C2PAValidationStateApi;
}

/**
 * @title C2 PAValidation State Api 数据结构
 * @description OpenAI API 合约中的 C2 PAValidation State Api 结构定义。
 */
export type C2PAValidationStateApi = 'trusted' | 'valid' | 'invalid' | 'not_present'

/**
 * @title Callable Tool Allowed Caller 数据结构
 * @description OpenAI API 合约中的 Callable Tool Allowed Caller 结构定义。
 */
export type CallableToolAllowedCaller = 'direct' | 'programmatic'

/**
 * @title Certificate 数据结构
 * @description OpenAI API 合约中的 Certificate 结构定义。
 */
export type Certificate = {
  /**
   * @title active 值
   * @description OpenAI API 合约中的 active 值。
   */
  active?: boolean;
  /**
   * @title certificate details 值
   * @description OpenAI API 合约中的 certificate details 值。
   */
  certificate_details: {
    /**
     * @title content 值
     * @description OpenAI API 合约中的 content 值。
     */
    content?: string;
    /**
     * @title expires at 值
     * @description OpenAI API 合约中的 expires at 值。
     */
    expires_at?: number;
    /**
     * @title valid at 值
     * @description OpenAI API 合约中的 valid at 值。
     */
    valid_at?: number
  };
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'certificate' | 'organization.certificate' | 'organization.project.certificate';
}

/**
 * @title Chat Completion Allowed Tools 数据结构
 * @description OpenAI API 合约中的 Chat Completion Allowed Tools 结构定义。
 */
export type ChatCompletionAllowedTools = {
  /**
   * @title mode 值
   * @description OpenAI API 合约中的 mode 值。
   */
  mode: 'auto' | 'required';
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools: Array<Record<any, any>>;
}

/**
 * @title Chat Completion Allowed Tools Choice 数据结构
 * @description OpenAI API 合约中的 Chat Completion Allowed Tools Choice 结构定义。
 */
export type ChatCompletionAllowedToolsChoice = {
  /**
   * @title allowed tools 值
   * @description OpenAI API 合约中的 allowed tools 值。
   */
  allowed_tools: ChatCompletionAllowedTools;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'allowed_tools';
}

/**
 * @title Chat Completion Deleted 数据结构
 * @description OpenAI API 合约中的 Chat Completion Deleted 结构定义。
 */
export type ChatCompletionDeleted = {
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
  object: 'chat.completion.deleted';
}

/**
 * @title Chat Completion Function Call Option 数据结构
 * @description OpenAI API 合约中的 Chat Completion Function Call Option 结构定义。
 */
export type ChatCompletionFunctionCallOption = {
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
}

/**
 * @title Chat Completion Functions 数据结构
 * @description OpenAI API 合约中的 Chat Completion Functions 结构定义。
 */
export type ChatCompletionFunctions = {
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description?: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title parameters 值
   * @description OpenAI API 合约中的 parameters 值。
   */
  parameters?: FunctionParameters;
}

/**
 * @title Chat Completion List 数据结构
 * @description OpenAI API 合约中的 Chat Completion List 结构定义。
 */
export type ChatCompletionList = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<CreateChatCompletionResponse>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id: string;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Chat Completion Message Custom Tool Call 数据结构
 * @description OpenAI API 合约中的 Chat Completion Message Custom Tool Call 结构定义。
 */
export type ChatCompletionMessageCustomToolCall = {
  /**
   * @title custom 值
   * @description OpenAI API 合约中的 custom 值。
   */
  custom: {
    /**
     * @title input 值
     * @description OpenAI API 合约中的 input 值。
     */
    input: string;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name: string
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'custom';
}

/**
 * @title Chat Completion Message List 数据结构
 * @description OpenAI API 合约中的 Chat Completion Message List 结构定义。
 */
export type ChatCompletionMessageList = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<any>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id: string;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Chat Completion Message Tool Call 数据结构
 * @description OpenAI API 合约中的 Chat Completion Message Tool Call 结构定义。
 */
export type ChatCompletionMessageToolCall = {
  /**
   * @title function 值
   * @description OpenAI API 合约中的 function 值。
   */
  function: {
    /**
     * @title arguments 值
     * @description OpenAI API 合约中的 arguments 值。
     */
    arguments: string;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name: string
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'function';
}

/**
 * @title Chat Completion Message Tool Call Chunk 数据结构
 * @description OpenAI API 合约中的 Chat Completion Message Tool Call Chunk 结构定义。
 */
export type ChatCompletionMessageToolCallChunk = {
  /**
   * @title function 值
   * @description OpenAI API 合约中的 function 值。
   */
  function?: {
    /**
     * @title arguments 值
     * @description OpenAI API 合约中的 arguments 值。
     */
    arguments?: string;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name?: string
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title index 值
   * @description OpenAI API 合约中的 index 值。
   */
  index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type?: 'function';
}

/**
 * @title Chat Completion Message Tool Calls 数据结构
 * @description OpenAI API 合约中的 Chat Completion Message Tool Calls 结构定义。
 */
export type ChatCompletionMessageToolCalls = Array<any>

/**
 * @title Chat Completion Modalities 数据结构
 * @description OpenAI API 合约中的 Chat Completion Modalities 结构定义。
 */
export type ChatCompletionModalities = any

/**
 * @title Chat Completion Moderation 数据结构
 * @description OpenAI API 合约中的 Chat Completion Moderation 结构定义。
 */
export type ChatCompletionModeration = {
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input: any;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: any;
}

/**
 * @title Chat Completion Moderation Error 数据结构
 * @description OpenAI API 合约中的 Chat Completion Moderation Error 结构定义。
 */
export type ChatCompletionModerationError = {
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: string;
  /**
   * @title message 值
   * @description OpenAI API 合约中的 message 值。
   */
  message: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'error';
}

/**
 * @title Chat Completion Moderation Results 数据结构
 * @description OpenAI API 合约中的 Chat Completion Moderation Results 结构定义。
 */
export type ChatCompletionModerationResults = {
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: string;
  /**
   * @title results 值
   * @description OpenAI API 合约中的 results 值。
   */
  results: Array<ModerationResultBody>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'moderation_results';
}

/**
 * @title Chat Completion Named Tool Choice 数据结构
 * @description OpenAI API 合约中的 Chat Completion Named Tool Choice 结构定义。
 */
export type ChatCompletionNamedToolChoice = {
  /**
   * @title function 值
   * @description OpenAI API 合约中的 function 值。
   */
  function: {
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name: string
  };
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'function';
}

/**
 * @title Chat Completion Named Tool Choice Custom 数据结构
 * @description OpenAI API 合约中的 Chat Completion Named Tool Choice Custom 结构定义。
 */
export type ChatCompletionNamedToolChoiceCustom = {
  /**
   * @title custom 值
   * @description OpenAI API 合约中的 custom 值。
   */
  custom: {
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name: string
  };
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'custom';
}

/**
 * @title Chat Completion Request Assistant Message 数据结构
 * @description OpenAI API 合约中的 Chat Completion Request Assistant Message 结构定义。
 */
export type ChatCompletionRequestAssistantMessage = {
  /**
   * @title audio 值
   * @description OpenAI API 合约中的 audio 值。
   */
  audio?: any;
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content?: any;
  /**
   * @title function call 值
   * @description OpenAI API 合约中的 function call 值。
   */
  function_call?: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: string;
  /**
   * @title refusal 值
   * @description OpenAI API 合约中的 refusal 值。
   */
  refusal?: any;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'assistant';
  /**
   * @title tool calls 值
   * @description OpenAI API 合约中的 tool calls 值。
   */
  tool_calls?: ChatCompletionMessageToolCalls;
}

/**
 * @title Chat Completion Request Assistant Message Content Part 数据结构
 * @description OpenAI API 合约中的 Chat Completion Request Assistant Message Content Part 结构定义。
 */
export type ChatCompletionRequestAssistantMessageContentPart = any

/**
 * @title Chat Completion Request Developer Message 数据结构
 * @description OpenAI API 合约中的 Chat Completion Request Developer Message 结构定义。
 */
export type ChatCompletionRequestDeveloperMessage = {
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: string;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'developer';
}

/**
 * @title Chat Completion Request Function Message 数据结构
 * @description OpenAI API 合约中的 Chat Completion Request Function Message 结构定义。
 */
export type ChatCompletionRequestFunctionMessage = {
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'function';
}

/**
 * @title Chat Completion Request Message 数据结构
 * @description OpenAI API 合约中的 Chat Completion Request Message 结构定义。
 */
export type ChatCompletionRequestMessage = any

/**
 * @title Chat Completion Request Message Content Part Audio 数据结构
 * @description OpenAI API 合约中的 Chat Completion Request Message Content Part Audio 结构定义。
 */
export type ChatCompletionRequestMessageContentPartAudio = {
  /**
   * @title input audio 值
   * @description OpenAI API 合约中的 input audio 值。
   */
  input_audio: {
    /**
     * @title data 值
     * @description OpenAI API 合约中的 data 值。
     */
    data: string;
    /**
     * @title format 值
     * @description OpenAI API 合约中的 format 值。
     */
    format: 'wav' | 'mp3'
  };
  /**
   * @title prompt cache breakpoint 值
   * @description OpenAI API 合约中的 prompt cache breakpoint 值。
   */
  prompt_cache_breakpoint?: PromptCacheBreakpointParam;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_audio';
}

/**
 * @title Chat Completion Request Message Content Part File 数据结构
 * @description OpenAI API 合约中的 Chat Completion Request Message Content Part File 结构定义。
 */
export type ChatCompletionRequestMessageContentPartFile = {
  /**
   * @title file 值
   * @description OpenAI API 合约中的 file 值。
   */
  file: {
    /**
     * @title file data 值
     * @description OpenAI API 合约中的 file data 值。
     */
    file_data?: string;
    /**
     * @title file id 值
     * @description OpenAI API 合约中的 file id 值。
     */
    file_id?: string;
    /**
     * @title filename 值
     * @description OpenAI API 合约中的 filename 值。
     */
    filename?: string
  };
  /**
   * @title prompt cache breakpoint 值
   * @description OpenAI API 合约中的 prompt cache breakpoint 值。
   */
  prompt_cache_breakpoint?: PromptCacheBreakpointParam;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file';
}

/**
 * @title Chat Completion Request Message Content Part Image 数据结构
 * @description OpenAI API 合约中的 Chat Completion Request Message Content Part Image 结构定义。
 */
export type ChatCompletionRequestMessageContentPartImage = {
  /**
   * @title image url 值
   * @description OpenAI API 合约中的 image url 值。
   */
  image_url: {
    /**
     * @title detail 值
     * @description OpenAI API 合约中的 detail 值。
     */
    detail?: 'auto' | 'low' | 'high';
    /**
     * @title url 值
     * @description OpenAI API 合约中的 url 值。
     */
    url: string
  };
  /**
   * @title prompt cache breakpoint 值
   * @description OpenAI API 合约中的 prompt cache breakpoint 值。
   */
  prompt_cache_breakpoint?: PromptCacheBreakpointParam;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'image_url';
}

/**
 * @title Chat Completion Request Message Content Part Refusal 数据结构
 * @description OpenAI API 合约中的 Chat Completion Request Message Content Part Refusal 结构定义。
 */
export type ChatCompletionRequestMessageContentPartRefusal = {
  /**
   * @title refusal 值
   * @description OpenAI API 合约中的 refusal 值。
   */
  refusal: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'refusal';
}

/**
 * @title Chat Completion Request Message Content Part Text 数据结构
 * @description OpenAI API 合约中的 Chat Completion Request Message Content Part Text 结构定义。
 */
export type ChatCompletionRequestMessageContentPartText = {
  /**
   * @title prompt cache breakpoint 值
   * @description OpenAI API 合约中的 prompt cache breakpoint 值。
   */
  prompt_cache_breakpoint?: PromptCacheBreakpointParam;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'text';
}

/**
 * @title Chat Completion Request System Message 数据结构
 * @description OpenAI API 合约中的 Chat Completion Request System Message 结构定义。
 */
export type ChatCompletionRequestSystemMessage = {
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: string;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'system';
}

/**
 * @title Chat Completion Request System Message Content Part 数据结构
 * @description OpenAI API 合约中的 Chat Completion Request System Message Content Part 结构定义。
 */
export type ChatCompletionRequestSystemMessageContentPart = any

/**
 * @title Chat Completion Request Tool Message 数据结构
 * @description OpenAI API 合约中的 Chat Completion Request Tool Message 结构定义。
 */
export type ChatCompletionRequestToolMessage = {
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: any;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'tool';
  /**
   * @title tool call id 值
   * @description OpenAI API 合约中的 tool call id 值。
   */
  tool_call_id: string;
}

/**
 * @title Chat Completion Request Tool Message Content Part 数据结构
 * @description OpenAI API 合约中的 Chat Completion Request Tool Message Content Part 结构定义。
 */
export type ChatCompletionRequestToolMessageContentPart = any

/**
 * @title Chat Completion Request User Message 数据结构
 * @description OpenAI API 合约中的 Chat Completion Request User Message 结构定义。
 */
export type ChatCompletionRequestUserMessage = {
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: string;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'user';
}

/**
 * @title Chat Completion Request User Message Content Part 数据结构
 * @description OpenAI API 合约中的 Chat Completion Request User Message Content Part 结构定义。
 */
export type ChatCompletionRequestUserMessageContentPart = any

/**
 * @title Chat Completion Response Message 数据结构
 * @description OpenAI API 合约中的 Chat Completion Response Message 结构定义。
 */
export type ChatCompletionResponseMessage = {
  /**
   * @title annotations 值
   * @description OpenAI API 合约中的 annotations 值。
   */
  annotations?: Array<{
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type: 'url_citation';
    /**
     * @title url citation 值
     * @description OpenAI API 合约中的 url citation 值。
     */
    url_citation: {
      /**
       * @title end index 值
       * @description OpenAI API 合约中的 end index 值。
       */
      end_index: number;
      /**
       * @title start index 值
       * @description OpenAI API 合约中的 start index 值。
       */
      start_index: number;
      /**
       * @title title 值
       * @description OpenAI API 合约中的 title 值。
       */
      title: string;
      /**
       * @title url 值
       * @description OpenAI API 合约中的 url 值。
       */
      url: string
    }
  }>;
  /**
   * @title audio 值
   * @description OpenAI API 合约中的 audio 值。
   */
  audio?: any;
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: any;
  /**
   * @title function call 值
   * @description OpenAI API 合约中的 function call 值。
   */
  function_call?: {
    /**
     * @title arguments 值
     * @description OpenAI API 合约中的 arguments 值。
     */
    arguments: string;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name: string
  };
  /**
   * @title refusal 值
   * @description OpenAI API 合约中的 refusal 值。
   */
  refusal: any;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'assistant';
  /**
   * @title tool calls 值
   * @description OpenAI API 合约中的 tool calls 值。
   */
  tool_calls?: ChatCompletionMessageToolCalls;
}

/**
 * @title Chat Completion Role 数据结构
 * @description OpenAI API 合约中的 Chat Completion Role 结构定义。
 */
export type ChatCompletionRole = 'developer' | 'system' | 'user' | 'assistant' | 'tool' | 'function'

/**
 * @title Chat Completion Stream Options 数据结构
 * @description OpenAI API 合约中的 Chat Completion Stream Options 结构定义。
 */
export type ChatCompletionStreamOptions = any

/**
 * @title Chat Completion Stream Response Delta 数据结构
 * @description OpenAI API 合约中的 Chat Completion Stream Response Delta 结构定义。
 */
export type ChatCompletionStreamResponseDelta = {
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content?: any;
  /**
   * @title function call 值
   * @description OpenAI API 合约中的 function call 值。
   */
  function_call?: {
    /**
     * @title arguments 值
     * @description OpenAI API 合约中的 arguments 值。
     */
    arguments?: string;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name?: string
  };
  /**
   * @title refusal 值
   * @description OpenAI API 合约中的 refusal 值。
   */
  refusal?: any;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role?: 'developer' | 'system' | 'user' | 'assistant' | 'tool';
  /**
   * @title tool calls 值
   * @description OpenAI API 合约中的 tool calls 值。
   */
  tool_calls?: Array<ChatCompletionMessageToolCallChunk>;
}

/**
 * @title Chat Completion Token Logprob 数据结构
 * @description OpenAI API 合约中的 Chat Completion Token Logprob 结构定义。
 */
export type ChatCompletionTokenLogprob = {
  /**
   * @title bytes 值
   * @description OpenAI API 合约中的 bytes 值。
   */
  bytes: any;
  /**
   * @title logprob 值
   * @description OpenAI API 合约中的 logprob 值。
   */
  logprob: number;
  /**
   * @title token 值
   * @description OpenAI API 合约中的 token 值。
   */
  token: string;
  /**
   * @title top logprobs 值
   * @description OpenAI API 合约中的 top logprobs 值。
   */
  top_logprobs: Array<{
    /**
     * @title bytes 值
     * @description OpenAI API 合约中的 bytes 值。
     */
    bytes: any;
    /**
     * @title logprob 值
     * @description OpenAI API 合约中的 logprob 值。
     */
    logprob: number;
    /**
     * @title token 值
     * @description OpenAI API 合约中的 token 值。
     */
    token: string
  }>;
}

/**
 * @title Chat Completion Tool 数据结构
 * @description OpenAI API 合约中的 Chat Completion Tool 结构定义。
 */
export type ChatCompletionTool = {
  /**
   * @title function 值
   * @description OpenAI API 合约中的 function 值。
   */
  function: FunctionObject;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'function';
}

/**
 * @title Chat Completion Tool Choice Option 数据结构
 * @description OpenAI API 合约中的 Chat Completion Tool Choice Option 结构定义。
 */
export type ChatCompletionToolChoiceOption = any

/**
 * @title Chat Session Automatic Thread Titling 数据结构
 * @description OpenAI API 合约中的 Chat Session Automatic Thread Titling 结构定义。
 */
export type ChatSessionAutomaticThreadTitling = {
  /**
   * @title enabled 值
   * @description OpenAI API 合约中的 enabled 值。
   */
  enabled: boolean;
}

/**
 * @title Chat Session Chatkit Configuration 数据结构
 * @description OpenAI API 合约中的 Chat Session Chatkit Configuration 结构定义。
 */
export type ChatSessionChatkitConfiguration = {
  /**
   * @title automatic thread titling 值
   * @description OpenAI API 合约中的 automatic thread titling 值。
   */
  automatic_thread_titling: ChatSessionAutomaticThreadTitling;
  /**
   * @title file upload 值
   * @description OpenAI API 合约中的 file upload 值。
   */
  file_upload: ChatSessionFileUpload;
  /**
   * @title history 值
   * @description OpenAI API 合约中的 history 值。
   */
  history: ChatSessionHistory;
}

/**
 * @title Chat Session File Upload 数据结构
 * @description OpenAI API 合约中的 Chat Session File Upload 结构定义。
 */
export type ChatSessionFileUpload = {
  /**
   * @title enabled 值
   * @description OpenAI API 合约中的 enabled 值。
   */
  enabled: boolean;
  /**
   * @title max file size 值
   * @description OpenAI API 合约中的 max file size 值。
   */
  max_file_size: any;
  /**
   * @title max files 值
   * @description OpenAI API 合约中的 max files 值。
   */
  max_files: any;
}

/**
 * @title Chat Session History 数据结构
 * @description OpenAI API 合约中的 Chat Session History 结构定义。
 */
export type ChatSessionHistory = {
  /**
   * @title enabled 值
   * @description OpenAI API 合约中的 enabled 值。
   */
  enabled: boolean;
  /**
   * @title recent threads 值
   * @description OpenAI API 合约中的 recent threads 值。
   */
  recent_threads: any;
}

/**
 * @title Chat Session Rate Limits 数据结构
 * @description OpenAI API 合约中的 Chat Session Rate Limits 结构定义。
 */
export type ChatSessionRateLimits = {
  /**
   * @title max requests per 1 minute 值
   * @description OpenAI API 合约中的 max requests per 1 minute 值。
   */
  max_requests_per_1_minute: number;
}

/**
 * @title Chat Session Resource 数据结构
 * @description OpenAI API 合约中的 Chat Session Resource 结构定义。
 */
export type ChatSessionResource = {
  /**
   * @title chatkit configuration 值
   * @description OpenAI API 合约中的 chatkit configuration 值。
   */
  chatkit_configuration: ChatSessionChatkitConfiguration;
  /**
   * @title client secret 值
   * @description OpenAI API 合约中的 client secret 值。
   */
  client_secret: string;
  /**
   * @title expires at 值
   * @description OpenAI API 合约中的 expires at 值。
   */
  expires_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title max requests per 1 minute 值
   * @description OpenAI API 合约中的 max requests per 1 minute 值。
   */
  max_requests_per_1_minute: number;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'chatkit.session';
  /**
   * @title rate limits 值
   * @description OpenAI API 合约中的 rate limits 值。
   */
  rate_limits: ChatSessionRateLimits;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: ChatSessionStatus;
  /**
   * @title user 值
   * @description OpenAI API 合约中的 user 值。
   */
  user: string;
  /**
   * @title workflow 值
   * @description OpenAI API 合约中的 workflow 值。
   */
  workflow: ChatkitWorkflow;
}

/**
 * @title Chat Session Status 数据结构
 * @description OpenAI API 合约中的 Chat Session Status 结构定义。
 */
export type ChatSessionStatus = 'active' | 'expired' | 'cancelled'

/**
 * @title Chatkit Configuration Param 数据结构
 * @description OpenAI API 合约中的 Chatkit Configuration Param 结构定义。
 */
export type ChatkitConfigurationParam = {
  /**
   * @title automatic thread titling 值
   * @description OpenAI API 合约中的 automatic thread titling 值。
   */
  automatic_thread_titling?: AutomaticThreadTitlingParam;
  /**
   * @title file upload 值
   * @description OpenAI API 合约中的 file upload 值。
   */
  file_upload?: FileUploadParam;
  /**
   * @title history 值
   * @description OpenAI API 合约中的 history 值。
   */
  history?: HistoryParam;
}

/**
 * @title Chatkit Workflow 数据结构
 * @description OpenAI API 合约中的 Chatkit Workflow 结构定义。
 */
export type ChatkitWorkflow = {
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title state variables 值
   * @description OpenAI API 合约中的 state variables 值。
   */
  state_variables: any;
  /**
   * @title tracing 值
   * @description OpenAI API 合约中的 tracing 值。
   */
  tracing: ChatkitWorkflowTracing;
  /**
   * @title version 值
   * @description OpenAI API 合约中的 version 值。
   */
  version: any;
}

/**
 * @title Chatkit Workflow Tracing 数据结构
 * @description OpenAI API 合约中的 Chatkit Workflow Tracing 结构定义。
 */
export type ChatkitWorkflowTracing = {
  /**
   * @title enabled 值
   * @description OpenAI API 合约中的 enabled 值。
   */
  enabled: boolean;
}

/**
 * @title Chunking Strategy Request Param 数据结构
 * @description OpenAI API 合约中的 Chunking Strategy Request Param 结构定义。
 */
export type ChunkingStrategyRequestParam = any

/**
 * @title Click Button Type 数据结构
 * @description OpenAI API 合约中的 Click Button Type 结构定义。
 */
export type ClickButtonType = 'left' | 'right' | 'wheel' | 'back' | 'forward'

/**
 * @title Click Param 数据结构
 * @description OpenAI API 合约中的 Click Param 结构定义。
 */
export type ClickParam = {
  /**
   * @title button 值
   * @description OpenAI API 合约中的 button 值。
   */
  button: ClickButtonType;
  /**
   * @title keys 值
   * @description OpenAI API 合约中的 keys 值。
   */
  keys?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'click';
  /**
   * @title x 值
   * @description OpenAI API 合约中的 x 值。
   */
  x: number;
  /**
   * @title y 值
   * @description OpenAI API 合约中的 y 值。
   */
  y: number;
}

/**
 * @title Client Tool Call Item 数据结构
 * @description OpenAI API 合约中的 Client Tool Call Item 结构定义。
 */
export type ClientToolCallItem = {
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: string;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'chatkit.thread_item';
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: ClientToolCallStatus;
  /**
   * @title thread id 值
   * @description OpenAI API 合约中的 thread id 值。
   */
  thread_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'chatkit.client_tool_call';
}

/**
 * @title Client Tool Call Status 数据结构
 * @description OpenAI API 合约中的 Client Tool Call Status 结构定义。
 */
export type ClientToolCallStatus = 'in_progress' | 'completed'

/**
 * @title Closed Status 数据结构
 * @description OpenAI API 合约中的 Closed Status 结构定义。
 */
export type ClosedStatus = {
  /**
   * @title reason 值
   * @description OpenAI API 合约中的 reason 值。
   */
  reason: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'closed';
}

/**
 * @title Code Interpreter File Output 数据结构
 * @description OpenAI API 合约中的 Code Interpreter File Output 结构定义。
 */
export type CodeInterpreterFileOutput = {
  /**
   * @title files 值
   * @description OpenAI API 合约中的 files 值。
   */
  files: Array<{
    /**
     * @title file id 值
     * @description OpenAI API 合约中的 file id 值。
     */
    file_id: string;
    /**
     * @title mime type 值
     * @description OpenAI API 合约中的 mime type 值。
     */
    mime_type: string
  }>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'files';
}

/**
 * @title Code Interpreter Output Image 数据结构
 * @description OpenAI API 合约中的 Code Interpreter Output Image 结构定义。
 */
export type CodeInterpreterOutputImage = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'image';
  /**
   * @title url 值
   * @description OpenAI API 合约中的 url 值。
   */
  url: string;
}

/**
 * @title Code Interpreter Output Logs 数据结构
 * @description OpenAI API 合约中的 Code Interpreter Output Logs 结构定义。
 */
export type CodeInterpreterOutputLogs = {
  /**
   * @title logs 值
   * @description OpenAI API 合约中的 logs 值。
   */
  logs: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'logs';
}

/**
 * @title Code Interpreter Text Output 数据结构
 * @description OpenAI API 合约中的 Code Interpreter Text Output 结构定义。
 */
export type CodeInterpreterTextOutput = {
  /**
   * @title logs 值
   * @description OpenAI API 合约中的 logs 值。
   */
  logs: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'logs';
}

/**
 * @title Code Interpreter Tool 数据结构
 * @description OpenAI API 合约中的 Code Interpreter Tool 结构定义。
 */
export type CodeInterpreterTool = {
  /**
   * @title allowed callers 值
   * @description OpenAI API 合约中的 allowed callers 值。
   */
  allowed_callers?: any;
  /**
   * @title container 值
   * @description OpenAI API 合约中的 container 值。
   */
  container: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'code_interpreter';
}

/**
 * @title Code Interpreter Tool Call 数据结构
 * @description OpenAI API 合约中的 Code Interpreter Tool Call 结构定义。
 */
export type CodeInterpreterToolCall = {
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: any;
  /**
   * @title container id 值
   * @description OpenAI API 合约中的 container id 值。
   */
  container_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title outputs 值
   * @description OpenAI API 合约中的 outputs 值。
   */
  outputs: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'in_progress' | 'completed' | 'incomplete' | 'interpreting' | 'failed';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'code_interpreter_call';
}

/**
 * @title Compact Resource 数据结构
 * @description OpenAI API 合约中的 Compact Resource 结构定义。
 */
export type CompactResource = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'response.compaction';
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: Array<ItemField>;
  /**
   * @title usage 值
   * @description OpenAI API 合约中的 usage 值。
   */
  usage: ResponseUsage;
}

/**
 * @title Compact Response Method Public Body 数据结构
 * @description OpenAI API 合约中的 Compact Response Method Public Body 结构定义。
 */
export type CompactResponseMethodPublicBody = {
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input?: any;
  /**
   * @title instructions 值
   * @description OpenAI API 合约中的 instructions 值。
   */
  instructions?: any;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: ModelIdsCompaction;
  /**
   * @title previous response id 值
   * @description OpenAI API 合约中的 previous response id 值。
   */
  previous_response_id?: any;
  /**
   * @title prompt cache key 值
   * @description OpenAI API 合约中的 prompt cache key 值。
   */
  prompt_cache_key?: any;
  /**
   * @title prompt cache options 值
   * @description OpenAI API 合约中的 prompt cache options 值。
   */
  prompt_cache_options?: any;
  /**
   * @title prompt cache retention 值
   * @description OpenAI API 合约中的 prompt cache retention 值。
   */
  prompt_cache_retention?: any;
  /**
   * @title service tier 值
   * @description OpenAI API 合约中的 service tier 值。
   */
  service_tier?: any;
}

/**
 * @title Compaction Body 数据结构
 * @description OpenAI API 合约中的 Compaction Body 结构定义。
 */
export type CompactionBody = {
  /**
   * @title created by 值
   * @description OpenAI API 合约中的 created by 值。
   */
  created_by?: string;
  /**
   * @title encrypted content 值
   * @description OpenAI API 合约中的 encrypted content 值。
   */
  encrypted_content: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'compaction';
}

/**
 * @title Compaction Summary Item Param 数据结构
 * @description OpenAI API 合约中的 Compaction Summary Item Param 结构定义。
 */
export type CompactionSummaryItemParam = {
  /**
   * @title encrypted content 值
   * @description OpenAI API 合约中的 encrypted content 值。
   */
  encrypted_content: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'compaction';
}

/**
 * @title Compaction Trigger Item Param 数据结构
 * @description OpenAI API 合约中的 Compaction Trigger Item Param 结构定义。
 */
export type CompactionTriggerItemParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'compaction_trigger';
}

/**
 * @title Comparison Filter 数据结构
 * @description OpenAI API 合约中的 Comparison Filter 结构定义。
 */
export type ComparisonFilter = {
  /**
   * @title key 值
   * @description OpenAI API 合约中的 key 值。
   */
  key: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'nin';
  /**
   * @title value 值
   * @description OpenAI API 合约中的 value 值。
   */
  value: any;
}

/**
 * @title Complete Upload Request 数据结构
 * @description OpenAI API 合约中的 Complete Upload Request 结构定义。
 */
export type CompleteUploadRequest = {
  /**
   * @title md5 值
   * @description OpenAI API 合约中的 md5 值。
   */
  md5?: string;
  /**
   * @title part ids 值
   * @description OpenAI API 合约中的 part ids 值。
   */
  part_ids: Array<string>;
}

/**
 * @title Completion Usage 数据结构
 * @description OpenAI API 合约中的 Completion Usage 结构定义。
 */
export type CompletionUsage = {
  /**
   * @title completion tokens 值
   * @description OpenAI API 合约中的 completion tokens 值。
   */
  completion_tokens: number;
  /**
   * @title completion tokens details 值
   * @description OpenAI API 合约中的 completion tokens details 值。
   */
  completion_tokens_details?: {
    /**
     * @title accepted prediction tokens 值
     * @description OpenAI API 合约中的 accepted prediction tokens 值。
     */
    accepted_prediction_tokens?: number;
    /**
     * @title audio tokens 值
     * @description OpenAI API 合约中的 audio tokens 值。
     */
    audio_tokens?: number;
    /**
     * @title reasoning tokens 值
     * @description OpenAI API 合约中的 reasoning tokens 值。
     */
    reasoning_tokens?: number;
    /**
     * @title rejected prediction tokens 值
     * @description OpenAI API 合约中的 rejected prediction tokens 值。
     */
    rejected_prediction_tokens?: number;
    /**
     * @title text tokens 值
     * @description OpenAI API 合约中的 text tokens 值。
     */
    text_tokens?: number
  };
  /**
   * @title prompt tokens 值
   * @description OpenAI API 合约中的 prompt tokens 值。
   */
  prompt_tokens: number;
  /**
   * @title prompt tokens details 值
   * @description OpenAI API 合约中的 prompt tokens details 值。
   */
  prompt_tokens_details?: {
    /**
     * @title audio tokens 值
     * @description OpenAI API 合约中的 audio tokens 值。
     */
    audio_tokens?: number;
    /**
     * @title cache write tokens 值
     * @description OpenAI API 合约中的 cache write tokens 值。
     */
    cache_write_tokens?: number;
    /**
     * @title cached tokens 值
     * @description OpenAI API 合约中的 cached tokens 值。
     */
    cached_tokens?: number;
    /**
     * @title image tokens 值
     * @description OpenAI API 合约中的 image tokens 值。
     */
    image_tokens?: number;
    /**
     * @title text tokens 值
     * @description OpenAI API 合约中的 text tokens 值。
     */
    text_tokens?: number
  };
  /**
   * @title total tokens 值
   * @description OpenAI API 合约中的 total tokens 值。
   */
  total_tokens: number;
}

/**
 * @title Compound Filter 数据结构
 * @description OpenAI API 合约中的 Compound Filter 结构定义。
 */
export type CompoundFilter = {
  /**
   * @title filters 值
   * @description OpenAI API 合约中的 filters 值。
   */
  filters: Array<any>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'and' | 'or';
}

/**
 * @title Computer Action 数据结构
 * @description OpenAI API 合约中的 Computer Action 结构定义。
 */
export type ComputerAction = any

/**
 * @title Computer Action List 数据结构
 * @description OpenAI API 合约中的 Computer Action List 结构定义。
 */
export type ComputerActionList = Array<ComputerAction>

/**
 * @title Computer Call Output Item Param 数据结构
 * @description OpenAI API 合约中的 Computer Call Output Item Param 结构定义。
 */
export type ComputerCallOutputItemParam = {
  /**
   * @title acknowledged safety checks 值
   * @description OpenAI API 合约中的 acknowledged safety checks 值。
   */
  acknowledged_safety_checks?: any;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: ComputerScreenshotImage;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'computer_call_output';
}

/**
 * @title Computer Call Output Status 数据结构
 * @description OpenAI API 合约中的 Computer Call Output Status 结构定义。
 */
export type ComputerCallOutputStatus = 'completed' | 'incomplete' | 'failed'

/**
 * @title Computer Call Safety Check Param 数据结构
 * @description OpenAI API 合约中的 Computer Call Safety Check Param 结构定义。
 */
export type ComputerCallSafetyCheckParam = {
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title message 值
   * @description OpenAI API 合约中的 message 值。
   */
  message?: any;
}

/**
 * @title Computer Environment 数据结构
 * @description OpenAI API 合约中的 Computer Environment 结构定义。
 */
export type ComputerEnvironment = 'windows' | 'mac' | 'linux' | 'ubuntu' | 'browser'

/**
 * @title Computer Screenshot Content 数据结构
 * @description OpenAI API 合约中的 Computer Screenshot Content 结构定义。
 */
export type ComputerScreenshotContent = {
  /**
   * @title detail 值
   * @description OpenAI API 合约中的 detail 值。
   */
  detail: ImageDetail;
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id: any;
  /**
   * @title image url 值
   * @description OpenAI API 合约中的 image url 值。
   */
  image_url: any;
  /**
   * @title prompt cache breakpoint 值
   * @description OpenAI API 合约中的 prompt cache breakpoint 值。
   */
  prompt_cache_breakpoint?: PromptCacheBreakpointConfig;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'computer_screenshot';
}

/**
 * @title Computer Screenshot Image 数据结构
 * @description OpenAI API 合约中的 Computer Screenshot Image 结构定义。
 */
export type ComputerScreenshotImage = {
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id?: string;
  /**
   * @title image url 值
   * @description OpenAI API 合约中的 image url 值。
   */
  image_url?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'computer_screenshot';
}

/**
 * @title Computer Tool 数据结构
 * @description OpenAI API 合约中的 Computer Tool 结构定义。
 */
export type ComputerTool = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'computer';
}

/**
 * @title Computer Tool Call 数据结构
 * @description OpenAI API 合约中的 Computer Tool Call 结构定义。
 */
export type ComputerToolCall = {
  /**
   * @title action 值
   * @description OpenAI API 合约中的 action 值。
   */
  action?: ComputerAction;
  /**
   * @title actions 值
   * @description OpenAI API 合约中的 actions 值。
   */
  actions?: ComputerActionList;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title pending safety checks 值
   * @description OpenAI API 合约中的 pending safety checks 值。
   */
  pending_safety_checks: Array<ComputerCallSafetyCheckParam>;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'in_progress' | 'completed' | 'incomplete';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'computer_call';
}

/**
 * @title Computer Tool Call Output 数据结构
 * @description OpenAI API 合约中的 Computer Tool Call Output 结构定义。
 */
export type ComputerToolCallOutput = {
  /**
   * @title acknowledged safety checks 值
   * @description OpenAI API 合约中的 acknowledged safety checks 值。
   */
  acknowledged_safety_checks?: Array<ComputerCallSafetyCheckParam>;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: ComputerScreenshotImage;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: 'in_progress' | 'completed' | 'incomplete';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'computer_call_output';
}

/**
 * @title Computer Tool Call Output Resource 数据结构
 * @description OpenAI API 合约中的 Computer Tool Call Output Resource 结构定义。
 */
export type ComputerToolCallOutputResource = any

/**
 * @title Computer Use Preview Tool 数据结构
 * @description OpenAI API 合约中的 Computer Use Preview Tool 结构定义。
 */
export type ComputerUsePreviewTool = {
  /**
   * @title display height 值
   * @description OpenAI API 合约中的 display height 值。
   */
  display_height: number;
  /**
   * @title display width 值
   * @description OpenAI API 合约中的 display width 值。
   */
  display_width: number;
  /**
   * @title environment 值
   * @description OpenAI API 合约中的 environment 值。
   */
  environment: ComputerEnvironment;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'computer_use_preview';
}

/**
 * @title Container Auto Param 数据结构
 * @description OpenAI API 合约中的 Container Auto Param 结构定义。
 */
export type ContainerAutoParam = {
  /**
   * @title file ids 值
   * @description OpenAI API 合约中的 file ids 值。
   */
  file_ids?: Array<string>;
  /**
   * @title memory limit 值
   * @description OpenAI API 合约中的 memory limit 值。
   */
  memory_limit?: any;
  /**
   * @title network policy 值
   * @description OpenAI API 合约中的 network policy 值。
   */
  network_policy?: any;
  /**
   * @title skills 值
   * @description OpenAI API 合约中的 skills 值。
   */
  skills?: Array<any>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'container_auto';
}

/**
 * @title Container File Citation Body 数据结构
 * @description OpenAI API 合约中的 Container File Citation Body 结构定义。
 */
export type ContainerFileCitationBody = {
  /**
   * @title container id 值
   * @description OpenAI API 合约中的 container id 值。
   */
  container_id: string;
  /**
   * @title end index 值
   * @description OpenAI API 合约中的 end index 值。
   */
  end_index: number;
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id: string;
  /**
   * @title filename 值
   * @description OpenAI API 合约中的 filename 值。
   */
  filename: string;
  /**
   * @title start index 值
   * @description OpenAI API 合约中的 start index 值。
   */
  start_index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'container_file_citation';
}

/**
 * @title Container File Citation Param 数据结构
 * @description OpenAI API 合约中的 Container File Citation Param 结构定义。
 */
export type ContainerFileCitationParam = {
  /**
   * @title container id 值
   * @description OpenAI API 合约中的 container id 值。
   */
  container_id: string;
  /**
   * @title end index 值
   * @description OpenAI API 合约中的 end index 值。
   */
  end_index: number;
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id: string;
  /**
   * @title filename 值
   * @description OpenAI API 合约中的 filename 值。
   */
  filename: string;
  /**
   * @title start index 值
   * @description OpenAI API 合约中的 start index 值。
   */
  start_index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'container_file_citation';
}

/**
 * @title Container File List Resource 数据结构
 * @description OpenAI API 合约中的 Container File List Resource 结构定义。
 */
export type ContainerFileListResource = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<ContainerFileResource>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id: string;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Container File Resource 数据结构
 * @description OpenAI API 合约中的 Container File Resource 结构定义。
 */
export type ContainerFileResource = {
  /**
   * @title bytes 值
   * @description OpenAI API 合约中的 bytes 值。
   */
  bytes: number;
  /**
   * @title container id 值
   * @description OpenAI API 合约中的 container id 值。
   */
  container_id: string;
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: string;
  /**
   * @title path 值
   * @description OpenAI API 合约中的 path 值。
   */
  path: string;
  /**
   * @title source 值
   * @description OpenAI API 合约中的 source 值。
   */
  source: string;
}

/**
 * @title Container List Resource 数据结构
 * @description OpenAI API 合约中的 Container List Resource 结构定义。
 */
export type ContainerListResource = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<ContainerResource>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id: string;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Container Memory Limit 数据结构
 * @description OpenAI API 合约中的 Container Memory Limit 结构定义。
 */
export type ContainerMemoryLimit = '1g' | '4g' | '16g' | '64g'

/**
 * @title Container Network Policy Allowlist Param 数据结构
 * @description OpenAI API 合约中的 Container Network Policy Allowlist Param 结构定义。
 */
export type ContainerNetworkPolicyAllowlistParam = {
  /**
   * @title allowed domains 值
   * @description OpenAI API 合约中的 allowed domains 值。
   */
  allowed_domains: Array<string>;
  /**
   * @title domain secrets 值
   * @description OpenAI API 合约中的 domain secrets 值。
   */
  domain_secrets?: Array<ContainerNetworkPolicyDomainSecretParam>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'allowlist';
}

/**
 * @title Container Network Policy Disabled Param 数据结构
 * @description OpenAI API 合约中的 Container Network Policy Disabled Param 结构定义。
 */
export type ContainerNetworkPolicyDisabledParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'disabled';
}

/**
 * @title Container Network Policy Domain Secret Param 数据结构
 * @description OpenAI API 合约中的 Container Network Policy Domain Secret Param 结构定义。
 */
export type ContainerNetworkPolicyDomainSecretParam = {
  /**
   * @title domain 值
   * @description OpenAI API 合约中的 domain 值。
   */
  domain: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title value 值
   * @description OpenAI API 合约中的 value 值。
   */
  value: string;
}

/**
 * @title Container Reference Param 数据结构
 * @description OpenAI API 合约中的 Container Reference Param 结构定义。
 */
export type ContainerReferenceParam = {
  /**
   * @title container id 值
   * @description OpenAI API 合约中的 container id 值。
   */
  container_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'container_reference';
}

/**
 * @title Container Reference Resource 数据结构
 * @description OpenAI API 合约中的 Container Reference Resource 结构定义。
 */
export type ContainerReferenceResource = {
  /**
   * @title container id 值
   * @description OpenAI API 合约中的 container id 值。
   */
  container_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'container_reference';
}

/**
 * @title Container Resource 数据结构
 * @description OpenAI API 合约中的 Container Resource 结构定义。
 */
export type ContainerResource = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title expires after 值
   * @description OpenAI API 合约中的 expires after 值。
   */
  expires_after?: {
    /**
     * @title anchor 值
     * @description OpenAI API 合约中的 anchor 值。
     */
    anchor?: 'last_active_at';
    /**
     * @title minutes 值
     * @description OpenAI API 合约中的 minutes 值。
     */
    minutes?: number
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title last active at 值
   * @description OpenAI API 合约中的 last active at 值。
   */
  last_active_at?: number;
  /**
   * @title memory limit 值
   * @description OpenAI API 合约中的 memory limit 值。
   */
  memory_limit?: '1g' | '4g' | '16g' | '64g';
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title network policy 值
   * @description OpenAI API 合约中的 network policy 值。
   */
  network_policy?: {
    /**
     * @title allowed domains 值
     * @description OpenAI API 合约中的 allowed domains 值。
     */
    allowed_domains?: Array<string>;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type: 'allowlist' | 'disabled'
  };
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: string;
}

/**
 * @title Content 数据结构
 * @description OpenAI API 合约中的 Content 结构定义。
 */
export type Content = any

/**
 * @title Context Management Param 数据结构
 * @description OpenAI API 合约中的 Context Management Param 结构定义。
 */
export type ContextManagementParam = {
  /**
   * @title compact threshold 值
   * @description OpenAI API 合约中的 compact threshold 值。
   */
  compact_threshold?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: string;
}

/**
 * @title Conversation Item 数据结构
 * @description OpenAI API 合约中的 Conversation Item 结构定义。
 */
export type ConversationItem = any

/**
 * @title Conversation Item List 数据结构
 * @description OpenAI API 合约中的 Conversation Item List 结构定义。
 */
export type ConversationItemList = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<ConversationItem>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id: string;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Conversation Param 数据结构
 * @description OpenAI API 合约中的 Conversation Param 结构定义。
 */
export type ConversationParam = any

/**
 * @title Conversation Resource 数据结构
 * @description OpenAI API 合约中的 Conversation Resource 结构定义。
 */
export type ConversationResource = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'conversation';
}

/**
 * @title Coord Param 数据结构
 * @description OpenAI API 合约中的 Coord Param 结构定义。
 */
export type CoordParam = {
  /**
   * @title x 值
   * @description OpenAI API 合约中的 x 值。
   */
  x: number;
  /**
   * @title y 值
   * @description OpenAI API 合约中的 y 值。
   */
  y: number;
}

/**
 * @title Costs Result 数据结构
 * @description OpenAI API 合约中的 Costs Result 结构定义。
 */
export type CostsResult = {
  /**
   * @title amount 值
   * @description OpenAI API 合约中的 amount 值。
   */
  amount?: {
    /**
     * @title currency 值
     * @description OpenAI API 合约中的 currency 值。
     */
    currency?: string;
    /**
     * @title value 值
     * @description OpenAI API 合约中的 value 值。
     */
    value?: number
  };
  /**
   * @title api key id 值
   * @description OpenAI API 合约中的 api key id 值。
   */
  api_key_id?: any;
  /**
   * @title line item 值
   * @description OpenAI API 合约中的 line item 值。
   */
  line_item?: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.costs.result';
  /**
   * @title project id 值
   * @description OpenAI API 合约中的 project id 值。
   */
  project_id?: any;
  /**
   * @title quantity 值
   * @description OpenAI API 合约中的 quantity 值。
   */
  quantity?: any;
}

/**
 * @title Create Assistant Request 数据结构
 * @description OpenAI API 合约中的 Create Assistant Request 结构定义。
 */
export type CreateAssistantRequest = {
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description?: any;
  /**
   * @title instructions 值
   * @description OpenAI API 合约中的 instructions 值。
   */
  instructions?: any;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: any;
  /**
   * @title reasoning effort 值
   * @description OpenAI API 合约中的 reasoning effort 值。
   */
  reasoning_effort?: ReasoningEffort;
  /**
   * @title response format 值
   * @description OpenAI API 合约中的 response format 值。
   */
  response_format?: any;
  /**
   * @title temperature 值
   * @description OpenAI API 合约中的 temperature 值。
   */
  temperature?: any;
  /**
   * @title tool resources 值
   * @description OpenAI API 合约中的 tool resources 值。
   */
  tool_resources?: any;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools?: Array<any>;
  /**
   * @title top p 值
   * @description OpenAI API 合约中的 top p 值。
   */
  top_p?: any;
}

/**
 * @title Create Batch Request 数据结构
 * @description OpenAI API 合约中的 Create Batch Request 结构定义。
 */
export type CreateBatchRequest = {
  /**
   * @title completion window 值
   * @description OpenAI API 合约中的 completion window 值。
   */
  completion_window: '24h';
  /**
   * @title endpoint 值
   * @description OpenAI API 合约中的 endpoint 值。
   */
  endpoint: '/v1/responses' | '/v1/chat/completions' | '/v1/embeddings' | '/v1/completions' | '/v1/moderations' | '/v1/images/generations' | '/v1/images/edits' | '/v1/videos';
  /**
   * @title input file id 值
   * @description OpenAI API 合约中的 input file id 值。
   */
  input_file_id: string;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title output expires after 值
   * @description OpenAI API 合约中的 output expires after 值。
   */
  output_expires_after?: BatchFileExpirationAfter;
}

/**
 * @title Create Chat Completion Request 数据结构
 * @description OpenAI API 合约中的 Create Chat Completion Request 结构定义。
 */
export type CreateChatCompletionRequest = any

/**
 * @title Create Chat Completion Response 数据结构
 * @description OpenAI API 合约中的 Create Chat Completion Response 结构定义。
 */
export type CreateChatCompletionResponse = {
  /**
   * @title choices 值
   * @description OpenAI API 合约中的 choices 值。
   */
  choices: Array<{
    /**
     * @title finish reason 值
     * @description OpenAI API 合约中的 finish reason 值。
     */
    finish_reason: 'stop' | 'length' | 'tool_calls' | 'content_filter' | 'function_call';
    /**
     * @title index 值
     * @description OpenAI API 合约中的 index 值。
     */
    index: number;
    /**
     * @title logprobs 值
     * @description OpenAI API 合约中的 logprobs 值。
     */
    logprobs: any;
    /**
     * @title message 值
     * @description OpenAI API 合约中的 message 值。
     */
    message: ChatCompletionResponseMessage
  }>;
  /**
   * @title created 值
   * @description OpenAI API 合约中的 created 值。
   */
  created: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: string;
  /**
   * @title moderation 值
   * @description OpenAI API 合约中的 moderation 值。
   */
  moderation?: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'chat.completion';
  /**
   * @title service tier 值
   * @description OpenAI API 合约中的 service tier 值。
   */
  service_tier?: ServiceTier;
  /**
   * @title system fingerprint 值
   * @description OpenAI API 合约中的 system fingerprint 值。
   */
  system_fingerprint?: string;
  /**
   * @title usage 值
   * @description OpenAI API 合约中的 usage 值。
   */
  usage?: CompletionUsage;
}

/**
 * @title Create Chat Completion Stream Response 数据结构
 * @description OpenAI API 合约中的 Create Chat Completion Stream Response 结构定义。
 */
export type CreateChatCompletionStreamResponse = {
  /**
   * @title choices 值
   * @description OpenAI API 合约中的 choices 值。
   */
  choices: Array<{
    /**
     * @title delta 值
     * @description OpenAI API 合约中的 delta 值。
     */
    delta: ChatCompletionStreamResponseDelta;
    /**
     * @title finish reason 值
     * @description OpenAI API 合约中的 finish reason 值。
     */
    finish_reason: 'stop' | 'length' | 'tool_calls' | 'content_filter' | 'function_call';
    /**
     * @title index 值
     * @description OpenAI API 合约中的 index 值。
     */
    index: number;
    /**
     * @title logprobs 值
     * @description OpenAI API 合约中的 logprobs 值。
     */
    logprobs?: {
      /**
       * @title content 值
       * @description OpenAI API 合约中的 content 值。
       */
      content: Array<ChatCompletionTokenLogprob>;
      /**
       * @title refusal 值
       * @description OpenAI API 合约中的 refusal 值。
       */
      refusal: Array<ChatCompletionTokenLogprob>
    }
  }>;
  /**
   * @title created 值
   * @description OpenAI API 合约中的 created 值。
   */
  created: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: string;
  /**
   * @title moderation 值
   * @description OpenAI API 合约中的 moderation 值。
   */
  moderation?: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'chat.completion.chunk';
  /**
   * @title service tier 值
   * @description OpenAI API 合约中的 service tier 值。
   */
  service_tier?: ServiceTier;
  /**
   * @title system fingerprint 值
   * @description OpenAI API 合约中的 system fingerprint 值。
   */
  system_fingerprint?: string;
  /**
   * @title usage 值
   * @description OpenAI API 合约中的 usage 值。
   */
  usage?: CompletionUsage;
}

/**
 * @title Create Chat Session Body 数据结构
 * @description OpenAI API 合约中的 Create Chat Session Body 结构定义。
 */
export type CreateChatSessionBody = {
  /**
   * @title chatkit configuration 值
   * @description OpenAI API 合约中的 chatkit configuration 值。
   */
  chatkit_configuration?: ChatkitConfigurationParam;
  /**
   * @title expires after 值
   * @description OpenAI API 合约中的 expires after 值。
   */
  expires_after?: ExpiresAfterParam;
  /**
   * @title rate limits 值
   * @description OpenAI API 合约中的 rate limits 值。
   */
  rate_limits?: RateLimitsParam;
  /**
   * @title user 值
   * @description OpenAI API 合约中的 user 值。
   */
  user: string;
  /**
   * @title workflow 值
   * @description OpenAI API 合约中的 workflow 值。
   */
  workflow: WorkflowParam;
}

/**
 * @title Create Completion Request 数据结构
 * @description OpenAI API 合约中的 Create Completion Request 结构定义。
 */
export type CreateCompletionRequest = {
  /**
   * @title best of 值
   * @description OpenAI API 合约中的 best of 值。
   */
  best_of?: number;
  /**
   * @title echo 值
   * @description OpenAI API 合约中的 echo 值。
   */
  echo?: boolean;
  /**
   * @title frequency penalty 值
   * @description OpenAI API 合约中的 frequency penalty 值。
   */
  frequency_penalty?: number;
  /**
   * @title logit bias 值
   * @description OpenAI API 合约中的 logit bias 值。
   */
  logit_bias?: Record<any, number>;
  /**
   * @title logprobs 值
   * @description OpenAI API 合约中的 logprobs 值。
   */
  logprobs?: number;
  /**
   * @title max tokens 值
   * @description OpenAI API 合约中的 max tokens 值。
   */
  max_tokens?: number;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: any;
  /**
   * @title n 值
   * @description OpenAI API 合约中的 n 值。
   */
  n?: number;
  /**
   * @title presence penalty 值
   * @description OpenAI API 合约中的 presence penalty 值。
   */
  presence_penalty?: number;
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt: any;
  /**
   * @title seed 值
   * @description OpenAI API 合约中的 seed 值。
   */
  seed?: number;
  /**
   * @title stop 值
   * @description OpenAI API 合约中的 stop 值。
   */
  stop?: StopConfiguration;
  /**
   * @title stream 值
   * @description OpenAI API 合约中的 stream 值。
   */
  stream?: boolean;
  /**
   * @title stream options 值
   * @description OpenAI API 合约中的 stream options 值。
   */
  stream_options?: ChatCompletionStreamOptions;
  /**
   * @title suffix 值
   * @description OpenAI API 合约中的 suffix 值。
   */
  suffix?: string;
  /**
   * @title temperature 值
   * @description OpenAI API 合约中的 temperature 值。
   */
  temperature?: number;
  /**
   * @title top p 值
   * @description OpenAI API 合约中的 top p 值。
   */
  top_p?: number;
  /**
   * @title user 值
   * @description OpenAI API 合约中的 user 值。
   */
  user?: string;
}

/**
 * @title Create Completion Response 数据结构
 * @description OpenAI API 合约中的 Create Completion Response 结构定义。
 */
export type CreateCompletionResponse = {
  /**
   * @title choices 值
   * @description OpenAI API 合约中的 choices 值。
   */
  choices: Array<{
    /**
     * @title finish reason 值
     * @description OpenAI API 合约中的 finish reason 值。
     */
    finish_reason: 'stop' | 'length' | 'content_filter';
    /**
     * @title index 值
     * @description OpenAI API 合约中的 index 值。
     */
    index: number;
    /**
     * @title logprobs 值
     * @description OpenAI API 合约中的 logprobs 值。
     */
    logprobs: any;
    /**
     * @title text 值
     * @description OpenAI API 合约中的 text 值。
     */
    text: string
  }>;
  /**
   * @title created 值
   * @description OpenAI API 合约中的 created 值。
   */
  created: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'text_completion';
  /**
   * @title system fingerprint 值
   * @description OpenAI API 合约中的 system fingerprint 值。
   */
  system_fingerprint?: string;
  /**
   * @title usage 值
   * @description OpenAI API 合约中的 usage 值。
   */
  usage?: CompletionUsage;
}

/**
 * @title Create Container Body 数据结构
 * @description OpenAI API 合约中的 Create Container Body 结构定义。
 */
export type CreateContainerBody = {
  /**
   * @title expires after 值
   * @description OpenAI API 合约中的 expires after 值。
   */
  expires_after?: {
    /**
     * @title anchor 值
     * @description OpenAI API 合约中的 anchor 值。
     */
    anchor: 'last_active_at';
    /**
     * @title minutes 值
     * @description OpenAI API 合约中的 minutes 值。
     */
    minutes: number
  };
  /**
   * @title file ids 值
   * @description OpenAI API 合约中的 file ids 值。
   */
  file_ids?: Array<string>;
  /**
   * @title memory limit 值
   * @description OpenAI API 合约中的 memory limit 值。
   */
  memory_limit?: '1g' | '4g' | '16g' | '64g';
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title network policy 值
   * @description OpenAI API 合约中的 network policy 值。
   */
  network_policy?: any;
  /**
   * @title skills 值
   * @description OpenAI API 合约中的 skills 值。
   */
  skills?: Array<any>;
}

/**
 * @title Create Container File Body 数据结构
 * @description OpenAI API 合约中的 Create Container File Body 结构定义。
 */
export type CreateContainerFileBody = {
  /**
   * @title file 值
   * @description OpenAI API 合约中的 file 值。
   */
  file?: Blob;
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id?: string;
}

/**
 * @title Create Content Provenance Body 数据结构
 * @description OpenAI API 合约中的 Create Content Provenance Body 结构定义。
 */
export type CreateContentProvenanceBody = {
  /**
   * @title file 值
   * @description OpenAI API 合约中的 file 值。
   */
  file: Blob;
}

/**
 * @title Create Conversation Body 数据结构
 * @description OpenAI API 合约中的 Create Conversation Body 结构定义。
 */
export type CreateConversationBody = {
  /**
   * @title items 值
   * @description OpenAI API 合约中的 items 值。
   */
  items?: any;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: any;
}

/**
 * @title Create Embedding Request 数据结构
 * @description OpenAI API 合约中的 Create Embedding Request 结构定义。
 */
export type CreateEmbeddingRequest = {
  /**
   * @title dimensions 值
   * @description OpenAI API 合约中的 dimensions 值。
   */
  dimensions?: number;
  /**
   * @title encoding format 值
   * @description OpenAI API 合约中的 encoding format 值。
   */
  encoding_format?: 'float' | 'base64';
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input: any;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: any;
  /**
   * @title user 值
   * @description OpenAI API 合约中的 user 值。
   */
  user?: string;
}

/**
 * @title Create Embedding Response 数据结构
 * @description OpenAI API 合约中的 Create Embedding Response 结构定义。
 */
export type CreateEmbeddingResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<Embedding>;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
  /**
   * @title usage 值
   * @description OpenAI API 合约中的 usage 值。
   */
  usage: {
    /**
     * @title prompt tokens 值
     * @description OpenAI API 合约中的 prompt tokens 值。
     */
    prompt_tokens: number;
    /**
     * @title total tokens 值
     * @description OpenAI API 合约中的 total tokens 值。
     */
    total_tokens: number
  };
}

/**
 * @title Create Eval Completions Run Data Source 数据结构
 * @description OpenAI API 合约中的 Create Eval Completions Run Data Source 结构定义。
 */
export type CreateEvalCompletionsRunDataSource = {
  /**
   * @title input messages 值
   * @description OpenAI API 合约中的 input messages 值。
   */
  input_messages?: any;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: string;
  /**
   * @title sampling params 值
   * @description OpenAI API 合约中的 sampling params 值。
   */
  sampling_params?: {
    /**
     * @title max completion tokens 值
     * @description OpenAI API 合约中的 max completion tokens 值。
     */
    max_completion_tokens?: number;
    /**
     * @title reasoning effort 值
     * @description OpenAI API 合约中的 reasoning effort 值。
     */
    reasoning_effort?: ReasoningEffort;
    /**
     * @title response format 值
     * @description OpenAI API 合约中的 response format 值。
     */
    response_format?: any;
    /**
     * @title seed 值
     * @description OpenAI API 合约中的 seed 值。
     */
    seed?: number;
    /**
     * @title temperature 值
     * @description OpenAI API 合约中的 temperature 值。
     */
    temperature?: number;
    /**
     * @title tools 值
     * @description OpenAI API 合约中的 tools 值。
     */
    tools?: Array<ChatCompletionTool>;
    /**
     * @title top p 值
     * @description OpenAI API 合约中的 top p 值。
     */
    top_p?: number
  };
  /**
   * @title source 值
   * @description OpenAI API 合约中的 source 值。
   */
  source: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'completions';
}

/**
 * @title Create Eval Custom Data Source Config 数据结构
 * @description OpenAI API 合约中的 Create Eval Custom Data Source Config 结构定义。
 */
export type CreateEvalCustomDataSourceConfig = {
  /**
   * @title include sample schema 值
   * @description OpenAI API 合约中的 include sample schema 值。
   */
  include_sample_schema?: boolean;
  /**
   * @title item schema 值
   * @description OpenAI API 合约中的 item schema 值。
   */
  item_schema: Record<any, any>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'custom';
}

/**
 * @title Create Eval Item 数据结构
 * @description OpenAI API 合约中的 Create Eval Item 结构定义。
 */
export type CreateEvalItem = any

/**
 * @title Create Eval Jsonl Run Data Source 数据结构
 * @description OpenAI API 合约中的 Create Eval Jsonl Run Data Source 结构定义。
 */
export type CreateEvalJsonlRunDataSource = {
  /**
   * @title source 值
   * @description OpenAI API 合约中的 source 值。
   */
  source: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'jsonl';
}

/**
 * @title Create Eval Label Model Grader 数据结构
 * @description OpenAI API 合约中的 Create Eval Label Model Grader 结构定义。
 */
export type CreateEvalLabelModelGrader = {
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input: Array<CreateEvalItem>;
  /**
   * @title labels 值
   * @description OpenAI API 合约中的 labels 值。
   */
  labels: Array<string>;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title passing labels 值
   * @description OpenAI API 合约中的 passing labels 值。
   */
  passing_labels: Array<string>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'label_model';
}

/**
 * @title Create Eval Logs Data Source Config 数据结构
 * @description OpenAI API 合约中的 Create Eval Logs Data Source Config 结构定义。
 */
export type CreateEvalLogsDataSourceConfig = {
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Record<any, any>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'logs';
}

/**
 * @title Create Eval Request 数据结构
 * @description OpenAI API 合约中的 Create Eval Request 结构定义。
 */
export type CreateEvalRequest = {
  /**
   * @title data source config 值
   * @description OpenAI API 合约中的 data source config 值。
   */
  data_source_config: any;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: string;
  /**
   * @title testing criteria 值
   * @description OpenAI API 合约中的 testing criteria 值。
   */
  testing_criteria: Array<any>;
}

/**
 * @title Create Eval Responses Run Data Source 数据结构
 * @description OpenAI API 合约中的 Create Eval Responses Run Data Source 结构定义。
 */
export type CreateEvalResponsesRunDataSource = {
  /**
   * @title input messages 值
   * @description OpenAI API 合约中的 input messages 值。
   */
  input_messages?: any;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: string;
  /**
   * @title sampling params 值
   * @description OpenAI API 合约中的 sampling params 值。
   */
  sampling_params?: {
    /**
     * @title max completion tokens 值
     * @description OpenAI API 合约中的 max completion tokens 值。
     */
    max_completion_tokens?: number;
    /**
     * @title reasoning effort 值
     * @description OpenAI API 合约中的 reasoning effort 值。
     */
    reasoning_effort?: ReasoningEffort;
    /**
     * @title seed 值
     * @description OpenAI API 合约中的 seed 值。
     */
    seed?: number;
    /**
     * @title temperature 值
     * @description OpenAI API 合约中的 temperature 值。
     */
    temperature?: number;
    /**
     * @title text 值
     * @description OpenAI API 合约中的 text 值。
     */
    text?: {
      /**
       * @title format 值
       * @description OpenAI API 合约中的 format 值。
       */
      format?: TextResponseFormatConfiguration
    };
    /**
     * @title tools 值
     * @description OpenAI API 合约中的 tools 值。
     */
    tools?: Array<Tool>;
    /**
     * @title top p 值
     * @description OpenAI API 合约中的 top p 值。
     */
    top_p?: number
  };
  /**
   * @title source 值
   * @description OpenAI API 合约中的 source 值。
   */
  source: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'responses';
}

/**
 * @title Create Eval Run Request 数据结构
 * @description OpenAI API 合约中的 Create Eval Run Request 结构定义。
 */
export type CreateEvalRunRequest = {
  /**
   * @title data source 值
   * @description OpenAI API 合约中的 data source 值。
   */
  data_source: any;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: string;
}

/**
 * @title Create Eval Stored Completions Data Source Config 数据结构
 * @description OpenAI API 合约中的 Create Eval Stored Completions Data Source Config 结构定义。
 */
export type CreateEvalStoredCompletionsDataSourceConfig = {
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Record<any, any>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'stored_completions';
}

/**
 * @title Create File Request 数据结构
 * @description OpenAI API 合约中的 Create File Request 结构定义。
 */
export type CreateFileRequest = {
  /**
   * @title expires after 值
   * @description OpenAI API 合约中的 expires after 值。
   */
  expires_after?: FileExpirationAfter;
  /**
   * @title file 值
   * @description OpenAI API 合约中的 file 值。
   */
  file: Blob;
  /**
   * @title purpose 值
   * @description OpenAI API 合约中的 purpose 值。
   */
  purpose: 'assistants' | 'batch' | 'fine-tune' | 'vision' | 'user_data' | 'evals';
}

/**
 * @title Create Fine Tuning Checkpoint Permission Request 数据结构
 * @description OpenAI API 合约中的 Create Fine Tuning Checkpoint Permission Request 结构定义。
 */
export type CreateFineTuningCheckpointPermissionRequest = {
  /**
   * @title project ids 值
   * @description OpenAI API 合约中的 project ids 值。
   */
  project_ids: Array<string>;
}

/**
 * @title Create Fine Tuning Job Request 数据结构
 * @description OpenAI API 合约中的 Create Fine Tuning Job Request 结构定义。
 */
export type CreateFineTuningJobRequest = {
  /**
   * @title hyperparameters 值
   * @description OpenAI API 合约中的 hyperparameters 值。
   */
  hyperparameters?: {
    /**
     * @title batch size 值
     * @description OpenAI API 合约中的 batch size 值。
     */
    batch_size?: any;
    /**
     * @title learning rate multiplier 值
     * @description OpenAI API 合约中的 learning rate multiplier 值。
     */
    learning_rate_multiplier?: any;
    /**
     * @title n epochs 值
     * @description OpenAI API 合约中的 n epochs 值。
     */
    n_epochs?: any
  };
  /**
   * @title integrations 值
   * @description OpenAI API 合约中的 integrations 值。
   */
  integrations?: Array<{
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type: any;
    /**
     * @title wandb 值
     * @description OpenAI API 合约中的 wandb 值。
     */
    wandb: {
      /**
       * @title entity 值
       * @description OpenAI API 合约中的 entity 值。
       */
      entity?: string;
      /**
       * @title name 值
       * @description OpenAI API 合约中的 name 值。
       */
      name?: string;
      /**
       * @title project 值
       * @description OpenAI API 合约中的 project 值。
       */
      project: string;
      /**
       * @title tags 值
       * @description OpenAI API 合约中的 tags 值。
       */
      tags?: Array<string>
    }
  }>;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title method 值
   * @description OpenAI API 合约中的 method 值。
   */
  method?: FineTuneMethod;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: any;
  /**
   * @title seed 值
   * @description OpenAI API 合约中的 seed 值。
   */
  seed?: number;
  /**
   * @title suffix 值
   * @description OpenAI API 合约中的 suffix 值。
   */
  suffix?: string;
  /**
   * @title training file 值
   * @description OpenAI API 合约中的 training file 值。
   */
  training_file: string;
  /**
   * @title validation file 值
   * @description OpenAI API 合约中的 validation file 值。
   */
  validation_file?: string;
}

/**
 * @title Create Group Body 数据结构
 * @description OpenAI API 合约中的 Create Group Body 结构定义。
 */
export type CreateGroupBody = {
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
}

/**
 * @title Create Group User Body 数据结构
 * @description OpenAI API 合约中的 Create Group User Body 结构定义。
 */
export type CreateGroupUserBody = {
  /**
   * @title user id 值
   * @description OpenAI API 合约中的 user id 值。
   */
  user_id: string;
}

/**
 * @title Create Image Edit Request 数据结构
 * @description OpenAI API 合约中的 Create Image Edit Request 结构定义。
 */
export type CreateImageEditRequest = {
  /**
   * @title background 值
   * @description OpenAI API 合约中的 background 值。
   */
  background?: 'transparent' | 'opaque' | 'auto';
  /**
   * @title image 值
   * @description OpenAI API 合约中的 image 值。
   */
  image: any;
  /**
   * @title input fidelity 值
   * @description OpenAI API 合约中的 input fidelity 值。
   */
  input_fidelity?: any;
  /**
   * @title mask 值
   * @description OpenAI API 合约中的 mask 值。
   */
  mask?: Blob;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title n 值
   * @description OpenAI API 合约中的 n 值。
   */
  n?: number;
  /**
   * @title output compression 值
   * @description OpenAI API 合约中的 output compression 值。
   */
  output_compression?: number;
  /**
   * @title output format 值
   * @description OpenAI API 合约中的 output format 值。
   */
  output_format?: 'png' | 'jpeg' | 'webp';
  /**
   * @title partial images 值
   * @description OpenAI API 合约中的 partial images 值。
   */
  partial_images?: PartialImages;
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt: string;
  /**
   * @title quality 值
   * @description OpenAI API 合约中的 quality 值。
   */
  quality?: 'standard' | 'low' | 'medium' | 'high' | 'auto';
  /**
   * @title response format 值
   * @description OpenAI API 合约中的 response format 值。
   */
  response_format?: 'url' | 'b64_json';
  /**
   * @title size 值
   * @description OpenAI API 合约中的 size 值。
   */
  size?: any;
  /**
   * @title stream 值
   * @description OpenAI API 合约中的 stream 值。
   */
  stream?: boolean;
  /**
   * @title user 值
   * @description OpenAI API 合约中的 user 值。
   */
  user?: string;
}

/**
 * @title Create Image Request 数据结构
 * @description OpenAI API 合约中的 Create Image Request 结构定义。
 */
export type CreateImageRequest = {
  /**
   * @title background 值
   * @description OpenAI API 合约中的 background 值。
   */
  background?: 'transparent' | 'opaque' | 'auto';
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title moderation 值
   * @description OpenAI API 合约中的 moderation 值。
   */
  moderation?: 'low' | 'auto';
  /**
   * @title n 值
   * @description OpenAI API 合约中的 n 值。
   */
  n?: number;
  /**
   * @title output compression 值
   * @description OpenAI API 合约中的 output compression 值。
   */
  output_compression?: number;
  /**
   * @title output format 值
   * @description OpenAI API 合约中的 output format 值。
   */
  output_format?: 'png' | 'jpeg' | 'webp';
  /**
   * @title partial images 值
   * @description OpenAI API 合约中的 partial images 值。
   */
  partial_images?: PartialImages;
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt: string;
  /**
   * @title quality 值
   * @description OpenAI API 合约中的 quality 值。
   */
  quality?: 'standard' | 'hd' | 'low' | 'medium' | 'high' | 'auto';
  /**
   * @title response format 值
   * @description OpenAI API 合约中的 response format 值。
   */
  response_format?: 'url' | 'b64_json';
  /**
   * @title size 值
   * @description OpenAI API 合约中的 size 值。
   */
  size?: any;
  /**
   * @title stream 值
   * @description OpenAI API 合约中的 stream 值。
   */
  stream?: boolean;
  /**
   * @title style 值
   * @description OpenAI API 合约中的 style 值。
   */
  style?: 'vivid' | 'natural';
  /**
   * @title user 值
   * @description OpenAI API 合约中的 user 值。
   */
  user?: string;
}

/**
 * @title Create Image Variation Request 数据结构
 * @description OpenAI API 合约中的 Create Image Variation Request 结构定义。
 */
export type CreateImageVariationRequest = {
  /**
   * @title image 值
   * @description OpenAI API 合约中的 image 值。
   */
  image: Blob;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title n 值
   * @description OpenAI API 合约中的 n 值。
   */
  n?: number;
  /**
   * @title response format 值
   * @description OpenAI API 合约中的 response format 值。
   */
  response_format?: 'url' | 'b64_json';
  /**
   * @title size 值
   * @description OpenAI API 合约中的 size 值。
   */
  size?: '256x256' | '512x512' | '1024x1024';
  /**
   * @title user 值
   * @description OpenAI API 合约中的 user 值。
   */
  user?: string;
}

/**
 * @title Create Message Request 数据结构
 * @description OpenAI API 合约中的 Create Message Request 结构定义。
 */
export type CreateMessageRequest = {
  /**
   * @title attachments 值
   * @description OpenAI API 合约中的 attachments 值。
   */
  attachments?: any;
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: any;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'user' | 'assistant';
}

/**
 * @title Create Model Response Properties 数据结构
 * @description OpenAI API 合约中的 Create Model Response Properties 结构定义。
 */
export type CreateModelResponseProperties = any

/**
 * @title Create Moderation Request 数据结构
 * @description OpenAI API 合约中的 Create Moderation Request 结构定义。
 */
export type CreateModerationRequest = {
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input: any;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
}

/**
 * @title Create Moderation Response 数据结构
 * @description OpenAI API 合约中的 Create Moderation Response 结构定义。
 */
export type CreateModerationResponse = {
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: string;
  /**
   * @title results 值
   * @description OpenAI API 合约中的 results 值。
   */
  results: Array<{
    /**
     * @title categories 值
     * @description OpenAI API 合约中的 categories 值。
     */
    categories: {
      /**
       * @title harassment 值
       * @description OpenAI API 合约中的 harassment 值。
       */
      harassment: boolean;
      /**
       * @title harassment threatening 值
       * @description OpenAI API 合约中的 harassment threatening 值。
       */
      'harassment/threatening': boolean;
      /**
       * @title hate 值
       * @description OpenAI API 合约中的 hate 值。
       */
      hate: boolean;
      /**
       * @title hate threatening 值
       * @description OpenAI API 合约中的 hate threatening 值。
       */
      'hate/threatening': boolean;
      /**
       * @title illicit 值
       * @description OpenAI API 合约中的 illicit 值。
       */
      illicit: any;
      /**
       * @title illicit violent 值
       * @description OpenAI API 合约中的 illicit violent 值。
       */
      'illicit/violent': any;
      /**
       * @title self harm 值
       * @description OpenAI API 合约中的 self harm 值。
       */
      'self-harm': boolean;
      /**
       * @title self harm instructions 值
       * @description OpenAI API 合约中的 self harm instructions 值。
       */
      'self-harm/instructions': boolean;
      /**
       * @title self harm intent 值
       * @description OpenAI API 合约中的 self harm intent 值。
       */
      'self-harm/intent': boolean;
      /**
       * @title sexual 值
       * @description OpenAI API 合约中的 sexual 值。
       */
      sexual: boolean;
      /**
       * @title sexual minors 值
       * @description OpenAI API 合约中的 sexual minors 值。
       */
      'sexual/minors': boolean;
      /**
       * @title violence 值
       * @description OpenAI API 合约中的 violence 值。
       */
      violence: boolean;
      /**
       * @title violence graphic 值
       * @description OpenAI API 合约中的 violence graphic 值。
       */
      'violence/graphic': boolean
    };
    /**
     * @title category applied input types 值
     * @description OpenAI API 合约中的 category applied input types 值。
     */
    category_applied_input_types: {
      /**
       * @title harassment 值
       * @description OpenAI API 合约中的 harassment 值。
       */
      harassment: Array<'text'>;
      /**
       * @title harassment threatening 值
       * @description OpenAI API 合约中的 harassment threatening 值。
       */
      'harassment/threatening': Array<'text'>;
      /**
       * @title hate 值
       * @description OpenAI API 合约中的 hate 值。
       */
      hate: Array<'text'>;
      /**
       * @title hate threatening 值
       * @description OpenAI API 合约中的 hate threatening 值。
       */
      'hate/threatening': Array<'text'>;
      /**
       * @title illicit 值
       * @description OpenAI API 合约中的 illicit 值。
       */
      illicit: Array<'text'>;
      /**
       * @title illicit violent 值
       * @description OpenAI API 合约中的 illicit violent 值。
       */
      'illicit/violent': Array<'text'>;
      /**
       * @title self harm 值
       * @description OpenAI API 合约中的 self harm 值。
       */
      'self-harm': Array<'text' | 'image'>;
      /**
       * @title self harm instructions 值
       * @description OpenAI API 合约中的 self harm instructions 值。
       */
      'self-harm/instructions': Array<'text' | 'image'>;
      /**
       * @title self harm intent 值
       * @description OpenAI API 合约中的 self harm intent 值。
       */
      'self-harm/intent': Array<'text' | 'image'>;
      /**
       * @title sexual 值
       * @description OpenAI API 合约中的 sexual 值。
       */
      sexual: Array<'text' | 'image'>;
      /**
       * @title sexual minors 值
       * @description OpenAI API 合约中的 sexual minors 值。
       */
      'sexual/minors': Array<'text'>;
      /**
       * @title violence 值
       * @description OpenAI API 合约中的 violence 值。
       */
      violence: Array<'text' | 'image'>;
      /**
       * @title violence graphic 值
       * @description OpenAI API 合约中的 violence graphic 值。
       */
      'violence/graphic': Array<'text' | 'image'>
    };
    /**
     * @title category scores 值
     * @description OpenAI API 合约中的 category scores 值。
     */
    category_scores: {
      /**
       * @title harassment 值
       * @description OpenAI API 合约中的 harassment 值。
       */
      harassment: number;
      /**
       * @title harassment threatening 值
       * @description OpenAI API 合约中的 harassment threatening 值。
       */
      'harassment/threatening': number;
      /**
       * @title hate 值
       * @description OpenAI API 合约中的 hate 值。
       */
      hate: number;
      /**
       * @title hate threatening 值
       * @description OpenAI API 合约中的 hate threatening 值。
       */
      'hate/threatening': number;
      /**
       * @title illicit 值
       * @description OpenAI API 合约中的 illicit 值。
       */
      illicit: number;
      /**
       * @title illicit violent 值
       * @description OpenAI API 合约中的 illicit violent 值。
       */
      'illicit/violent': number;
      /**
       * @title self harm 值
       * @description OpenAI API 合约中的 self harm 值。
       */
      'self-harm': number;
      /**
       * @title self harm instructions 值
       * @description OpenAI API 合约中的 self harm instructions 值。
       */
      'self-harm/instructions': number;
      /**
       * @title self harm intent 值
       * @description OpenAI API 合约中的 self harm intent 值。
       */
      'self-harm/intent': number;
      /**
       * @title sexual 值
       * @description OpenAI API 合约中的 sexual 值。
       */
      sexual: number;
      /**
       * @title sexual minors 值
       * @description OpenAI API 合约中的 sexual minors 值。
       */
      'sexual/minors': number;
      /**
       * @title violence 值
       * @description OpenAI API 合约中的 violence 值。
       */
      violence: number;
      /**
       * @title violence graphic 值
       * @description OpenAI API 合约中的 violence graphic 值。
       */
      'violence/graphic': number
    };
    /**
     * @title flagged 值
     * @description OpenAI API 合约中的 flagged 值。
     */
    flagged: boolean
  }>;
}

/**
 * @title Create Project Service Account Api Key Body 数据结构
 * @description OpenAI API 合约中的 Create Project Service Account Api Key Body 结构定义。
 */
export type CreateProjectServiceAccountApiKeyBody = {
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: string;
  /**
   * @title scopes 值
   * @description OpenAI API 合约中的 scopes 值。
   */
  scopes?: Array<string>;
}

/**
 * @title Create Response 数据结构
 * @description OpenAI API 合约中的 Create Response 结构定义。
 */
export type CreateResponse = any

/**
 * @title Create Run Request 数据结构
 * @description OpenAI API 合约中的 Create Run Request 结构定义。
 */
export type CreateRunRequest = {
  /**
   * @title additional instructions 值
   * @description OpenAI API 合约中的 additional instructions 值。
   */
  additional_instructions?: string;
  /**
   * @title additional messages 值
   * @description OpenAI API 合约中的 additional messages 值。
   */
  additional_messages?: Array<CreateMessageRequest>;
  /**
   * @title assistant id 值
   * @description OpenAI API 合约中的 assistant id 值。
   */
  assistant_id: string;
  /**
   * @title instructions 值
   * @description OpenAI API 合约中的 instructions 值。
   */
  instructions?: string;
  /**
   * @title max completion tokens 值
   * @description OpenAI API 合约中的 max completion tokens 值。
   */
  max_completion_tokens?: number;
  /**
   * @title max prompt tokens 值
   * @description OpenAI API 合约中的 max prompt tokens 值。
   */
  max_prompt_tokens?: number;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title parallel tool calls 值
   * @description OpenAI API 合约中的 parallel tool calls 值。
   */
  parallel_tool_calls?: ParallelToolCalls;
  /**
   * @title reasoning effort 值
   * @description OpenAI API 合约中的 reasoning effort 值。
   */
  reasoning_effort?: ReasoningEffort;
  /**
   * @title response format 值
   * @description OpenAI API 合约中的 response format 值。
   */
  response_format?: AssistantsApiResponseFormatOption;
  /**
   * @title stream 值
   * @description OpenAI API 合约中的 stream 值。
   */
  stream?: boolean;
  /**
   * @title temperature 值
   * @description OpenAI API 合约中的 temperature 值。
   */
  temperature?: number;
  /**
   * @title tool choice 值
   * @description OpenAI API 合约中的 tool choice 值。
   */
  tool_choice?: any;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools?: Array<any>;
  /**
   * @title top p 值
   * @description OpenAI API 合约中的 top p 值。
   */
  top_p?: number;
  /**
   * @title truncation strategy 值
   * @description OpenAI API 合约中的 truncation strategy 值。
   */
  truncation_strategy?: any;
}

/**
 * @title Create Skill Body 数据结构
 * @description OpenAI API 合约中的 Create Skill Body 结构定义。
 */
export type CreateSkillBody = {
  /**
   * @title files 值
   * @description OpenAI API 合约中的 files 值。
   */
  files: any;
}

/**
 * @title Create Skill Version Body 数据结构
 * @description OpenAI API 合约中的 Create Skill Version Body 结构定义。
 */
export type CreateSkillVersionBody = {
  /**
   * @title default 值
   * @description OpenAI API 合约中的 default 值。
   */
  default?: boolean;
  /**
   * @title files 值
   * @description OpenAI API 合约中的 files 值。
   */
  files: any;
}

/**
 * @title Create Speech Request 数据结构
 * @description OpenAI API 合约中的 Create Speech Request 结构定义。
 */
export type CreateSpeechRequest = {
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input: string;
  /**
   * @title instructions 值
   * @description OpenAI API 合约中的 instructions 值。
   */
  instructions?: string;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: any;
  /**
   * @title response format 值
   * @description OpenAI API 合约中的 response format 值。
   */
  response_format?: 'mp3' | 'opus' | 'aac' | 'flac' | 'wav' | 'pcm';
  /**
   * @title speed 值
   * @description OpenAI API 合约中的 speed 值。
   */
  speed?: number;
  /**
   * @title stream format 值
   * @description OpenAI API 合约中的 stream format 值。
   */
  stream_format?: 'sse' | 'audio';
  /**
   * @title voice 值
   * @description OpenAI API 合约中的 voice 值。
   */
  voice: VoiceIdsOrCustomVoice;
}

/**
 * @title Create Speech Response Stream Event 数据结构
 * @description OpenAI API 合约中的 Create Speech Response Stream Event 结构定义。
 */
export type CreateSpeechResponseStreamEvent = any

/**
 * @title Create Spend Alert Body 数据结构
 * @description OpenAI API 合约中的 Create Spend Alert Body 结构定义。
 */
export type CreateSpendAlertBody = {
  /**
   * @title currency 值
   * @description OpenAI API 合约中的 currency 值。
   */
  currency: 'USD';
  /**
   * @title interval 值
   * @description OpenAI API 合约中的 interval 值。
   */
  interval: 'month';
  /**
   * @title notification channel 值
   * @description OpenAI API 合约中的 notification channel 值。
   */
  notification_channel: SpendAlertNotificationChannel;
  /**
   * @title threshold amount 值
   * @description OpenAI API 合约中的 threshold amount 值。
   */
  threshold_amount: number;
}

/**
 * @title Create Thread And Run Request 数据结构
 * @description OpenAI API 合约中的 Create Thread And Run Request 结构定义。
 */
export type CreateThreadAndRunRequest = {
  /**
   * @title assistant id 值
   * @description OpenAI API 合约中的 assistant id 值。
   */
  assistant_id: string;
  /**
   * @title instructions 值
   * @description OpenAI API 合约中的 instructions 值。
   */
  instructions?: string;
  /**
   * @title max completion tokens 值
   * @description OpenAI API 合约中的 max completion tokens 值。
   */
  max_completion_tokens?: number;
  /**
   * @title max prompt tokens 值
   * @description OpenAI API 合约中的 max prompt tokens 值。
   */
  max_prompt_tokens?: number;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title parallel tool calls 值
   * @description OpenAI API 合约中的 parallel tool calls 值。
   */
  parallel_tool_calls?: ParallelToolCalls;
  /**
   * @title response format 值
   * @description OpenAI API 合约中的 response format 值。
   */
  response_format?: AssistantsApiResponseFormatOption;
  /**
   * @title stream 值
   * @description OpenAI API 合约中的 stream 值。
   */
  stream?: boolean;
  /**
   * @title temperature 值
   * @description OpenAI API 合约中的 temperature 值。
   */
  temperature?: number;
  /**
   * @title thread 值
   * @description OpenAI API 合约中的 thread 值。
   */
  thread?: CreateThreadRequest;
  /**
   * @title tool choice 值
   * @description OpenAI API 合约中的 tool choice 值。
   */
  tool_choice?: any;
  /**
   * @title tool resources 值
   * @description OpenAI API 合约中的 tool resources 值。
   */
  tool_resources?: {
    /**
     * @title code interpreter 值
     * @description OpenAI API 合约中的 code interpreter 值。
     */
    code_interpreter?: {
      /**
       * @title file ids 值
       * @description OpenAI API 合约中的 file ids 值。
       */
      file_ids?: Array<string>
    };
    /**
     * @title file search 值
     * @description OpenAI API 合约中的 file search 值。
     */
    file_search?: {
      /**
       * @title vector store ids 值
       * @description OpenAI API 合约中的 vector store ids 值。
       */
      vector_store_ids?: Array<string>
    }
  };
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools?: Array<any>;
  /**
   * @title top p 值
   * @description OpenAI API 合约中的 top p 值。
   */
  top_p?: number;
  /**
   * @title truncation strategy 值
   * @description OpenAI API 合约中的 truncation strategy 值。
   */
  truncation_strategy?: any;
}

/**
 * @title Create Thread Request 数据结构
 * @description OpenAI API 合约中的 Create Thread Request 结构定义。
 */
export type CreateThreadRequest = {
  /**
   * @title messages 值
   * @description OpenAI API 合约中的 messages 值。
   */
  messages?: Array<CreateMessageRequest>;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title tool resources 值
   * @description OpenAI API 合约中的 tool resources 值。
   */
  tool_resources?: any;
}

/**
 * @title Create Transcription Request 数据结构
 * @description OpenAI API 合约中的 Create Transcription Request 结构定义。
 */
export type CreateTranscriptionRequest = {
  /**
   * @title chunking strategy 值
   * @description OpenAI API 合约中的 chunking strategy 值。
   */
  chunking_strategy?: any;
  /**
   * @title file 值
   * @description OpenAI API 合约中的 file 值。
   */
  file: Blob;
  /**
   * @title include 值
   * @description OpenAI API 合约中的 include 值。
   */
  include?: Array<TranscriptionInclude>;
  /**
   * @title keywords 值
   * @description OpenAI API 合约中的 keywords 值。
   */
  keywords?: Array<string>;
  /**
   * @title known speaker names 值
   * @description OpenAI API 合约中的 known speaker names 值。
   */
  known_speaker_names?: Array<string>;
  /**
   * @title known speaker references 值
   * @description OpenAI API 合约中的 known speaker references 值。
   */
  known_speaker_references?: Array<string>;
  /**
   * @title language 值
   * @description OpenAI API 合约中的 language 值。
   */
  language?: string;
  /**
   * @title languages 值
   * @description OpenAI API 合约中的 languages 值。
   */
  languages?: Array<string>;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: any;
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt?: string;
  /**
   * @title response format 值
   * @description OpenAI API 合约中的 response format 值。
   */
  response_format?: AudioResponseFormat;
  /**
   * @title stream 值
   * @description OpenAI API 合约中的 stream 值。
   */
  stream?: any;
  /**
   * @title temperature 值
   * @description OpenAI API 合约中的 temperature 值。
   */
  temperature?: number;
  /**
   * @title timestamp granularities 值
   * @description OpenAI API 合约中的 timestamp granularities 值。
   */
  timestamp_granularities?: Array<'word' | 'segment'>;
}

/**
 * @title Create Transcription Response Diarized Json 数据结构
 * @description OpenAI API 合约中的 Create Transcription Response Diarized Json 结构定义。
 */
export type CreateTranscriptionResponseDiarizedJson = {
  /**
   * @title duration 值
   * @description OpenAI API 合约中的 duration 值。
   */
  duration: number;
  /**
   * @title segments 值
   * @description OpenAI API 合约中的 segments 值。
   */
  segments: Array<TranscriptionDiarizedSegment>;
  /**
   * @title task 值
   * @description OpenAI API 合约中的 task 值。
   */
  task: 'transcribe';
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title usage 值
   * @description OpenAI API 合约中的 usage 值。
   */
  usage?: any;
}

/**
 * @title Create Transcription Response Json 数据结构
 * @description OpenAI API 合约中的 Create Transcription Response Json 结构定义。
 */
export type CreateTranscriptionResponseJson = {
  /**
   * @title languages 值
   * @description OpenAI API 合约中的 languages 值。
   */
  languages?: Array<TranscriptionLanguage>;
  /**
   * @title logprobs 值
   * @description OpenAI API 合约中的 logprobs 值。
   */
  logprobs?: Array<{
    /**
     * @title bytes 值
     * @description OpenAI API 合约中的 bytes 值。
     */
    bytes?: Array<number>;
    /**
     * @title logprob 值
     * @description OpenAI API 合约中的 logprob 值。
     */
    logprob?: number;
    /**
     * @title token 值
     * @description OpenAI API 合约中的 token 值。
     */
    token?: string
  }>;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title usage 值
   * @description OpenAI API 合约中的 usage 值。
   */
  usage?: any;
}

/**
 * @title Create Transcription Response Stream Event 数据结构
 * @description OpenAI API 合约中的 Create Transcription Response Stream Event 结构定义。
 */
export type CreateTranscriptionResponseStreamEvent = any

/**
 * @title Create Transcription Response Verbose Json 数据结构
 * @description OpenAI API 合约中的 Create Transcription Response Verbose Json 结构定义。
 */
export type CreateTranscriptionResponseVerboseJson = {
  /**
   * @title duration 值
   * @description OpenAI API 合约中的 duration 值。
   */
  duration: number;
  /**
   * @title language 值
   * @description OpenAI API 合约中的 language 值。
   */
  language: string;
  /**
   * @title segments 值
   * @description OpenAI API 合约中的 segments 值。
   */
  segments?: Array<TranscriptionSegment>;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title usage 值
   * @description OpenAI API 合约中的 usage 值。
   */
  usage?: TranscriptTextUsageDuration;
  /**
   * @title words 值
   * @description OpenAI API 合约中的 words 值。
   */
  words?: Array<TranscriptionWord>;
}

/**
 * @title Create Translation Request 数据结构
 * @description OpenAI API 合约中的 Create Translation Request 结构定义。
 */
export type CreateTranslationRequest = {
  /**
   * @title file 值
   * @description OpenAI API 合约中的 file 值。
   */
  file: Blob;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: any;
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt?: string;
  /**
   * @title response format 值
   * @description OpenAI API 合约中的 response format 值。
   */
  response_format?: 'json' | 'text' | 'srt' | 'verbose_json' | 'vtt';
  /**
   * @title temperature 值
   * @description OpenAI API 合约中的 temperature 值。
   */
  temperature?: number;
}

/**
 * @title Create Translation Response Json 数据结构
 * @description OpenAI API 合约中的 Create Translation Response Json 结构定义。
 */
export type CreateTranslationResponseJson = {
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
}

/**
 * @title Create Translation Response Verbose Json 数据结构
 * @description OpenAI API 合约中的 Create Translation Response Verbose Json 结构定义。
 */
export type CreateTranslationResponseVerboseJson = {
  /**
   * @title duration 值
   * @description OpenAI API 合约中的 duration 值。
   */
  duration: number;
  /**
   * @title language 值
   * @description OpenAI API 合约中的 language 值。
   */
  language: string;
  /**
   * @title segments 值
   * @description OpenAI API 合约中的 segments 值。
   */
  segments?: Array<TranscriptionSegment>;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
}

/**
 * @title Create Upload Request 数据结构
 * @description OpenAI API 合约中的 Create Upload Request 结构定义。
 */
export type CreateUploadRequest = {
  /**
   * @title bytes 值
   * @description OpenAI API 合约中的 bytes 值。
   */
  bytes: number;
  /**
   * @title expires after 值
   * @description OpenAI API 合约中的 expires after 值。
   */
  expires_after?: FileExpirationAfter;
  /**
   * @title filename 值
   * @description OpenAI API 合约中的 filename 值。
   */
  filename: string;
  /**
   * @title mime type 值
   * @description OpenAI API 合约中的 mime type 值。
   */
  mime_type: string;
  /**
   * @title purpose 值
   * @description OpenAI API 合约中的 purpose 值。
   */
  purpose: 'assistants' | 'batch' | 'fine-tune' | 'vision';
}

/**
 * @title Create Vector Store File Batch Request 数据结构
 * @description OpenAI API 合约中的 Create Vector Store File Batch Request 结构定义。
 */
export type CreateVectorStoreFileBatchRequest = {
  /**
   * @title attributes 值
   * @description OpenAI API 合约中的 attributes 值。
   */
  attributes?: VectorStoreFileAttributes;
  /**
   * @title chunking strategy 值
   * @description OpenAI API 合约中的 chunking strategy 值。
   */
  chunking_strategy?: ChunkingStrategyRequestParam;
  /**
   * @title file ids 值
   * @description OpenAI API 合约中的 file ids 值。
   */
  file_ids?: Array<string>;
  /**
   * @title files 值
   * @description OpenAI API 合约中的 files 值。
   */
  files?: Array<CreateVectorStoreFileRequest>;
}

/**
 * @title Create Vector Store File Request 数据结构
 * @description OpenAI API 合约中的 Create Vector Store File Request 结构定义。
 */
export type CreateVectorStoreFileRequest = {
  /**
   * @title attributes 值
   * @description OpenAI API 合约中的 attributes 值。
   */
  attributes?: VectorStoreFileAttributes;
  /**
   * @title chunking strategy 值
   * @description OpenAI API 合约中的 chunking strategy 值。
   */
  chunking_strategy?: ChunkingStrategyRequestParam;
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id: string;
}

/**
 * @title Create Vector Store Request 数据结构
 * @description OpenAI API 合约中的 Create Vector Store Request 结构定义。
 */
export type CreateVectorStoreRequest = {
  /**
   * @title chunking strategy 值
   * @description OpenAI API 合约中的 chunking strategy 值。
   */
  chunking_strategy?: any;
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description?: string;
  /**
   * @title expires after 值
   * @description OpenAI API 合约中的 expires after 值。
   */
  expires_after?: VectorStoreExpirationAfter;
  /**
   * @title file ids 值
   * @description OpenAI API 合约中的 file ids 值。
   */
  file_ids?: Array<string>;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: string;
}

/**
 * @title Create Video Character Body 数据结构
 * @description OpenAI API 合约中的 Create Video Character Body 结构定义。
 */
export type CreateVideoCharacterBody = {
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title video 值
   * @description OpenAI API 合约中的 video 值。
   */
  video: Blob;
}

/**
 * @title Create Video Edit Json Body 数据结构
 * @description OpenAI API 合约中的 Create Video Edit Json Body 结构定义。
 */
export type CreateVideoEditJsonBody = {
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt: string;
  /**
   * @title video 值
   * @description OpenAI API 合约中的 video 值。
   */
  video: VideoReferenceInputParam;
}

/**
 * @title Create Video Edit Multipart Body 数据结构
 * @description OpenAI API 合约中的 Create Video Edit Multipart Body 结构定义。
 */
export type CreateVideoEditMultipartBody = {
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt: string;
  /**
   * @title video 值
   * @description OpenAI API 合约中的 video 值。
   */
  video: any;
}

/**
 * @title Create Video Extend Json Body 数据结构
 * @description OpenAI API 合约中的 Create Video Extend Json Body 结构定义。
 */
export type CreateVideoExtendJsonBody = {
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt: string;
  /**
   * @title seconds 值
   * @description OpenAI API 合约中的 seconds 值。
   */
  seconds: VideoSeconds;
  /**
   * @title video 值
   * @description OpenAI API 合约中的 video 值。
   */
  video: VideoReferenceInputParam;
}

/**
 * @title Create Video Extend Multipart Body 数据结构
 * @description OpenAI API 合约中的 Create Video Extend Multipart Body 结构定义。
 */
export type CreateVideoExtendMultipartBody = {
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt: string;
  /**
   * @title seconds 值
   * @description OpenAI API 合约中的 seconds 值。
   */
  seconds: VideoSeconds;
  /**
   * @title video 值
   * @description OpenAI API 合约中的 video 值。
   */
  video: any;
}

/**
 * @title Create Video Json Body 数据结构
 * @description OpenAI API 合约中的 Create Video Json Body 结构定义。
 */
export type CreateVideoJsonBody = {
  /**
   * @title input reference 值
   * @description OpenAI API 合约中的 input reference 值。
   */
  input_reference?: imagerefparam2;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: VideoModel;
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt: string;
  /**
   * @title seconds 值
   * @description OpenAI API 合约中的 seconds 值。
   */
  seconds?: VideoSeconds;
  /**
   * @title size 值
   * @description OpenAI API 合约中的 size 值。
   */
  size?: VideoSize;
}

/**
 * @title Create Video Multipart Body 数据结构
 * @description OpenAI API 合约中的 Create Video Multipart Body 结构定义。
 */
export type CreateVideoMultipartBody = {
  /**
   * @title input reference 值
   * @description OpenAI API 合约中的 input reference 值。
   */
  input_reference?: any;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: VideoModel;
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt: string;
  /**
   * @title seconds 值
   * @description OpenAI API 合约中的 seconds 值。
   */
  seconds?: VideoSeconds;
  /**
   * @title size 值
   * @description OpenAI API 合约中的 size 值。
   */
  size?: VideoSize;
}

/**
 * @title Create Video Remix Body 数据结构
 * @description OpenAI API 合约中的 Create Video Remix Body 结构定义。
 */
export type CreateVideoRemixBody = {
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt: string;
}

/**
 * @title Create Voice Consent Request 数据结构
 * @description OpenAI API 合约中的 Create Voice Consent Request 结构定义。
 */
export type CreateVoiceConsentRequest = {
  /**
   * @title language 值
   * @description OpenAI API 合约中的 language 值。
   */
  language: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title recording 值
   * @description OpenAI API 合约中的 recording 值。
   */
  recording: Blob;
}

/**
 * @title Create Voice Request 数据结构
 * @description OpenAI API 合约中的 Create Voice Request 结构定义。
 */
export type CreateVoiceRequest = {
  /**
   * @title audio sample 值
   * @description OpenAI API 合约中的 audio sample 值。
   */
  audio_sample: Blob;
  /**
   * @title consent 值
   * @description OpenAI API 合约中的 consent 值。
   */
  consent: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
}

/**
 * @title Custom Grammar Format Param 数据结构
 * @description OpenAI API 合约中的 Custom Grammar Format Param 结构定义。
 */
export type CustomGrammarFormatParam = {
  /**
   * @title definition 值
   * @description OpenAI API 合约中的 definition 值。
   */
  definition: string;
  /**
   * @title syntax 值
   * @description OpenAI API 合约中的 syntax 值。
   */
  syntax: GrammarSyntax1;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'grammar';
}

/**
 * @title Custom Text Format Param 数据结构
 * @description OpenAI API 合约中的 Custom Text Format Param 结构定义。
 */
export type CustomTextFormatParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'text';
}

/**
 * @title Custom Tool Call 数据结构
 * @description OpenAI API 合约中的 Custom Tool Call 结构定义。
 */
export type CustomToolCall = {
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title namespace 值
   * @description OpenAI API 合约中的 namespace 值。
   */
  namespace?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'custom_tool_call';
}

/**
 * @title Custom Tool Call Output 数据结构
 * @description OpenAI API 合约中的 Custom Tool Call Output 结构定义。
 */
export type CustomToolCallOutput = {
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'custom_tool_call_output';
}

/**
 * @title Custom Tool Call Output Resource 数据结构
 * @description OpenAI API 合约中的 Custom Tool Call Output Resource 结构定义。
 */
export type CustomToolCallOutputResource = any

/**
 * @title Custom Tool Call Resource 数据结构
 * @description OpenAI API 合约中的 Custom Tool Call Resource 结构定义。
 */
export type CustomToolCallResource = any

/**
 * @title Custom Tool Chat Completions 数据结构
 * @description OpenAI API 合约中的 Custom Tool Chat Completions 结构定义。
 */
export type CustomToolChatCompletions = {
  /**
   * @title custom 值
   * @description OpenAI API 合约中的 custom 值。
   */
  custom: {
    /**
     * @title description 值
     * @description OpenAI API 合约中的 description 值。
     */
    description?: string;
    /**
     * @title format 值
     * @description OpenAI API 合约中的 format 值。
     */
    format?: any;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name: string
  };
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'custom';
}

/**
 * @title Custom Tool Param 数据结构
 * @description OpenAI API 合约中的 Custom Tool Param 结构定义。
 */
export type CustomToolParam = {
  /**
   * @title allowed callers 值
   * @description OpenAI API 合约中的 allowed callers 值。
   */
  allowed_callers?: any;
  /**
   * @title defer loading 值
   * @description OpenAI API 合约中的 defer loading 值。
   */
  defer_loading?: boolean;
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description?: string;
  /**
   * @title format 值
   * @description OpenAI API 合约中的 format 值。
   */
  format?: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'custom';
}

/**
 * @title Delete Assistant Response 数据结构
 * @description OpenAI API 合约中的 Delete Assistant Response 结构定义。
 */
export type DeleteAssistantResponse = {
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
  object: 'assistant.deleted';
}

/**
 * @title Delete Certificate Response 数据结构
 * @description OpenAI API 合约中的 Delete Certificate Response 结构定义。
 */
export type DeleteCertificateResponse = {
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'certificate.deleted';
}

/**
 * @title Delete File Response 数据结构
 * @description OpenAI API 合约中的 Delete File Response 结构定义。
 */
export type DeleteFileResponse = {
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
  object: 'file';
}

/**
 * @title Delete Fine Tuning Checkpoint Permission Response 数据结构
 * @description OpenAI API 合约中的 Delete Fine Tuning Checkpoint Permission Response 结构定义。
 */
export type DeleteFineTuningCheckpointPermissionResponse = {
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
  object: 'checkpoint.permission';
}

/**
 * @title Delete Message Response 数据结构
 * @description OpenAI API 合约中的 Delete Message Response 结构定义。
 */
export type DeleteMessageResponse = {
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
  object: 'thread.message.deleted';
}

/**
 * @title Delete Model Response 数据结构
 * @description OpenAI API 合约中的 Delete Model Response 结构定义。
 */
export type DeleteModelResponse = {
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
  object: string;
}

/**
 * @title Delete Thread Response 数据结构
 * @description OpenAI API 合约中的 Delete Thread Response 结构定义。
 */
export type DeleteThreadResponse = {
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
  object: 'thread.deleted';
}

/**
 * @title Delete Vector Store File Response 数据结构
 * @description OpenAI API 合约中的 Delete Vector Store File Response 结构定义。
 */
export type DeleteVectorStoreFileResponse = {
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
  object: 'vector_store.file.deleted';
}

/**
 * @title Delete Vector Store Response 数据结构
 * @description OpenAI API 合约中的 Delete Vector Store Response 结构定义。
 */
export type DeleteVectorStoreResponse = {
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
  object: 'vector_store.deleted';
}

/**
 * @title Deleted Conversation 数据结构
 * @description OpenAI API 合约中的 Deleted Conversation 结构定义。
 */
export type DeletedConversation = any

/**
 * @title Deleted Conversation Resource 数据结构
 * @description OpenAI API 合约中的 Deleted Conversation Resource 结构定义。
 */
export type DeletedConversationResource = {
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
  object: 'conversation.deleted';
}

/**
 * @title Deleted Role Assignment Resource 数据结构
 * @description OpenAI API 合约中的 Deleted Role Assignment Resource 结构定义。
 */
export type DeletedRoleAssignmentResource = {
  /**
   * @title deleted 值
   * @description OpenAI API 合约中的 deleted 值。
   */
  deleted: boolean;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: string;
}

/**
 * @title Deleted Skill Resource 数据结构
 * @description OpenAI API 合约中的 Deleted Skill Resource 结构定义。
 */
export type DeletedSkillResource = {
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
  object: 'skill.deleted';
}

/**
 * @title Deleted Skill Version Resource 数据结构
 * @description OpenAI API 合约中的 Deleted Skill Version Resource 结构定义。
 */
export type DeletedSkillVersionResource = {
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
  object: 'skill.version.deleted';
  /**
   * @title version 值
   * @description OpenAI API 合约中的 version 值。
   */
  version: string;
}

/**
 * @title Deleted Thread Resource 数据结构
 * @description OpenAI API 合约中的 Deleted Thread Resource 结构定义。
 */
export type DeletedThreadResource = {
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
  object: 'chatkit.thread.deleted';
}

/**
 * @title Deleted Video Resource 数据结构
 * @description OpenAI API 合约中的 Deleted Video Resource 结构定义。
 */
export type DeletedVideoResource = {
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
  object: 'video.deleted';
}

/**
 * @title Detail Enum 数据结构
 * @description OpenAI API 合约中的 Detail Enum 结构定义。
 */
export type DetailEnum = 'low' | 'high' | 'auto' | 'original'

/**
 * @title Direct Tool Call Caller 数据结构
 * @description OpenAI API 合约中的 Direct Tool Call Caller 结构定义。
 */
export type DirectToolCallCaller = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'direct';
}

/**
 * @title Direct Tool Call Caller Param 数据结构
 * @description OpenAI API 合约中的 Direct Tool Call Caller Param 结构定义。
 */
export type DirectToolCallCallerParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'direct';
}

/**
 * @title Done Event 数据结构
 * @description OpenAI API 合约中的 Done Event 结构定义。
 */
export type DoneEvent = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: '[DONE]';
  /**
   * @title event 值
   * @description OpenAI API 合约中的 event 值。
   */
  event: 'done';
}

/**
 * @title Double Click Action 数据结构
 * @description OpenAI API 合约中的 Double Click Action 结构定义。
 */
export type DoubleClickAction = {
  /**
   * @title keys 值
   * @description OpenAI API 合约中的 keys 值。
   */
  keys: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'double_click';
  /**
   * @title x 值
   * @description OpenAI API 合约中的 x 值。
   */
  x: number;
  /**
   * @title y 值
   * @description OpenAI API 合约中的 y 值。
   */
  y: number;
}

/**
 * @title Drag Param 数据结构
 * @description OpenAI API 合约中的 Drag Param 结构定义。
 */
export type DragParam = {
  /**
   * @title keys 值
   * @description OpenAI API 合约中的 keys 值。
   */
  keys?: any;
  /**
   * @title path 值
   * @description OpenAI API 合约中的 path 值。
   */
  path: Array<CoordParam>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'drag';
}

/**
 * @title Drag Point 数据结构
 * @description OpenAI API 合约中的 Drag Point 结构定义。
 */
export type DragPoint = {
  /**
   * @title x 值
   * @description OpenAI API 合约中的 x 值。
   */
  x: number;
  /**
   * @title y 值
   * @description OpenAI API 合约中的 y 值。
   */
  y: number;
}

/**
 * @title Easy Input Message 数据结构
 * @description OpenAI API 合约中的 Easy Input Message 结构定义。
 */
export type EasyInputMessage = {
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: any;
  /**
   * @title phase 值
   * @description OpenAI API 合约中的 phase 值。
   */
  phase?: any;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'user' | 'assistant' | 'system' | 'developer';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type?: 'message';
}

/**
 * @title Edit Image Body Json Param 数据结构
 * @description OpenAI API 合约中的 Edit Image Body Json Param 结构定义。
 */
export type EditImageBodyJsonParam = {
  /**
   * @title background 值
   * @description OpenAI API 合约中的 background 值。
   */
  background?: any;
  /**
   * @title images 值
   * @description OpenAI API 合约中的 images 值。
   */
  images: Array<ImageRefParam>;
  /**
   * @title input fidelity 值
   * @description OpenAI API 合约中的 input fidelity 值。
   */
  input_fidelity?: any;
  /**
   * @title mask 值
   * @description OpenAI API 合约中的 mask 值。
   */
  mask?: ImageRefParam;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title moderation 值
   * @description OpenAI API 合约中的 moderation 值。
   */
  moderation?: any;
  /**
   * @title n 值
   * @description OpenAI API 合约中的 n 值。
   */
  n?: any;
  /**
   * @title output compression 值
   * @description OpenAI API 合约中的 output compression 值。
   */
  output_compression?: any;
  /**
   * @title output format 值
   * @description OpenAI API 合约中的 output format 值。
   */
  output_format?: any;
  /**
   * @title partial images 值
   * @description OpenAI API 合约中的 partial images 值。
   */
  partial_images?: PartialImages;
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt: string;
  /**
   * @title quality 值
   * @description OpenAI API 合约中的 quality 值。
   */
  quality?: any;
  /**
   * @title size 值
   * @description OpenAI API 合约中的 size 值。
   */
  size?: any;
  /**
   * @title stream 值
   * @description OpenAI API 合约中的 stream 值。
   */
  stream?: any;
  /**
   * @title user 值
   * @description OpenAI API 合约中的 user 值。
   */
  user?: string;
}

/**
 * @title Embedding 数据结构
 * @description OpenAI API 合约中的 Embedding 结构定义。
 */
export type Embedding = {
  /**
   * @title embedding 值
   * @description OpenAI API 合约中的 embedding 值。
   */
  embedding: Array<number>;
  /**
   * @title index 值
   * @description OpenAI API 合约中的 index 值。
   */
  index: number;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'embedding';
}

/**
 * @title Empty Model Param 数据结构
 * @description OpenAI API 合约中的 Empty Model Param 结构定义。
 */
export type EmptyModelParam = {

}

/**
 * @title Error 数据结构
 * @description OpenAI API 合约中的 Error 结构定义。
 */
export type Error = {
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: any;
  /**
   * @title message 值
   * @description OpenAI API 合约中的 message 值。
   */
  message: string;
  /**
   * @title param 值
   * @description OpenAI API 合约中的 param 值。
   */
  param: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: string;
}

/**
 * @title Error Event 数据结构
 * @description OpenAI API 合约中的 Error Event 结构定义。
 */
export type ErrorEvent = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Error;
  /**
   * @title event 值
   * @description OpenAI API 合约中的 event 值。
   */
  event: 'error';
}

/**
 * @title Error Payload 数据结构
 * @description OpenAI API 合约中的 Error Payload 结构定义。
 */
export type ErrorPayload = {
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: any;
  /**
   * @title headers 值
   * @description OpenAI API 合约中的 headers 值。
   */
  headers?: Record<any, string>;
  /**
   * @title message 值
   * @description OpenAI API 合约中的 message 值。
   */
  message: string;
  /**
   * @title param 值
   * @description OpenAI API 合约中的 param 值。
   */
  param: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: string;
}

/**
 * @title Error Response 数据结构
 * @description OpenAI API 合约中的 Error Response 结构定义。
 */
export type ErrorResponse = {
  /**
   * @title error 值
   * @description OpenAI API 合约中的 error 值。
   */
  error: Error;
}

/**
 * @title Eval 数据结构
 * @description OpenAI API 合约中的 Eval 结构定义。
 */
export type Eval = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title data source config 值
   * @description OpenAI API 合约中的 data source config 值。
   */
  data_source_config: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata: Metadata;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'eval';
  /**
   * @title testing criteria 值
   * @description OpenAI API 合约中的 testing criteria 值。
   */
  testing_criteria: Array<any>;
}

/**
 * @title Eval Api Error 数据结构
 * @description OpenAI API 合约中的 Eval Api Error 结构定义。
 */
export type EvalApiError = {
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: string;
  /**
   * @title message 值
   * @description OpenAI API 合约中的 message 值。
   */
  message: string;
}

/**
 * @title Eval Custom Data Source Config 数据结构
 * @description OpenAI API 合约中的 Eval Custom Data Source Config 结构定义。
 */
export type EvalCustomDataSourceConfig = {
  /**
   * @title schema 值
   * @description OpenAI API 合约中的 schema 值。
   */
  schema: Record<any, any>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'custom';
}

/**
 * @title Eval Grader Label Model 数据结构
 * @description OpenAI API 合约中的 Eval Grader Label Model 结构定义。
 */
export type EvalGraderLabelModel = any

/**
 * @title Eval Grader Python 数据结构
 * @description OpenAI API 合约中的 Eval Grader Python 结构定义。
 */
export type EvalGraderPython = any

/**
 * @title Eval Grader Score Model 数据结构
 * @description OpenAI API 合约中的 Eval Grader Score Model 结构定义。
 */
export type EvalGraderScoreModel = any

/**
 * @title Eval Grader String Check 数据结构
 * @description OpenAI API 合约中的 Eval Grader String Check 结构定义。
 */
export type EvalGraderStringCheck = any

/**
 * @title Eval Grader Text Similarity 数据结构
 * @description OpenAI API 合约中的 Eval Grader Text Similarity 结构定义。
 */
export type EvalGraderTextSimilarity = any

/**
 * @title Eval Item 数据结构
 * @description OpenAI API 合约中的 Eval Item 结构定义。
 */
export type EvalItem = {
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: EvalItemContent;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'user' | 'assistant' | 'system' | 'developer';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type?: 'message';
}

/**
 * @title Eval Item Content 数据结构
 * @description OpenAI API 合约中的 Eval Item Content 结构定义。
 */
export type EvalItemContent = any

/**
 * @title Eval Item Content Array 数据结构
 * @description OpenAI API 合约中的 Eval Item Content Array 结构定义。
 */
export type EvalItemContentArray = Array<EvalItemContentItem>

/**
 * @title Eval Item Content Item 数据结构
 * @description OpenAI API 合约中的 Eval Item Content Item 结构定义。
 */
export type EvalItemContentItem = any

/**
 * @title Eval Item Content Output Text 数据结构
 * @description OpenAI API 合约中的 Eval Item Content Output Text 结构定义。
 */
export type EvalItemContentOutputText = {
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'output_text';
}

/**
 * @title Eval Item Content Text 数据结构
 * @description OpenAI API 合约中的 Eval Item Content Text 结构定义。
 */
export type EvalItemContentText = string

/**
 * @title Eval Item Input Image 数据结构
 * @description OpenAI API 合约中的 Eval Item Input Image 结构定义。
 */
export type EvalItemInputImage = {
  /**
   * @title detail 值
   * @description OpenAI API 合约中的 detail 值。
   */
  detail?: string;
  /**
   * @title image url 值
   * @description OpenAI API 合约中的 image url 值。
   */
  image_url: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_image';
}

/**
 * @title Eval Jsonl File Content Source 数据结构
 * @description OpenAI API 合约中的 Eval Jsonl File Content Source 结构定义。
 */
export type EvalJsonlFileContentSource = {
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: Array<{
    /**
     * @title item 值
     * @description OpenAI API 合约中的 item 值。
     */
    item: Record<any, any>;
    /**
     * @title sample 值
     * @description OpenAI API 合约中的 sample 值。
     */
    sample?: Record<any, any>
  }>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file_content';
}

/**
 * @title Eval Jsonl File Id Source 数据结构
 * @description OpenAI API 合约中的 Eval Jsonl File Id Source 结构定义。
 */
export type EvalJsonlFileIdSource = {
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file_id';
}

/**
 * @title Eval List 数据结构
 * @description OpenAI API 合约中的 Eval List 结构定义。
 */
export type EvalList = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<Eval>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id: string;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Eval Logs Data Source Config 数据结构
 * @description OpenAI API 合约中的 Eval Logs Data Source Config 结构定义。
 */
export type EvalLogsDataSourceConfig = {
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title schema 值
   * @description OpenAI API 合约中的 schema 值。
   */
  schema: Record<any, any>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'logs';
}

/**
 * @title Eval Responses Source 数据结构
 * @description OpenAI API 合约中的 Eval Responses Source 结构定义。
 */
export type EvalResponsesSource = {
  /**
   * @title created after 值
   * @description OpenAI API 合约中的 created after 值。
   */
  created_after?: any;
  /**
   * @title created before 值
   * @description OpenAI API 合约中的 created before 值。
   */
  created_before?: any;
  /**
   * @title instructions search 值
   * @description OpenAI API 合约中的 instructions search 值。
   */
  instructions_search?: any;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: any;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title reasoning effort 值
   * @description OpenAI API 合约中的 reasoning effort 值。
   */
  reasoning_effort?: any;
  /**
   * @title temperature 值
   * @description OpenAI API 合约中的 temperature 值。
   */
  temperature?: any;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools?: any;
  /**
   * @title top p 值
   * @description OpenAI API 合约中的 top p 值。
   */
  top_p?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'responses';
  /**
   * @title users 值
   * @description OpenAI API 合约中的 users 值。
   */
  users?: any;
}

/**
 * @title Eval Run 数据结构
 * @description OpenAI API 合约中的 Eval Run 结构定义。
 */
export type EvalRun = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title data source 值
   * @description OpenAI API 合约中的 data source 值。
   */
  data_source: any;
  /**
   * @title error 值
   * @description OpenAI API 合约中的 error 值。
   */
  error: EvalApiError;
  /**
   * @title eval id 值
   * @description OpenAI API 合约中的 eval id 值。
   */
  eval_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata: Metadata;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'eval.run';
  /**
   * @title per model usage 值
   * @description OpenAI API 合约中的 per model usage 值。
   */
  per_model_usage: Array<{
    /**
     * @title cached tokens 值
     * @description OpenAI API 合约中的 cached tokens 值。
     */
    cached_tokens: number;
    /**
     * @title completion tokens 值
     * @description OpenAI API 合约中的 completion tokens 值。
     */
    completion_tokens: number;
    /**
     * @title invocation count 值
     * @description OpenAI API 合约中的 invocation count 值。
     */
    invocation_count: number;
    /**
     * @title model name 值
     * @description OpenAI API 合约中的 model name 值。
     */
    model_name: string;
    /**
     * @title prompt tokens 值
     * @description OpenAI API 合约中的 prompt tokens 值。
     */
    prompt_tokens: number;
    /**
     * @title total tokens 值
     * @description OpenAI API 合约中的 total tokens 值。
     */
    total_tokens: number
  }>;
  /**
   * @title per testing criteria results 值
   * @description OpenAI API 合约中的 per testing criteria results 值。
   */
  per_testing_criteria_results: Array<{
    /**
     * @title failed 值
     * @description OpenAI API 合约中的 failed 值。
     */
    failed: number;
    /**
     * @title passed 值
     * @description OpenAI API 合约中的 passed 值。
     */
    passed: number;
    /**
     * @title testing criteria 值
     * @description OpenAI API 合约中的 testing criteria 值。
     */
    testing_criteria: string
  }>;
  /**
   * @title report url 值
   * @description OpenAI API 合约中的 report url 值。
   */
  report_url: string;
  /**
   * @title result counts 值
   * @description OpenAI API 合约中的 result counts 值。
   */
  result_counts: {
    /**
     * @title errored 值
     * @description OpenAI API 合约中的 errored 值。
     */
    errored: number;
    /**
     * @title failed 值
     * @description OpenAI API 合约中的 failed 值。
     */
    failed: number;
    /**
     * @title passed 值
     * @description OpenAI API 合约中的 passed 值。
     */
    passed: number;
    /**
     * @title total 值
     * @description OpenAI API 合约中的 total 值。
     */
    total: number
  };
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: string;
}

/**
 * @title Eval Run List 数据结构
 * @description OpenAI API 合约中的 Eval Run List 结构定义。
 */
export type EvalRunList = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<EvalRun>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id: string;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Eval Run Output Item 数据结构
 * @description OpenAI API 合约中的 Eval Run Output Item 结构定义。
 */
export type EvalRunOutputItem = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title datasource item 值
   * @description OpenAI API 合约中的 datasource item 值。
   */
  datasource_item: Record<any, any>;
  /**
   * @title datasource item id 值
   * @description OpenAI API 合约中的 datasource item id 值。
   */
  datasource_item_id: number;
  /**
   * @title eval id 值
   * @description OpenAI API 合约中的 eval id 值。
   */
  eval_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'eval.run.output_item';
  /**
   * @title results 值
   * @description OpenAI API 合约中的 results 值。
   */
  results: Array<EvalRunOutputItemResult>;
  /**
   * @title run id 值
   * @description OpenAI API 合约中的 run id 值。
   */
  run_id: string;
  /**
   * @title sample 值
   * @description OpenAI API 合约中的 sample 值。
   */
  sample: {
    /**
     * @title error 值
     * @description OpenAI API 合约中的 error 值。
     */
    error: EvalApiError;
    /**
     * @title finish reason 值
     * @description OpenAI API 合约中的 finish reason 值。
     */
    finish_reason: string;
    /**
     * @title input 值
     * @description OpenAI API 合约中的 input 值。
     */
    input: Array<{
      /**
       * @title content 值
       * @description OpenAI API 合约中的 content 值。
       */
      content: string;
      /**
       * @title role 值
       * @description OpenAI API 合约中的 role 值。
       */
      role: string
    }>;
    /**
     * @title max completion tokens 值
     * @description OpenAI API 合约中的 max completion tokens 值。
     */
    max_completion_tokens: number;
    /**
     * @title model 值
     * @description OpenAI API 合约中的 model 值。
     */
    model: string;
    /**
     * @title output 值
     * @description OpenAI API 合约中的 output 值。
     */
    output: Array<{
      /**
       * @title content 值
       * @description OpenAI API 合约中的 content 值。
       */
      content?: string;
      /**
       * @title role 值
       * @description OpenAI API 合约中的 role 值。
       */
      role?: string
    }>;
    /**
     * @title seed 值
     * @description OpenAI API 合约中的 seed 值。
     */
    seed: number;
    /**
     * @title temperature 值
     * @description OpenAI API 合约中的 temperature 值。
     */
    temperature: number;
    /**
     * @title top p 值
     * @description OpenAI API 合约中的 top p 值。
     */
    top_p: number;
    /**
     * @title usage 值
     * @description OpenAI API 合约中的 usage 值。
     */
    usage: {
      /**
       * @title cached tokens 值
       * @description OpenAI API 合约中的 cached tokens 值。
       */
      cached_tokens: number;
      /**
       * @title completion tokens 值
       * @description OpenAI API 合约中的 completion tokens 值。
       */
      completion_tokens: number;
      /**
       * @title prompt tokens 值
       * @description OpenAI API 合约中的 prompt tokens 值。
       */
      prompt_tokens: number;
      /**
       * @title total tokens 值
       * @description OpenAI API 合约中的 total tokens 值。
       */
      total_tokens: number
    }
  };
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: string;
}

/**
 * @title Eval Run Output Item List 数据结构
 * @description OpenAI API 合约中的 Eval Run Output Item List 结构定义。
 */
export type EvalRunOutputItemList = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<EvalRunOutputItem>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id: string;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Eval Run Output Item Result 数据结构
 * @description OpenAI API 合约中的 Eval Run Output Item Result 结构定义。
 */
export type EvalRunOutputItemResult = {
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title passed 值
   * @description OpenAI API 合约中的 passed 值。
   */
  passed: boolean;
  /**
   * @title sample 值
   * @description OpenAI API 合约中的 sample 值。
   */
  sample?: any;
  /**
   * @title score 值
   * @description OpenAI API 合约中的 score 值。
   */
  score: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type?: string;
}

/**
 * @title Eval Stored Completions Data Source Config 数据结构
 * @description OpenAI API 合约中的 Eval Stored Completions Data Source Config 结构定义。
 */
export type EvalStoredCompletionsDataSourceConfig = {
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title schema 值
   * @description OpenAI API 合约中的 schema 值。
   */
  schema: Record<any, any>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'stored_completions';
}

/**
 * @title Eval Stored Completions Source 数据结构
 * @description OpenAI API 合约中的 Eval Stored Completions Source 结构定义。
 */
export type EvalStoredCompletionsSource = {
  /**
   * @title created after 值
   * @description OpenAI API 合约中的 created after 值。
   */
  created_after?: any;
  /**
   * @title created before 值
   * @description OpenAI API 合约中的 created before 值。
   */
  created_before?: any;
  /**
   * @title limit 值
   * @description OpenAI API 合约中的 limit 值。
   */
  limit?: any;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'stored_completions';
}

/**
 * @title Expires After Param 数据结构
 * @description OpenAI API 合约中的 Expires After Param 结构定义。
 */
export type ExpiresAfterParam = {
  /**
   * @title anchor 值
   * @description OpenAI API 合约中的 anchor 值。
   */
  anchor: 'created_at';
  /**
   * @title seconds 值
   * @description OpenAI API 合约中的 seconds 值。
   */
  seconds: number;
}

/**
 * @title File Annotation 数据结构
 * @description OpenAI API 合约中的 File Annotation 结构定义。
 */
export type FileAnnotation = {
  /**
   * @title source 值
   * @description OpenAI API 合约中的 source 值。
   */
  source: FileAnnotationSource;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file';
}

/**
 * @title File Annotation Source 数据结构
 * @description OpenAI API 合约中的 File Annotation Source 结构定义。
 */
export type FileAnnotationSource = {
  /**
   * @title filename 值
   * @description OpenAI API 合约中的 filename 值。
   */
  filename: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file';
}

/**
 * @title File Citation Body 数据结构
 * @description OpenAI API 合约中的 File Citation Body 结构定义。
 */
export type FileCitationBody = {
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id: string;
  /**
   * @title filename 值
   * @description OpenAI API 合约中的 filename 值。
   */
  filename: string;
  /**
   * @title index 值
   * @description OpenAI API 合约中的 index 值。
   */
  index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file_citation';
}

/**
 * @title File Citation Param 数据结构
 * @description OpenAI API 合约中的 File Citation Param 结构定义。
 */
export type FileCitationParam = {
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id: string;
  /**
   * @title filename 值
   * @description OpenAI API 合约中的 filename 值。
   */
  filename: string;
  /**
   * @title index 值
   * @description OpenAI API 合约中的 index 值。
   */
  index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file_citation';
}

/**
 * @title File Detail Enum 数据结构
 * @description OpenAI API 合约中的 File Detail Enum 结构定义。
 */
export type FileDetailEnum = 'auto' | 'low' | 'high'

/**
 * @title File Expiration After 数据结构
 * @description OpenAI API 合约中的 File Expiration After 结构定义。
 */
export type FileExpirationAfter = {
  /**
   * @title anchor 值
   * @description OpenAI API 合约中的 anchor 值。
   */
  anchor: 'created_at';
  /**
   * @title seconds 值
   * @description OpenAI API 合约中的 seconds 值。
   */
  seconds: number;
}

/**
 * @title File Input Detail 数据结构
 * @description OpenAI API 合约中的 File Input Detail 结构定义。
 */
export type FileInputDetail = 'auto' | 'low' | 'high'

/**
 * @title File Path 数据结构
 * @description OpenAI API 合约中的 File Path 结构定义。
 */
export type FilePath = {
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id: string;
  /**
   * @title index 值
   * @description OpenAI API 合约中的 index 值。
   */
  index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file_path';
}

/**
 * @title File Search Ranker 数据结构
 * @description OpenAI API 合约中的 File Search Ranker 结构定义。
 */
export type FileSearchRanker = 'auto' | 'default_2024_08_21'

/**
 * @title File Search Ranking Options 数据结构
 * @description OpenAI API 合约中的 File Search Ranking Options 结构定义。
 */
export type FileSearchRankingOptions = {
  /**
   * @title ranker 值
   * @description OpenAI API 合约中的 ranker 值。
   */
  ranker?: FileSearchRanker;
  /**
   * @title score threshold 值
   * @description OpenAI API 合约中的 score threshold 值。
   */
  score_threshold: number;
}

/**
 * @title File Search Tool 数据结构
 * @description OpenAI API 合约中的 File Search Tool 结构定义。
 */
export type FileSearchTool = {
  /**
   * @title filters 值
   * @description OpenAI API 合约中的 filters 值。
   */
  filters?: any;
  /**
   * @title max num results 值
   * @description OpenAI API 合约中的 max num results 值。
   */
  max_num_results?: number;
  /**
   * @title ranking options 值
   * @description OpenAI API 合约中的 ranking options 值。
   */
  ranking_options?: RankingOptions;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file_search';
  /**
   * @title vector store ids 值
   * @description OpenAI API 合约中的 vector store ids 值。
   */
  vector_store_ids: Array<string>;
}

/**
 * @title File Search Tool Call 数据结构
 * @description OpenAI API 合约中的 File Search Tool Call 结构定义。
 */
export type FileSearchToolCall = {
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title queries 值
   * @description OpenAI API 合约中的 queries 值。
   */
  queries: Array<string>;
  /**
   * @title results 值
   * @description OpenAI API 合约中的 results 值。
   */
  results?: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'in_progress' | 'searching' | 'completed' | 'incomplete' | 'failed';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file_search_call';
}

/**
 * @title File Upload Param 数据结构
 * @description OpenAI API 合约中的 File Upload Param 结构定义。
 */
export type FileUploadParam = {
  /**
   * @title enabled 值
   * @description OpenAI API 合约中的 enabled 值。
   */
  enabled?: boolean;
  /**
   * @title max file size 值
   * @description OpenAI API 合约中的 max file size 值。
   */
  max_file_size?: number;
  /**
   * @title max files 值
   * @description OpenAI API 合约中的 max files 值。
   */
  max_files?: number;
}

/**
 * @title Filters 数据结构
 * @description OpenAI API 合约中的 Filters 结构定义。
 */
export type Filters = any

/**
 * @title Fine Tune Chat Completion Request Assistant Message 数据结构
 * @description OpenAI API 合约中的 Fine Tune Chat Completion Request Assistant Message 结构定义。
 */
export type FineTuneChatCompletionRequestAssistantMessage = any

/**
 * @title Fine Tune DPOHyperparameters 数据结构
 * @description OpenAI API 合约中的 Fine Tune DPOHyperparameters 结构定义。
 */
export type FineTuneDPOHyperparameters = {
  /**
   * @title batch size 值
   * @description OpenAI API 合约中的 batch size 值。
   */
  batch_size?: any;
  /**
   * @title beta 值
   * @description OpenAI API 合约中的 beta 值。
   */
  beta?: any;
  /**
   * @title learning rate multiplier 值
   * @description OpenAI API 合约中的 learning rate multiplier 值。
   */
  learning_rate_multiplier?: any;
  /**
   * @title n epochs 值
   * @description OpenAI API 合约中的 n epochs 值。
   */
  n_epochs?: any;
}

/**
 * @title Fine Tune DPOMethod 数据结构
 * @description OpenAI API 合约中的 Fine Tune DPOMethod 结构定义。
 */
export type FineTuneDPOMethod = {
  /**
   * @title hyperparameters 值
   * @description OpenAI API 合约中的 hyperparameters 值。
   */
  hyperparameters?: FineTuneDPOHyperparameters;
}

/**
 * @title Fine Tune Method 数据结构
 * @description OpenAI API 合约中的 Fine Tune Method 结构定义。
 */
export type FineTuneMethod = {
  /**
   * @title dpo 值
   * @description OpenAI API 合约中的 dpo 值。
   */
  dpo?: FineTuneDPOMethod;
  /**
   * @title reinforcement 值
   * @description OpenAI API 合约中的 reinforcement 值。
   */
  reinforcement?: FineTuneReinforcementMethod;
  /**
   * @title supervised 值
   * @description OpenAI API 合约中的 supervised 值。
   */
  supervised?: FineTuneSupervisedMethod;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'supervised' | 'dpo' | 'reinforcement';
}

/**
 * @title Fine Tune Reinforcement Hyperparameters 数据结构
 * @description OpenAI API 合约中的 Fine Tune Reinforcement Hyperparameters 结构定义。
 */
export type FineTuneReinforcementHyperparameters = {
  /**
   * @title batch size 值
   * @description OpenAI API 合约中的 batch size 值。
   */
  batch_size?: any;
  /**
   * @title compute multiplier 值
   * @description OpenAI API 合约中的 compute multiplier 值。
   */
  compute_multiplier?: any;
  /**
   * @title eval interval 值
   * @description OpenAI API 合约中的 eval interval 值。
   */
  eval_interval?: any;
  /**
   * @title eval samples 值
   * @description OpenAI API 合约中的 eval samples 值。
   */
  eval_samples?: any;
  /**
   * @title learning rate multiplier 值
   * @description OpenAI API 合约中的 learning rate multiplier 值。
   */
  learning_rate_multiplier?: any;
  /**
   * @title n epochs 值
   * @description OpenAI API 合约中的 n epochs 值。
   */
  n_epochs?: any;
  /**
   * @title reasoning effort 值
   * @description OpenAI API 合约中的 reasoning effort 值。
   */
  reasoning_effort?: 'default' | 'low' | 'medium' | 'high';
}

/**
 * @title Fine Tune Reinforcement Method 数据结构
 * @description OpenAI API 合约中的 Fine Tune Reinforcement Method 结构定义。
 */
export type FineTuneReinforcementMethod = {
  /**
   * @title grader 值
   * @description OpenAI API 合约中的 grader 值。
   */
  grader: any;
  /**
   * @title hyperparameters 值
   * @description OpenAI API 合约中的 hyperparameters 值。
   */
  hyperparameters?: FineTuneReinforcementHyperparameters;
}

/**
 * @title Fine Tune Supervised Hyperparameters 数据结构
 * @description OpenAI API 合约中的 Fine Tune Supervised Hyperparameters 结构定义。
 */
export type FineTuneSupervisedHyperparameters = {
  /**
   * @title batch size 值
   * @description OpenAI API 合约中的 batch size 值。
   */
  batch_size?: any;
  /**
   * @title learning rate multiplier 值
   * @description OpenAI API 合约中的 learning rate multiplier 值。
   */
  learning_rate_multiplier?: any;
  /**
   * @title n epochs 值
   * @description OpenAI API 合约中的 n epochs 值。
   */
  n_epochs?: any;
}

/**
 * @title Fine Tune Supervised Method 数据结构
 * @description OpenAI API 合约中的 Fine Tune Supervised Method 结构定义。
 */
export type FineTuneSupervisedMethod = {
  /**
   * @title hyperparameters 值
   * @description OpenAI API 合约中的 hyperparameters 值。
   */
  hyperparameters?: FineTuneSupervisedHyperparameters;
}

/**
 * @title Fine Tuning Checkpoint Permission 数据结构
 * @description OpenAI API 合约中的 Fine Tuning Checkpoint Permission 结构定义。
 */
export type FineTuningCheckpointPermission = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'checkpoint.permission';
  /**
   * @title project id 值
   * @description OpenAI API 合约中的 project id 值。
   */
  project_id: string;
}

/**
 * @title Fine Tuning Integration 数据结构
 * @description OpenAI API 合约中的 Fine Tuning Integration 结构定义。
 */
export type FineTuningIntegration = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'wandb';
  /**
   * @title wandb 值
   * @description OpenAI API 合约中的 wandb 值。
   */
  wandb: {
    /**
     * @title entity 值
     * @description OpenAI API 合约中的 entity 值。
     */
    entity?: any;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name?: any;
    /**
     * @title project 值
     * @description OpenAI API 合约中的 project 值。
     */
    project: string;
    /**
     * @title tags 值
     * @description OpenAI API 合约中的 tags 值。
     */
    tags?: Array<string>
  };
}

/**
 * @title Fine Tuning Job 数据结构
 * @description OpenAI API 合约中的 Fine Tuning Job 结构定义。
 */
export type FineTuningJob = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title error 值
   * @description OpenAI API 合约中的 error 值。
   */
  error: any;
  /**
   * @title estimated finish 值
   * @description OpenAI API 合约中的 estimated finish 值。
   */
  estimated_finish?: any;
  /**
   * @title fine tuned model 值
   * @description OpenAI API 合约中的 fine tuned model 值。
   */
  fine_tuned_model: any;
  /**
   * @title finished at 值
   * @description OpenAI API 合约中的 finished at 值。
   */
  finished_at: any;
  /**
   * @title hyperparameters 值
   * @description OpenAI API 合约中的 hyperparameters 值。
   */
  hyperparameters: {
    /**
     * @title batch size 值
     * @description OpenAI API 合约中的 batch size 值。
     */
    batch_size?: any;
    /**
     * @title learning rate multiplier 值
     * @description OpenAI API 合约中的 learning rate multiplier 值。
     */
    learning_rate_multiplier?: any;
    /**
     * @title n epochs 值
     * @description OpenAI API 合约中的 n epochs 值。
     */
    n_epochs?: any
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title integrations 值
   * @description OpenAI API 合约中的 integrations 值。
   */
  integrations?: any;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title method 值
   * @description OpenAI API 合约中的 method 值。
   */
  method?: FineTuneMethod;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'fine_tuning.job';
  /**
   * @title organization id 值
   * @description OpenAI API 合约中的 organization id 值。
   */
  organization_id: string;
  /**
   * @title result files 值
   * @description OpenAI API 合约中的 result files 值。
   */
  result_files: Array<string>;
  /**
   * @title seed 值
   * @description OpenAI API 合约中的 seed 值。
   */
  seed: number;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'validating_files' | 'queued' | 'running' | 'succeeded' | 'failed' | 'cancelled';
  /**
   * @title trained tokens 值
   * @description OpenAI API 合约中的 trained tokens 值。
   */
  trained_tokens: any;
  /**
   * @title training file 值
   * @description OpenAI API 合约中的 training file 值。
   */
  training_file: string;
  /**
   * @title validation file 值
   * @description OpenAI API 合约中的 validation file 值。
   */
  validation_file: any;
}

/**
 * @title Fine Tuning Job Checkpoint 数据结构
 * @description OpenAI API 合约中的 Fine Tuning Job Checkpoint 结构定义。
 */
export type FineTuningJobCheckpoint = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title fine tuned model checkpoint 值
   * @description OpenAI API 合约中的 fine tuned model checkpoint 值。
   */
  fine_tuned_model_checkpoint: string;
  /**
   * @title fine tuning job id 值
   * @description OpenAI API 合约中的 fine tuning job id 值。
   */
  fine_tuning_job_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title metrics 值
   * @description OpenAI API 合约中的 metrics 值。
   */
  metrics: {
    /**
     * @title full valid loss 值
     * @description OpenAI API 合约中的 full valid loss 值。
     */
    full_valid_loss?: number;
    /**
     * @title full valid mean token accuracy 值
     * @description OpenAI API 合约中的 full valid mean token accuracy 值。
     */
    full_valid_mean_token_accuracy?: number;
    /**
     * @title step 值
     * @description OpenAI API 合约中的 step 值。
     */
    step?: number;
    /**
     * @title train loss 值
     * @description OpenAI API 合约中的 train loss 值。
     */
    train_loss?: number;
    /**
     * @title train mean token accuracy 值
     * @description OpenAI API 合约中的 train mean token accuracy 值。
     */
    train_mean_token_accuracy?: number;
    /**
     * @title valid loss 值
     * @description OpenAI API 合约中的 valid loss 值。
     */
    valid_loss?: number;
    /**
     * @title valid mean token accuracy 值
     * @description OpenAI API 合约中的 valid mean token accuracy 值。
     */
    valid_mean_token_accuracy?: number
  };
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'fine_tuning.job.checkpoint';
  /**
   * @title step number 值
   * @description OpenAI API 合约中的 step number 值。
   */
  step_number: number;
}

/**
 * @title Fine Tuning Job Event 数据结构
 * @description OpenAI API 合约中的 Fine Tuning Job Event 结构定义。
 */
export type FineTuningJobEvent = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title level 值
   * @description OpenAI API 合约中的 level 值。
   */
  level: 'info' | 'warn' | 'error';
  /**
   * @title message 值
   * @description OpenAI API 合约中的 message 值。
   */
  message: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'fine_tuning.job.event';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type?: 'message' | 'metrics';
}

/**
 * @title Function And Custom Tool Call Output 数据结构
 * @description OpenAI API 合约中的 Function And Custom Tool Call Output 结构定义。
 */
export type FunctionAndCustomToolCallOutput = any

/**
 * @title Function Call Item Status 数据结构
 * @description OpenAI API 合约中的 Function Call Item Status 结构定义。
 */
export type FunctionCallItemStatus = 'in_progress' | 'completed' | 'incomplete'

/**
 * @title Function Call Output Item Param 数据结构
 * @description OpenAI API 合约中的 Function Call Output Item Param 结构定义。
 */
export type FunctionCallOutputItemParam = {
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id?: any;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: any;
  /**
   * @title namespace 值
   * @description OpenAI API 合约中的 namespace 值。
   */
  namespace?: any;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'function_call_output';
}

/**
 * @title Function Call Output Status Enum 数据结构
 * @description OpenAI API 合约中的 Function Call Output Status Enum 结构定义。
 */
export type FunctionCallOutputStatusEnum = 'in_progress' | 'completed' | 'incomplete'

/**
 * @title Function Call Status 数据结构
 * @description OpenAI API 合约中的 Function Call Status 结构定义。
 */
export type FunctionCallStatus = 'in_progress' | 'completed' | 'incomplete'

/**
 * @title Function Object 数据结构
 * @description OpenAI API 合约中的 Function Object 结构定义。
 */
export type FunctionObject = {
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description?: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title parameters 值
   * @description OpenAI API 合约中的 parameters 值。
   */
  parameters?: FunctionParameters;
  /**
   * @title strict 值
   * @description OpenAI API 合约中的 strict 值。
   */
  strict?: any;
}

/**
 * @title Function Parameters 数据结构
 * @description OpenAI API 合约中的 Function Parameters 结构定义。
 */
export type FunctionParameters = Record<any, any>

/**
 * @title Function Shell Action 数据结构
 * @description OpenAI API 合约中的 Function Shell Action 结构定义。
 */
export type FunctionShellAction = {
  /**
   * @title commands 值
   * @description OpenAI API 合约中的 commands 值。
   */
  commands: Array<string>;
  /**
   * @title max output length 值
   * @description OpenAI API 合约中的 max output length 值。
   */
  max_output_length: any;
  /**
   * @title timeout ms 值
   * @description OpenAI API 合约中的 timeout ms 值。
   */
  timeout_ms: any;
}

/**
 * @title Function Shell Action Param 数据结构
 * @description OpenAI API 合约中的 Function Shell Action Param 结构定义。
 */
export type FunctionShellActionParam = {
  /**
   * @title commands 值
   * @description OpenAI API 合约中的 commands 值。
   */
  commands: Array<string>;
  /**
   * @title max output length 值
   * @description OpenAI API 合约中的 max output length 值。
   */
  max_output_length?: any;
  /**
   * @title timeout ms 值
   * @description OpenAI API 合约中的 timeout ms 值。
   */
  timeout_ms?: any;
}

/**
 * @title Function Shell Call 数据结构
 * @description OpenAI API 合约中的 Function Shell Call 结构定义。
 */
export type FunctionShellCall = {
  /**
   * @title action 值
   * @description OpenAI API 合约中的 action 值。
   */
  action: FunctionShellAction;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title created by 值
   * @description OpenAI API 合约中的 created by 值。
   */
  created_by?: string;
  /**
   * @title environment 值
   * @description OpenAI API 合约中的 environment 值。
   */
  environment: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: FunctionShellCallStatus;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'shell_call';
}

/**
 * @title Function Shell Call Item Param 数据结构
 * @description OpenAI API 合约中的 Function Shell Call Item Param 结构定义。
 */
export type FunctionShellCallItemParam = {
  /**
   * @title action 值
   * @description OpenAI API 合约中的 action 值。
   */
  action: FunctionShellActionParam;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title environment 值
   * @description OpenAI API 合约中的 environment 值。
   */
  environment?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'shell_call';
}

/**
 * @title Function Shell Call Item Status 数据结构
 * @description OpenAI API 合约中的 Function Shell Call Item Status 结构定义。
 */
export type FunctionShellCallItemStatus = 'in_progress' | 'completed' | 'incomplete'

/**
 * @title Function Shell Call Output 数据结构
 * @description OpenAI API 合约中的 Function Shell Call Output 结构定义。
 */
export type FunctionShellCallOutput = {
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title created by 值
   * @description OpenAI API 合约中的 created by 值。
   */
  created_by?: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title max output length 值
   * @description OpenAI API 合约中的 max output length 值。
   */
  max_output_length: any;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: Array<FunctionShellCallOutputContent>;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: FunctionShellCallOutputStatusEnum;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'shell_call_output';
}

/**
 * @title Function Shell Call Output Content 数据结构
 * @description OpenAI API 合约中的 Function Shell Call Output Content 结构定义。
 */
export type FunctionShellCallOutputContent = {
  /**
   * @title created by 值
   * @description OpenAI API 合约中的 created by 值。
   */
  created_by?: string;
  /**
   * @title outcome 值
   * @description OpenAI API 合约中的 outcome 值。
   */
  outcome: any;
  /**
   * @title stderr 值
   * @description OpenAI API 合约中的 stderr 值。
   */
  stderr: string;
  /**
   * @title stdout 值
   * @description OpenAI API 合约中的 stdout 值。
   */
  stdout: string;
}

/**
 * @title Function Shell Call Output Content Param 数据结构
 * @description OpenAI API 合约中的 Function Shell Call Output Content Param 结构定义。
 */
export type FunctionShellCallOutputContentParam = {
  /**
   * @title outcome 值
   * @description OpenAI API 合约中的 outcome 值。
   */
  outcome: FunctionShellCallOutputOutcomeParam;
  /**
   * @title stderr 值
   * @description OpenAI API 合约中的 stderr 值。
   */
  stderr: string;
  /**
   * @title stdout 值
   * @description OpenAI API 合约中的 stdout 值。
   */
  stdout: string;
}

/**
 * @title Function Shell Call Output Exit Outcome 数据结构
 * @description OpenAI API 合约中的 Function Shell Call Output Exit Outcome 结构定义。
 */
export type FunctionShellCallOutputExitOutcome = {
  /**
   * @title exit code 值
   * @description OpenAI API 合约中的 exit code 值。
   */
  exit_code: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'exit';
}

/**
 * @title Function Shell Call Output Exit Outcome Param 数据结构
 * @description OpenAI API 合约中的 Function Shell Call Output Exit Outcome Param 结构定义。
 */
export type FunctionShellCallOutputExitOutcomeParam = {
  /**
   * @title exit code 值
   * @description OpenAI API 合约中的 exit code 值。
   */
  exit_code: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'exit';
}

/**
 * @title Function Shell Call Output Item Param 数据结构
 * @description OpenAI API 合约中的 Function Shell Call Output Item Param 结构定义。
 */
export type FunctionShellCallOutputItemParam = {
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title max output length 值
   * @description OpenAI API 合约中的 max output length 值。
   */
  max_output_length?: any;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: Array<FunctionShellCallOutputContentParam>;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'shell_call_output';
}

/**
 * @title Function Shell Call Output Outcome Param 数据结构
 * @description OpenAI API 合约中的 Function Shell Call Output Outcome Param 结构定义。
 */
export type FunctionShellCallOutputOutcomeParam = any

/**
 * @title Function Shell Call Output Status Enum 数据结构
 * @description OpenAI API 合约中的 Function Shell Call Output Status Enum 结构定义。
 */
export type FunctionShellCallOutputStatusEnum = 'in_progress' | 'completed' | 'incomplete'

/**
 * @title Function Shell Call Output Timeout Outcome 数据结构
 * @description OpenAI API 合约中的 Function Shell Call Output Timeout Outcome 结构定义。
 */
export type FunctionShellCallOutputTimeoutOutcome = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'timeout';
}

/**
 * @title Function Shell Call Output Timeout Outcome Param 数据结构
 * @description OpenAI API 合约中的 Function Shell Call Output Timeout Outcome Param 结构定义。
 */
export type FunctionShellCallOutputTimeoutOutcomeParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'timeout';
}

/**
 * @title Function Shell Call Status 数据结构
 * @description OpenAI API 合约中的 Function Shell Call Status 结构定义。
 */
export type FunctionShellCallStatus = 'in_progress' | 'completed' | 'incomplete'

/**
 * @title Function Shell Tool Param 数据结构
 * @description OpenAI API 合约中的 Function Shell Tool Param 结构定义。
 */
export type FunctionShellToolParam = {
  /**
   * @title allowed callers 值
   * @description OpenAI API 合约中的 allowed callers 值。
   */
  allowed_callers?: any;
  /**
   * @title environment 值
   * @description OpenAI API 合约中的 environment 值。
   */
  environment?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'shell';
}

/**
 * @title Function Tool 数据结构
 * @description OpenAI API 合约中的 Function Tool 结构定义。
 */
export type FunctionTool = {
  /**
   * @title allowed callers 值
   * @description OpenAI API 合约中的 allowed callers 值。
   */
  allowed_callers?: any;
  /**
   * @title defer loading 值
   * @description OpenAI API 合约中的 defer loading 值。
   */
  defer_loading?: boolean;
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description?: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title output schema 值
   * @description OpenAI API 合约中的 output schema 值。
   */
  output_schema?: any;
  /**
   * @title parameters 值
   * @description OpenAI API 合约中的 parameters 值。
   */
  parameters: any;
  /**
   * @title strict 值
   * @description OpenAI API 合约中的 strict 值。
   */
  strict: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'function';
}

/**
 * @title Function Tool Call 数据结构
 * @description OpenAI API 合约中的 Function Tool Call 结构定义。
 */
export type FunctionToolCall = {
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: string;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title namespace 值
   * @description OpenAI API 合约中的 namespace 值。
   */
  namespace?: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: 'in_progress' | 'completed' | 'incomplete';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'function_call';
}

/**
 * @title Function Tool Call Output 数据结构
 * @description OpenAI API 合约中的 Function Tool Call Output 结构定义。
 */
export type FunctionToolCallOutput = {
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id?: string;
  /**
   * @title caller 值
   * @description OpenAI API 合约中的 caller 值。
   */
  caller?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: string;
  /**
   * @title namespace 值
   * @description OpenAI API 合约中的 namespace 值。
   */
  namespace?: string;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: 'in_progress' | 'completed' | 'incomplete';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'function_call_output';
}

/**
 * @title Function Tool Call Output Resource 数据结构
 * @description OpenAI API 合约中的 Function Tool Call Output Resource 结构定义。
 */
export type FunctionToolCallOutputResource = any

/**
 * @title Function Tool Call Resource 数据结构
 * @description OpenAI API 合约中的 Function Tool Call Resource 结构定义。
 */
export type FunctionToolCallResource = any

/**
 * @title Function Tool Param 数据结构
 * @description OpenAI API 合约中的 Function Tool Param 结构定义。
 */
export type FunctionToolParam = {
  /**
   * @title allowed callers 值
   * @description OpenAI API 合约中的 allowed callers 值。
   */
  allowed_callers?: any;
  /**
   * @title defer loading 值
   * @description OpenAI API 合约中的 defer loading 值。
   */
  defer_loading?: boolean;
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description?: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title output schema 值
   * @description OpenAI API 合约中的 output schema 值。
   */
  output_schema?: any;
  /**
   * @title parameters 值
   * @description OpenAI API 合约中的 parameters 值。
   */
  parameters?: any;
  /**
   * @title strict 值
   * @description OpenAI API 合约中的 strict 值。
   */
  strict?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'function';
}

/**
 * @title Grader Label Model 数据结构
 * @description OpenAI API 合约中的 Grader Label Model 结构定义。
 */
export type GraderLabelModel = {
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input: Array<EvalItem>;
  /**
   * @title labels 值
   * @description OpenAI API 合约中的 labels 值。
   */
  labels: Array<string>;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title passing labels 值
   * @description OpenAI API 合约中的 passing labels 值。
   */
  passing_labels: Array<string>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'label_model';
}

/**
 * @title Grader Multi 数据结构
 * @description OpenAI API 合约中的 Grader Multi 结构定义。
 */
export type GraderMulti = {
  /**
   * @title calculate output 值
   * @description OpenAI API 合约中的 calculate output 值。
   */
  calculate_output: string;
  /**
   * @title graders 值
   * @description OpenAI API 合约中的 graders 值。
   */
  graders: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'multi';
}

/**
 * @title Grader Python 数据结构
 * @description OpenAI API 合约中的 Grader Python 结构定义。
 */
export type GraderPython = {
  /**
   * @title image tag 值
   * @description OpenAI API 合约中的 image tag 值。
   */
  image_tag?: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title source 值
   * @description OpenAI API 合约中的 source 值。
   */
  source: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'python';
}

/**
 * @title Grader Score Model 数据结构
 * @description OpenAI API 合约中的 Grader Score Model 结构定义。
 */
export type GraderScoreModel = {
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input: Array<EvalItem>;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title range 值
   * @description OpenAI API 合约中的 range 值。
   */
  range?: Array<number>;
  /**
   * @title sampling params 值
   * @description OpenAI API 合约中的 sampling params 值。
   */
  sampling_params?: {
    /**
     * @title max completions tokens 值
     * @description OpenAI API 合约中的 max completions tokens 值。
     */
    max_completions_tokens?: any;
    /**
     * @title reasoning effort 值
     * @description OpenAI API 合约中的 reasoning effort 值。
     */
    reasoning_effort?: ReasoningEffort;
    /**
     * @title seed 值
     * @description OpenAI API 合约中的 seed 值。
     */
    seed?: any;
    /**
     * @title temperature 值
     * @description OpenAI API 合约中的 temperature 值。
     */
    temperature?: any;
    /**
     * @title top p 值
     * @description OpenAI API 合约中的 top p 值。
     */
    top_p?: any
  };
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'score_model';
}

/**
 * @title Grader String Check 数据结构
 * @description OpenAI API 合约中的 Grader String Check 结构定义。
 */
export type GraderStringCheck = {
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title operation 值
   * @description OpenAI API 合约中的 operation 值。
   */
  operation: 'eq' | 'ne' | 'like' | 'ilike';
  /**
   * @title reference 值
   * @description OpenAI API 合约中的 reference 值。
   */
  reference: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'string_check';
}

/**
 * @title Grader Text Similarity 数据结构
 * @description OpenAI API 合约中的 Grader Text Similarity 结构定义。
 */
export type GraderTextSimilarity = {
  /**
   * @title evaluation metric 值
   * @description OpenAI API 合约中的 evaluation metric 值。
   */
  evaluation_metric: 'cosine' | 'fuzzy_match' | 'bleu' | 'gleu' | 'meteor' | 'rouge_1' | 'rouge_2' | 'rouge_3' | 'rouge_4' | 'rouge_5' | 'rouge_l';
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title reference 值
   * @description OpenAI API 合约中的 reference 值。
   */
  reference: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'text_similarity';
}

/**
 * @title Grammar Syntax1 数据结构
 * @description OpenAI API 合约中的 Grammar Syntax1 结构定义。
 */
export type GrammarSyntax1 = 'lark' | 'regex'

/**
 * @title Group 数据结构
 * @description OpenAI API 合约中的 Group 结构定义。
 */
export type Group = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'group';
  /**
   * @title scim managed 值
   * @description OpenAI API 合约中的 scim managed 值。
   */
  scim_managed: boolean;
}

/**
 * @title Group Deleted Resource 数据结构
 * @description OpenAI API 合约中的 Group Deleted Resource 结构定义。
 */
export type GroupDeletedResource = {
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
  object: 'group.deleted';
}

/**
 * @title Group List Resource 数据结构
 * @description OpenAI API 合约中的 Group List Resource 结构定义。
 */
export type GroupListResource = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<GroupResponse>;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title next 值
   * @description OpenAI API 合约中的 next 值。
   */
  next: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Group Member User 数据结构
 * @description OpenAI API 合约中的 Group Member User 结构定义。
 */
export type GroupMemberUser = {
  /**
   * @title email 值
   * @description OpenAI API 合约中的 email 值。
   */
  email: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title is service account 值
   * @description OpenAI API 合约中的 is service account 值。
   */
  is_service_account: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title picture 值
   * @description OpenAI API 合约中的 picture 值。
   */
  picture: any;
  /**
   * @title user type 值
   * @description OpenAI API 合约中的 user type 值。
   */
  user_type: 'user' | 'tenant_user';
}

/**
 * @title Group Resource With Success 数据结构
 * @description OpenAI API 合约中的 Group Resource With Success 结构定义。
 */
export type GroupResourceWithSuccess = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title is scim managed 值
   * @description OpenAI API 合约中的 is scim managed 值。
   */
  is_scim_managed: boolean;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
}

/**
 * @title Group Response 数据结构
 * @description OpenAI API 合约中的 Group Response 结构定义。
 */
export type GroupResponse = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title group type 值
   * @description OpenAI API 合约中的 group type 值。
   */
  group_type: 'group' | 'tenant_group';
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title is scim managed 值
   * @description OpenAI API 合约中的 is scim managed 值。
   */
  is_scim_managed: boolean;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
}

/**
 * @title Group Role Assignment 数据结构
 * @description OpenAI API 合约中的 Group Role Assignment 结构定义。
 */
export type GroupRoleAssignment = {
  /**
   * @title group 值
   * @description OpenAI API 合约中的 group 值。
   */
  group: Group;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'group.role';
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: Role;
}

/**
 * @title Group User 数据结构
 * @description OpenAI API 合约中的 Group User 结构定义。
 */
export type GroupUser = {
  /**
   * @title email 值
   * @description OpenAI API 合约中的 email 值。
   */
  email: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
}

/**
 * @title Group User Assignment 数据结构
 * @description OpenAI API 合约中的 Group User Assignment 结构定义。
 */
export type GroupUserAssignment = {
  /**
   * @title group id 值
   * @description OpenAI API 合约中的 group id 值。
   */
  group_id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'group.user';
  /**
   * @title user id 值
   * @description OpenAI API 合约中的 user id 值。
   */
  user_id: string;
}

/**
 * @title Group User Deleted Resource 数据结构
 * @description OpenAI API 合约中的 Group User Deleted Resource 结构定义。
 */
export type GroupUserDeletedResource = {
  /**
   * @title deleted 值
   * @description OpenAI API 合约中的 deleted 值。
   */
  deleted: boolean;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'group.user.deleted';
}

/**
 * @title HTTPError 数据结构
 * @description OpenAI API 合约中的 HTTPError 结构定义。
 */
export type HTTPError = {
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: number;
  /**
   * @title message 值
   * @description OpenAI API 合约中的 message 值。
   */
  message: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'http_error';
}

/**
 * @title History Param 数据结构
 * @description OpenAI API 合约中的 History Param 结构定义。
 */
export type HistoryParam = {
  /**
   * @title enabled 值
   * @description OpenAI API 合约中的 enabled 值。
   */
  enabled?: boolean;
  /**
   * @title recent threads 值
   * @description OpenAI API 合约中的 recent threads 值。
   */
  recent_threads?: number;
}

/**
 * @title Hosted Tool Permission 数据结构
 * @description OpenAI API 合约中的 Hosted Tool Permission 结构定义。
 */
export type HostedToolPermission = {
  /**
   * @title enabled 值
   * @description OpenAI API 合约中的 enabled 值。
   */
  enabled: boolean;
}

/**
 * @title Hosted Tool Permission Update 数据结构
 * @description OpenAI API 合约中的 Hosted Tool Permission Update 结构定义。
 */
export type HostedToolPermissionUpdate = {
  /**
   * @title enabled 值
   * @description OpenAI API 合约中的 enabled 值。
   */
  enabled: boolean;
}

/**
 * @title Hybrid Search Options 数据结构
 * @description OpenAI API 合约中的 Hybrid Search Options 结构定义。
 */
export type HybridSearchOptions = {
  /**
   * @title embedding weight 值
   * @description OpenAI API 合约中的 embedding weight 值。
   */
  embedding_weight: number;
  /**
   * @title text weight 值
   * @description OpenAI API 合约中的 text weight 值。
   */
  text_weight: number;
}

/**
 * @title Image 数据结构
 * @description OpenAI API 合约中的 Image 结构定义。
 */
export type Image = {
  /**
   * @title b64 json 值
   * @description OpenAI API 合约中的 b64 json 值。
   */
  b64_json?: string;
  /**
   * @title revised prompt 值
   * @description OpenAI API 合约中的 revised prompt 值。
   */
  revised_prompt?: string;
  /**
   * @title url 值
   * @description OpenAI API 合约中的 url 值。
   */
  url?: string;
}

/**
 * @title Image Detail 数据结构
 * @description OpenAI API 合约中的 Image Detail 结构定义。
 */
export type ImageDetail = 'low' | 'high' | 'auto' | 'original'

/**
 * @title Image Edit Completed Event 数据结构
 * @description OpenAI API 合约中的 Image Edit Completed Event 结构定义。
 */
export type ImageEditCompletedEvent = {
  /**
   * @title b64 json 值
   * @description OpenAI API 合约中的 b64 json 值。
   */
  b64_json: string;
  /**
   * @title background 值
   * @description OpenAI API 合约中的 background 值。
   */
  background: 'transparent' | 'opaque' | 'auto';
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title output format 值
   * @description OpenAI API 合约中的 output format 值。
   */
  output_format: 'png' | 'webp' | 'jpeg';
  /**
   * @title quality 值
   * @description OpenAI API 合约中的 quality 值。
   */
  quality: 'low' | 'medium' | 'high' | 'auto';
  /**
   * @title size 值
   * @description OpenAI API 合约中的 size 值。
   */
  size: '1024x1024' | '1024x1536' | '1536x1024' | 'auto';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'image_edit.completed';
  /**
   * @title usage 值
   * @description OpenAI API 合约中的 usage 值。
   */
  usage: ImagesUsage;
}

/**
 * @title Image Edit Partial Image Event 数据结构
 * @description OpenAI API 合约中的 Image Edit Partial Image Event 结构定义。
 */
export type ImageEditPartialImageEvent = {
  /**
   * @title b64 json 值
   * @description OpenAI API 合约中的 b64 json 值。
   */
  b64_json: string;
  /**
   * @title background 值
   * @description OpenAI API 合约中的 background 值。
   */
  background: 'transparent' | 'opaque' | 'auto';
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title output format 值
   * @description OpenAI API 合约中的 output format 值。
   */
  output_format: 'png' | 'webp' | 'jpeg';
  /**
   * @title partial image index 值
   * @description OpenAI API 合约中的 partial image index 值。
   */
  partial_image_index: number;
  /**
   * @title quality 值
   * @description OpenAI API 合约中的 quality 值。
   */
  quality: 'low' | 'medium' | 'high' | 'auto';
  /**
   * @title size 值
   * @description OpenAI API 合约中的 size 值。
   */
  size: '1024x1024' | '1024x1536' | '1536x1024' | 'auto';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'image_edit.partial_image';
}

/**
 * @title Image Edit Stream Event 数据结构
 * @description OpenAI API 合约中的 Image Edit Stream Event 结构定义。
 */
export type ImageEditStreamEvent = any

/**
 * @title Image Gen Action Enum 数据结构
 * @description OpenAI API 合约中的 Image Gen Action Enum 结构定义。
 */
export type ImageGenActionEnum = 'generate' | 'edit' | 'auto'

/**
 * @title Image Gen Completed Event 数据结构
 * @description OpenAI API 合约中的 Image Gen Completed Event 结构定义。
 */
export type ImageGenCompletedEvent = {
  /**
   * @title b64 json 值
   * @description OpenAI API 合约中的 b64 json 值。
   */
  b64_json: string;
  /**
   * @title background 值
   * @description OpenAI API 合约中的 background 值。
   */
  background: 'transparent' | 'opaque' | 'auto';
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title output format 值
   * @description OpenAI API 合约中的 output format 值。
   */
  output_format: 'png' | 'webp' | 'jpeg';
  /**
   * @title quality 值
   * @description OpenAI API 合约中的 quality 值。
   */
  quality: 'low' | 'medium' | 'high' | 'auto';
  /**
   * @title size 值
   * @description OpenAI API 合约中的 size 值。
   */
  size: '1024x1024' | '1024x1536' | '1536x1024' | 'auto';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'image_generation.completed';
  /**
   * @title usage 值
   * @description OpenAI API 合约中的 usage 值。
   */
  usage: ImagesUsage;
}

/**
 * @title Image Gen Input Usage Details 数据结构
 * @description OpenAI API 合约中的 Image Gen Input Usage Details 结构定义。
 */
export type ImageGenInputUsageDetails = {
  /**
   * @title image tokens 值
   * @description OpenAI API 合约中的 image tokens 值。
   */
  image_tokens: number;
  /**
   * @title text tokens 值
   * @description OpenAI API 合约中的 text tokens 值。
   */
  text_tokens: number;
}

/**
 * @title Image Gen Output Tokens Details 数据结构
 * @description OpenAI API 合约中的 Image Gen Output Tokens Details 结构定义。
 */
export type ImageGenOutputTokensDetails = {
  /**
   * @title image tokens 值
   * @description OpenAI API 合约中的 image tokens 值。
   */
  image_tokens: number;
  /**
   * @title text tokens 值
   * @description OpenAI API 合约中的 text tokens 值。
   */
  text_tokens: number;
}

/**
 * @title Image Gen Partial Image Event 数据结构
 * @description OpenAI API 合约中的 Image Gen Partial Image Event 结构定义。
 */
export type ImageGenPartialImageEvent = {
  /**
   * @title b64 json 值
   * @description OpenAI API 合约中的 b64 json 值。
   */
  b64_json: string;
  /**
   * @title background 值
   * @description OpenAI API 合约中的 background 值。
   */
  background: 'transparent' | 'opaque' | 'auto';
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title output format 值
   * @description OpenAI API 合约中的 output format 值。
   */
  output_format: 'png' | 'webp' | 'jpeg';
  /**
   * @title partial image index 值
   * @description OpenAI API 合约中的 partial image index 值。
   */
  partial_image_index: number;
  /**
   * @title quality 值
   * @description OpenAI API 合约中的 quality 值。
   */
  quality: 'low' | 'medium' | 'high' | 'auto';
  /**
   * @title size 值
   * @description OpenAI API 合约中的 size 值。
   */
  size: '1024x1024' | '1024x1536' | '1536x1024' | 'auto';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'image_generation.partial_image';
}

/**
 * @title Image Gen Stream Event 数据结构
 * @description OpenAI API 合约中的 Image Gen Stream Event 结构定义。
 */
export type ImageGenStreamEvent = any

/**
 * @title Image Gen Tool 数据结构
 * @description OpenAI API 合约中的 Image Gen Tool 结构定义。
 */
export type ImageGenTool = {
  /**
   * @title action 值
   * @description OpenAI API 合约中的 action 值。
   */
  action?: ImageGenActionEnum;
  /**
   * @title background 值
   * @description OpenAI API 合约中的 background 值。
   */
  background?: 'transparent' | 'opaque' | 'auto';
  /**
   * @title input fidelity 值
   * @description OpenAI API 合约中的 input fidelity 值。
   */
  input_fidelity?: any;
  /**
   * @title input image mask 值
   * @description OpenAI API 合约中的 input image mask 值。
   */
  input_image_mask?: {
    /**
     * @title file id 值
     * @description OpenAI API 合约中的 file id 值。
     */
    file_id?: string;
    /**
     * @title image url 值
     * @description OpenAI API 合约中的 image url 值。
     */
    image_url?: string
  };
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title moderation 值
   * @description OpenAI API 合约中的 moderation 值。
   */
  moderation?: 'auto' | 'low';
  /**
   * @title output compression 值
   * @description OpenAI API 合约中的 output compression 值。
   */
  output_compression?: number;
  /**
   * @title output format 值
   * @description OpenAI API 合约中的 output format 值。
   */
  output_format?: 'png' | 'webp' | 'jpeg';
  /**
   * @title partial images 值
   * @description OpenAI API 合约中的 partial images 值。
   */
  partial_images?: number;
  /**
   * @title quality 值
   * @description OpenAI API 合约中的 quality 值。
   */
  quality?: 'low' | 'medium' | 'high' | 'auto';
  /**
   * @title size 值
   * @description OpenAI API 合约中的 size 值。
   */
  size?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'image_generation';
}

/**
 * @title Image Gen Tool Call 数据结构
 * @description OpenAI API 合约中的 Image Gen Tool Call 结构定义。
 */
export type ImageGenToolCall = {
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title result 值
   * @description OpenAI API 合约中的 result 值。
   */
  result: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'in_progress' | 'completed' | 'generating' | 'failed';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'image_generation_call';
}

/**
 * @title Image Gen Usage 数据结构
 * @description OpenAI API 合约中的 Image Gen Usage 结构定义。
 */
export type ImageGenUsage = {
  /**
   * @title input tokens 值
   * @description OpenAI API 合约中的 input tokens 值。
   */
  input_tokens: number;
  /**
   * @title input tokens details 值
   * @description OpenAI API 合约中的 input tokens details 值。
   */
  input_tokens_details: ImageGenInputUsageDetails;
  /**
   * @title output tokens 值
   * @description OpenAI API 合约中的 output tokens 值。
   */
  output_tokens: number;
  /**
   * @title output tokens details 值
   * @description OpenAI API 合约中的 output tokens details 值。
   */
  output_tokens_details?: ImageGenOutputTokensDetails;
  /**
   * @title total tokens 值
   * @description OpenAI API 合约中的 total tokens 值。
   */
  total_tokens: number;
}

/**
 * @title Image Ref Param 数据结构
 * @description OpenAI API 合约中的 Image Ref Param 结构定义。
 */
export type ImageRefParam = {
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id?: string;
  /**
   * @title image url 值
   * @description OpenAI API 合约中的 image url 值。
   */
  image_url?: string;
}

/**
 * @title Images Response 数据结构
 * @description OpenAI API 合约中的 Images Response 结构定义。
 */
export type ImagesResponse = {
  /**
   * @title background 值
   * @description OpenAI API 合约中的 background 值。
   */
  background?: 'transparent' | 'opaque';
  /**
   * @title created 值
   * @description OpenAI API 合约中的 created 值。
   */
  created: number;
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data?: Array<Image>;
  /**
   * @title output format 值
   * @description OpenAI API 合约中的 output format 值。
   */
  output_format?: 'png' | 'webp' | 'jpeg';
  /**
   * @title quality 值
   * @description OpenAI API 合约中的 quality 值。
   */
  quality?: 'low' | 'medium' | 'high';
  /**
   * @title size 值
   * @description OpenAI API 合约中的 size 值。
   */
  size?: '1024x1024' | '1024x1536' | '1536x1024';
  /**
   * @title usage 值
   * @description OpenAI API 合约中的 usage 值。
   */
  usage?: ImageGenUsage;
}

/**
 * @title Images Usage 数据结构
 * @description OpenAI API 合约中的 Images Usage 结构定义。
 */
export type ImagesUsage = {
  /**
   * @title input tokens 值
   * @description OpenAI API 合约中的 input tokens 值。
   */
  input_tokens: number;
  /**
   * @title input tokens details 值
   * @description OpenAI API 合约中的 input tokens details 值。
   */
  input_tokens_details: {
    /**
     * @title image tokens 值
     * @description OpenAI API 合约中的 image tokens 值。
     */
    image_tokens: number;
    /**
     * @title text tokens 值
     * @description OpenAI API 合约中的 text tokens 值。
     */
    text_tokens: number
  };
  /**
   * @title output tokens 值
   * @description OpenAI API 合约中的 output tokens 值。
   */
  output_tokens: number;
  /**
   * @title total tokens 值
   * @description OpenAI API 合约中的 total tokens 值。
   */
  total_tokens: number;
}

/**
 * @title Include Enum 数据结构
 * @description OpenAI API 合约中的 Include Enum 结构定义。
 */
export type IncludeEnum = 'file_search_call.results' | 'web_search_call.results' | 'web_search_call.action.sources' | 'message.input_image.image_url' | 'computer_call_output.output.image_url' | 'code_interpreter_call.outputs' | 'reasoning.encrypted_content' | 'message.output_text.logprobs'

/**
 * @title Inference Options 数据结构
 * @description OpenAI API 合约中的 Inference Options 结构定义。
 */
export type InferenceOptions = {
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: any;
  /**
   * @title tool choice 值
   * @description OpenAI API 合约中的 tool choice 值。
   */
  tool_choice: any;
}

/**
 * @title Inline Skill Param 数据结构
 * @description OpenAI API 合约中的 Inline Skill Param 结构定义。
 */
export type InlineSkillParam = {
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title source 值
   * @description OpenAI API 合约中的 source 值。
   */
  source: InlineSkillSourceParam;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'inline';
}

/**
 * @title Inline Skill Source Param 数据结构
 * @description OpenAI API 合约中的 Inline Skill Source Param 结构定义。
 */
export type InlineSkillSourceParam = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: string;
  /**
   * @title media type 值
   * @description OpenAI API 合约中的 media type 值。
   */
  media_type: 'application/zip';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'base64';
}

/**
 * @title Input Audio 数据结构
 * @description OpenAI API 合约中的 Input Audio 结构定义。
 */
export type InputAudio = {
  /**
   * @title input audio 值
   * @description OpenAI API 合约中的 input audio 值。
   */
  input_audio: {
    /**
     * @title data 值
     * @description OpenAI API 合约中的 data 值。
     */
    data: string;
    /**
     * @title format 值
     * @description OpenAI API 合约中的 format 值。
     */
    format: 'mp3' | 'wav'
  };
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_audio';
}

/**
 * @title Input Content 数据结构
 * @description OpenAI API 合约中的 Input Content 结构定义。
 */
export type InputContent = any

/**
 * @title Input Fidelity 数据结构
 * @description OpenAI API 合约中的 Input Fidelity 结构定义。
 */
export type InputFidelity = 'high' | 'low'

/**
 * @title Input File Content 数据结构
 * @description OpenAI API 合约中的 Input File Content 结构定义。
 */
export type InputFileContent = {
  /**
   * @title detail 值
   * @description OpenAI API 合约中的 detail 值。
   */
  detail?: FileInputDetail;
  /**
   * @title file data 值
   * @description OpenAI API 合约中的 file data 值。
   */
  file_data?: string;
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id?: any;
  /**
   * @title file url 值
   * @description OpenAI API 合约中的 file url 值。
   */
  file_url?: string;
  /**
   * @title filename 值
   * @description OpenAI API 合约中的 filename 值。
   */
  filename?: string;
  /**
   * @title prompt cache breakpoint 值
   * @description OpenAI API 合约中的 prompt cache breakpoint 值。
   */
  prompt_cache_breakpoint?: PromptCacheBreakpointConfig;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_file';
}

/**
 * @title Input File Content Param 数据结构
 * @description OpenAI API 合约中的 Input File Content Param 结构定义。
 */
export type InputFileContentParam = {
  /**
   * @title detail 值
   * @description OpenAI API 合约中的 detail 值。
   */
  detail?: FileDetailEnum;
  /**
   * @title file data 值
   * @description OpenAI API 合约中的 file data 值。
   */
  file_data?: any;
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id?: any;
  /**
   * @title file url 值
   * @description OpenAI API 合约中的 file url 值。
   */
  file_url?: any;
  /**
   * @title filename 值
   * @description OpenAI API 合约中的 filename 值。
   */
  filename?: any;
  /**
   * @title prompt cache breakpoint 值
   * @description OpenAI API 合约中的 prompt cache breakpoint 值。
   */
  prompt_cache_breakpoint?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_file';
}

/**
 * @title Input Image Content 数据结构
 * @description OpenAI API 合约中的 Input Image Content 结构定义。
 */
export type InputImageContent = {
  /**
   * @title detail 值
   * @description OpenAI API 合约中的 detail 值。
   */
  detail: ImageDetail;
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id?: any;
  /**
   * @title image url 值
   * @description OpenAI API 合约中的 image url 值。
   */
  image_url?: any;
  /**
   * @title prompt cache breakpoint 值
   * @description OpenAI API 合约中的 prompt cache breakpoint 值。
   */
  prompt_cache_breakpoint?: PromptCacheBreakpointConfig;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_image';
}

/**
 * @title Input Image Content Param Auto Param 数据结构
 * @description OpenAI API 合约中的 Input Image Content Param Auto Param 结构定义。
 */
export type InputImageContentParamAutoParam = {
  /**
   * @title detail 值
   * @description OpenAI API 合约中的 detail 值。
   */
  detail?: any;
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id?: any;
  /**
   * @title image url 值
   * @description OpenAI API 合约中的 image url 值。
   */
  image_url?: any;
  /**
   * @title prompt cache breakpoint 值
   * @description OpenAI API 合约中的 prompt cache breakpoint 值。
   */
  prompt_cache_breakpoint?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_image';
}

/**
 * @title Input Item 数据结构
 * @description OpenAI API 合约中的 Input Item 结构定义。
 */
export type InputItem = any

/**
 * @title Input Message 数据结构
 * @description OpenAI API 合约中的 Input Message 结构定义。
 */
export type InputMessage = {
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: InputMessageContentList;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'user' | 'system' | 'developer';
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: 'in_progress' | 'completed' | 'incomplete';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type?: 'message';
}

/**
 * @title Input Message Content List 数据结构
 * @description OpenAI API 合约中的 Input Message Content List 结构定义。
 */
export type InputMessageContentList = Array<InputContent>

/**
 * @title Input Message Resource 数据结构
 * @description OpenAI API 合约中的 Input Message Resource 结构定义。
 */
export type InputMessageResource = any

/**
 * @title Input Param 数据结构
 * @description OpenAI API 合约中的 Input Param 结构定义。
 */
export type InputParam = any

/**
 * @title Input Text Content 数据结构
 * @description OpenAI API 合约中的 Input Text Content 结构定义。
 */
export type InputTextContent = {
  /**
   * @title prompt cache breakpoint 值
   * @description OpenAI API 合约中的 prompt cache breakpoint 值。
   */
  prompt_cache_breakpoint?: PromptCacheBreakpointConfig;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_text';
}

/**
 * @title Input Text Content Param 数据结构
 * @description OpenAI API 合约中的 Input Text Content Param 结构定义。
 */
export type InputTextContentParam = {
  /**
   * @title prompt cache breakpoint 值
   * @description OpenAI API 合约中的 prompt cache breakpoint 值。
   */
  prompt_cache_breakpoint?: any;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_text';
}

/**
 * @title Invite 数据结构
 * @description OpenAI API 合约中的 Invite 结构定义。
 */
export type Invite = {
  /**
   * @title accepted at 值
   * @description OpenAI API 合约中的 accepted at 值。
   */
  accepted_at?: any;
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title email 值
   * @description OpenAI API 合约中的 email 值。
   */
  email: string;
  /**
   * @title expires at 值
   * @description OpenAI API 合约中的 expires at 值。
   */
  expires_at?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.invite';
  /**
   * @title projects 值
   * @description OpenAI API 合约中的 projects 值。
   */
  projects: Array<{
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id: string;
    /**
     * @title role 值
     * @description OpenAI API 合约中的 role 值。
     */
    role: 'member' | 'owner'
  }>;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'owner' | 'reader';
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'accepted' | 'expired' | 'pending';
}

/**
 * @title Invite Delete Response 数据结构
 * @description OpenAI API 合约中的 Invite Delete Response 结构定义。
 */
export type InviteDeleteResponse = {
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
  object: 'organization.invite.deleted';
}

/**
 * @title Invite List Response 数据结构
 * @description OpenAI API 合约中的 Invite List Response 结构定义。
 */
export type InviteListResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<Invite>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id?: any;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id?: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Invite Project Group Body 数据结构
 * @description OpenAI API 合约中的 Invite Project Group Body 结构定义。
 */
export type InviteProjectGroupBody = {
  /**
   * @title group id 值
   * @description OpenAI API 合约中的 group id 值。
   */
  group_id: string;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: string;
}

/**
 * @title Invite Request 数据结构
 * @description OpenAI API 合约中的 Invite Request 结构定义。
 */
export type InviteRequest = {
  /**
   * @title email 值
   * @description OpenAI API 合约中的 email 值。
   */
  email: string;
  /**
   * @title projects 值
   * @description OpenAI API 合约中的 projects 值。
   */
  projects?: Array<{
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id: string;
    /**
     * @title role 值
     * @description OpenAI API 合约中的 role 值。
     */
    role: 'member' | 'owner'
  }>;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'reader' | 'owner';
}

/**
 * @title Item 数据结构
 * @description OpenAI API 合约中的 Item 结构定义。
 */
export type Item = any

/**
 * @title Item Field 数据结构
 * @description OpenAI API 合约中的 Item Field 结构定义。
 */
export type ItemField = any

/**
 * @title Item Reference Param 数据结构
 * @description OpenAI API 合约中的 Item Reference Param 结构定义。
 */
export type ItemReferenceParam = {
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type?: any;
}

/**
 * @title Item Resource 数据结构
 * @description OpenAI API 合约中的 Item Resource 结构定义。
 */
export type ItemResource = any

/**
 * @title Key Press Action 数据结构
 * @description OpenAI API 合约中的 Key Press Action 结构定义。
 */
export type KeyPressAction = {
  /**
   * @title keys 值
   * @description OpenAI API 合约中的 keys 值。
   */
  keys: Array<string>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'keypress';
}

/**
 * @title List Assistants Response 数据结构
 * @description OpenAI API 合约中的 List Assistants Response 结构定义。
 */
export type ListAssistantsResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<AssistantObject>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id: string;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: string;
}

/**
 * @title List Audit Logs Response 数据结构
 * @description OpenAI API 合约中的 List Audit Logs Response 结构定义。
 */
export type ListAuditLogsResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<AuditLog>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id?: any;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id?: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title List Batches Response 数据结构
 * @description OpenAI API 合约中的 List Batches Response 结构定义。
 */
export type ListBatchesResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<Batch>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id?: string;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id?: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title List Certificates Response 数据结构
 * @description OpenAI API 合约中的 List Certificates Response 结构定义。
 */
export type ListCertificatesResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<OrganizationCertificate>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id: any;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title List Files Response 数据结构
 * @description OpenAI API 合约中的 List Files Response 结构定义。
 */
export type ListFilesResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<OpenAIFile>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id: string;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: string;
}

/**
 * @title List Fine Tuning Checkpoint Permission Response 数据结构
 * @description OpenAI API 合约中的 List Fine Tuning Checkpoint Permission Response 结构定义。
 */
export type ListFineTuningCheckpointPermissionResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<FineTuningCheckpointPermission>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id?: any;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id?: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title List Fine Tuning Job Checkpoints Response 数据结构
 * @description OpenAI API 合约中的 List Fine Tuning Job Checkpoints Response 结构定义。
 */
export type ListFineTuningJobCheckpointsResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<FineTuningJobCheckpoint>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id?: any;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id?: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title List Fine Tuning Job Events Response 数据结构
 * @description OpenAI API 合约中的 List Fine Tuning Job Events Response 结构定义。
 */
export type ListFineTuningJobEventsResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<FineTuningJobEvent>;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title List Messages Response 数据结构
 * @description OpenAI API 合约中的 List Messages Response 结构定义。
 */
export type ListMessagesResponse = any

/**
 * @title List Models Response 数据结构
 * @description OpenAI API 合约中的 List Models Response 结构定义。
 */
export type ListModelsResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<Model>;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title List Paginated Fine Tuning Jobs Response 数据结构
 * @description OpenAI API 合约中的 List Paginated Fine Tuning Jobs Response 结构定义。
 */
export type ListPaginatedFineTuningJobsResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<FineTuningJob>;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title List Project Certificates Response 数据结构
 * @description OpenAI API 合约中的 List Project Certificates Response 结构定义。
 */
export type ListProjectCertificatesResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<OrganizationProjectCertificate>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id: any;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title List Run Steps Response 数据结构
 * @description OpenAI API 合约中的 List Run Steps Response 结构定义。
 */
export type ListRunStepsResponse = any

/**
 * @title List Runs Response 数据结构
 * @description OpenAI API 合约中的 List Runs Response 结构定义。
 */
export type ListRunsResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<RunObject>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id: string;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: string;
}

/**
 * @title List Vector Store Files Response 数据结构
 * @description OpenAI API 合约中的 List Vector Store Files Response 结构定义。
 */
export type ListVectorStoreFilesResponse = any

/**
 * @title List Vector Stores Response 数据结构
 * @description OpenAI API 合约中的 List Vector Stores Response 结构定义。
 */
export type ListVectorStoresResponse = any

/**
 * @title Local Environment Param 数据结构
 * @description OpenAI API 合约中的 Local Environment Param 结构定义。
 */
export type LocalEnvironmentParam = {
  /**
   * @title skills 值
   * @description OpenAI API 合约中的 skills 值。
   */
  skills?: Array<LocalSkillParam>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'local';
}

/**
 * @title Local Environment Resource 数据结构
 * @description OpenAI API 合约中的 Local Environment Resource 结构定义。
 */
export type LocalEnvironmentResource = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'local';
}

/**
 * @title Local Shell Exec Action 数据结构
 * @description OpenAI API 合约中的 Local Shell Exec Action 结构定义。
 */
export type LocalShellExecAction = {
  /**
   * @title command 值
   * @description OpenAI API 合约中的 command 值。
   */
  command: Array<string>;
  /**
   * @title env 值
   * @description OpenAI API 合约中的 env 值。
   */
  env: Record<any, string>;
  /**
   * @title timeout ms 值
   * @description OpenAI API 合约中的 timeout ms 值。
   */
  timeout_ms?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'exec';
  /**
   * @title user 值
   * @description OpenAI API 合约中的 user 值。
   */
  user?: any;
  /**
   * @title working directory 值
   * @description OpenAI API 合约中的 working directory 值。
   */
  working_directory?: any;
}

/**
 * @title Local Shell Tool Call 数据结构
 * @description OpenAI API 合约中的 Local Shell Tool Call 结构定义。
 */
export type LocalShellToolCall = {
  /**
   * @title action 值
   * @description OpenAI API 合约中的 action 值。
   */
  action: LocalShellExecAction;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'in_progress' | 'completed' | 'incomplete';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'local_shell_call';
}

/**
 * @title Local Shell Tool Call Output 数据结构
 * @description OpenAI API 合约中的 Local Shell Tool Call Output 结构定义。
 */
export type LocalShellToolCallOutput = {
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'local_shell_call_output';
}

/**
 * @title Local Shell Tool Param 数据结构
 * @description OpenAI API 合约中的 Local Shell Tool Param 结构定义。
 */
export type LocalShellToolParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'local_shell';
}

/**
 * @title Local Skill Param 数据结构
 * @description OpenAI API 合约中的 Local Skill Param 结构定义。
 */
export type LocalSkillParam = {
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title path 值
   * @description OpenAI API 合约中的 path 值。
   */
  path: string;
}

/**
 * @title Locked Status 数据结构
 * @description OpenAI API 合约中的 Locked Status 结构定义。
 */
export type LockedStatus = {
  /**
   * @title reason 值
   * @description OpenAI API 合约中的 reason 值。
   */
  reason: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'locked';
}

/**
 * @title Log Prob 数据结构
 * @description OpenAI API 合约中的 Log Prob 结构定义。
 */
export type LogProb = {
  /**
   * @title bytes 值
   * @description OpenAI API 合约中的 bytes 值。
   */
  bytes: Array<number>;
  /**
   * @title logprob 值
   * @description OpenAI API 合约中的 logprob 值。
   */
  logprob: number;
  /**
   * @title token 值
   * @description OpenAI API 合约中的 token 值。
   */
  token: string;
  /**
   * @title top logprobs 值
   * @description OpenAI API 合约中的 top logprobs 值。
   */
  top_logprobs: Array<TopLogProb>;
}

/**
 * @title Log Prob Properties 数据结构
 * @description OpenAI API 合约中的 Log Prob Properties 结构定义。
 */
export type LogProbProperties = {
  /**
   * @title bytes 值
   * @description OpenAI API 合约中的 bytes 值。
   */
  bytes: Array<number>;
  /**
   * @title logprob 值
   * @description OpenAI API 合约中的 logprob 值。
   */
  logprob: number;
  /**
   * @title token 值
   * @description OpenAI API 合约中的 token 值。
   */
  token: string;
}

/**
 * @title MCPApproval Request 数据结构
 * @description OpenAI API 合约中的 MCPApproval Request 结构定义。
 */
export type MCPApprovalRequest = {
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title server label 值
   * @description OpenAI API 合约中的 server label 值。
   */
  server_label: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_approval_request';
}

/**
 * @title MCPApproval Response 数据结构
 * @description OpenAI API 合约中的 MCPApproval Response 结构定义。
 */
export type MCPApprovalResponse = {
  /**
   * @title approval request id 值
   * @description OpenAI API 合约中的 approval request id 值。
   */
  approval_request_id: string;
  /**
   * @title approve 值
   * @description OpenAI API 合约中的 approve 值。
   */
  approve: boolean;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title reason 值
   * @description OpenAI API 合约中的 reason 值。
   */
  reason?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_approval_response';
}

/**
 * @title MCPApproval Response Resource 数据结构
 * @description OpenAI API 合约中的 MCPApproval Response Resource 结构定义。
 */
export type MCPApprovalResponseResource = {
  /**
   * @title approval request id 值
   * @description OpenAI API 合约中的 approval request id 值。
   */
  approval_request_id: string;
  /**
   * @title approve 值
   * @description OpenAI API 合约中的 approve 值。
   */
  approve: boolean;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title reason 值
   * @description OpenAI API 合约中的 reason 值。
   */
  reason?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_approval_response';
}

/**
 * @title MCPList Tools 数据结构
 * @description OpenAI API 合约中的 MCPList Tools 结构定义。
 */
export type MCPListTools = {
  /**
   * @title error 值
   * @description OpenAI API 合约中的 error 值。
   */
  error?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title server label 值
   * @description OpenAI API 合约中的 server label 值。
   */
  server_label: string;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools: Array<MCPListToolsTool>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_list_tools';
}

/**
 * @title MCPList Tools Tool 数据结构
 * @description OpenAI API 合约中的 MCPList Tools Tool 结构定义。
 */
export type MCPListToolsTool = {
  /**
   * @title annotations 值
   * @description OpenAI API 合约中的 annotations 值。
   */
  annotations?: any;
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description?: any;
  /**
   * @title input schema 值
   * @description OpenAI API 合约中的 input schema 值。
   */
  input_schema: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
}

/**
 * @title MCPProtocol Error 数据结构
 * @description OpenAI API 合约中的 MCPProtocol Error 结构定义。
 */
export type MCPProtocolError = {
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: number;
  /**
   * @title message 值
   * @description OpenAI API 合约中的 message 值。
   */
  message: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_protocol_error';
}

/**
 * @title MCPTool 数据结构
 * @description OpenAI API 合约中的 MCPTool 结构定义。
 */
export type MCPTool = {
  /**
   * @title allowed callers 值
   * @description OpenAI API 合约中的 allowed callers 值。
   */
  allowed_callers?: any;
  /**
   * @title allowed tools 值
   * @description OpenAI API 合约中的 allowed tools 值。
   */
  allowed_tools?: any;
  /**
   * @title authorization 值
   * @description OpenAI API 合约中的 authorization 值。
   */
  authorization?: string;
  /**
   * @title connector id 值
   * @description OpenAI API 合约中的 connector id 值。
   */
  connector_id?: 'connector_dropbox' | 'connector_gmail' | 'connector_googlecalendar' | 'connector_googledrive' | 'connector_microsoftteams' | 'connector_outlookcalendar' | 'connector_outlookemail' | 'connector_sharepoint';
  /**
   * @title defer loading 值
   * @description OpenAI API 合约中的 defer loading 值。
   */
  defer_loading?: boolean;
  /**
   * @title headers 值
   * @description OpenAI API 合约中的 headers 值。
   */
  headers?: any;
  /**
   * @title require approval 值
   * @description OpenAI API 合约中的 require approval 值。
   */
  require_approval?: any;
  /**
   * @title server description 值
   * @description OpenAI API 合约中的 server description 值。
   */
  server_description?: string;
  /**
   * @title server label 值
   * @description OpenAI API 合约中的 server label 值。
   */
  server_label: string;
  /**
   * @title server url 值
   * @description OpenAI API 合约中的 server url 值。
   */
  server_url?: string;
  /**
   * @title tunnel id 值
   * @description OpenAI API 合约中的 tunnel id 值。
   */
  tunnel_id?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp';
}

/**
 * @title MCPTool Call 数据结构
 * @description OpenAI API 合约中的 MCPTool Call 结构定义。
 */
export type MCPToolCall = {
  /**
   * @title approval request id 值
   * @description OpenAI API 合约中的 approval request id 值。
   */
  approval_request_id?: any;
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: string;
  /**
   * @title error 值
   * @description OpenAI API 合约中的 error 值。
   */
  error?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output?: any;
  /**
   * @title server label 值
   * @description OpenAI API 合约中的 server label 值。
   */
  server_label: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: MCPToolCallStatus;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_call';
}

/**
 * @title MCPTool Call Error 数据结构
 * @description OpenAI API 合约中的 MCPTool Call Error 结构定义。
 */
export type MCPToolCallError = any

/**
 * @title MCPTool Call Status 数据结构
 * @description OpenAI API 合约中的 MCPTool Call Status 结构定义。
 */
export type MCPToolCallStatus = 'in_progress' | 'completed' | 'incomplete' | 'calling' | 'failed'

/**
 * @title MCPTool Execution Error 数据结构
 * @description OpenAI API 合约中的 MCPTool Execution Error 结构定义。
 */
export type MCPToolExecutionError = {
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_tool_execution_error';
}

/**
 * @title MCPTool Filter 数据结构
 * @description OpenAI API 合约中的 MCPTool Filter 结构定义。
 */
export type MCPToolFilter = {
  /**
   * @title read only 值
   * @description OpenAI API 合约中的 read only 值。
   */
  read_only?: boolean;
  /**
   * @title tool names 值
   * @description OpenAI API 合约中的 tool names 值。
   */
  tool_names?: Array<string>;
}

/**
 * @title Message 数据结构
 * @description OpenAI API 合约中的 Message 结构定义。
 */
export type Message = {
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: Array<any>;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title phase 值
   * @description OpenAI API 合约中的 phase 值。
   */
  phase?: any;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: MessageRole;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: MessageStatus;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'message';
}

/**
 * @title Message Content Image File Object 数据结构
 * @description OpenAI API 合约中的 Message Content Image File Object 结构定义。
 */
export type MessageContentImageFileObject = {
  /**
   * @title image file 值
   * @description OpenAI API 合约中的 image file 值。
   */
  image_file: {
    /**
     * @title detail 值
     * @description OpenAI API 合约中的 detail 值。
     */
    detail?: 'auto' | 'low' | 'high';
    /**
     * @title file id 值
     * @description OpenAI API 合约中的 file id 值。
     */
    file_id: string
  };
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'image_file';
}

/**
 * @title Message Content Image Url Object 数据结构
 * @description OpenAI API 合约中的 Message Content Image Url Object 结构定义。
 */
export type MessageContentImageUrlObject = {
  /**
   * @title image url 值
   * @description OpenAI API 合约中的 image url 值。
   */
  image_url: {
    /**
     * @title detail 值
     * @description OpenAI API 合约中的 detail 值。
     */
    detail?: 'auto' | 'low' | 'high';
    /**
     * @title url 值
     * @description OpenAI API 合约中的 url 值。
     */
    url: string
  };
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'image_url';
}

/**
 * @title Message Content Refusal Object 数据结构
 * @description OpenAI API 合约中的 Message Content Refusal Object 结构定义。
 */
export type MessageContentRefusalObject = {
  /**
   * @title refusal 值
   * @description OpenAI API 合约中的 refusal 值。
   */
  refusal: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'refusal';
}

/**
 * @title Message Content Text Annotations File Citation Object 数据结构
 * @description OpenAI API 合约中的 Message Content Text Annotations File Citation Object 结构定义。
 */
export type MessageContentTextAnnotationsFileCitationObject = {
  /**
   * @title end index 值
   * @description OpenAI API 合约中的 end index 值。
   */
  end_index: number;
  /**
   * @title file citation 值
   * @description OpenAI API 合约中的 file citation 值。
   */
  file_citation: {
    /**
     * @title file id 值
     * @description OpenAI API 合约中的 file id 值。
     */
    file_id: string
  };
  /**
   * @title start index 值
   * @description OpenAI API 合约中的 start index 值。
   */
  start_index: number;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file_citation';
}

/**
 * @title Message Content Text Annotations File Path Object 数据结构
 * @description OpenAI API 合约中的 Message Content Text Annotations File Path Object 结构定义。
 */
export type MessageContentTextAnnotationsFilePathObject = {
  /**
   * @title end index 值
   * @description OpenAI API 合约中的 end index 值。
   */
  end_index: number;
  /**
   * @title file path 值
   * @description OpenAI API 合约中的 file path 值。
   */
  file_path: {
    /**
     * @title file id 值
     * @description OpenAI API 合约中的 file id 值。
     */
    file_id: string
  };
  /**
   * @title start index 值
   * @description OpenAI API 合约中的 start index 值。
   */
  start_index: number;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file_path';
}

/**
 * @title Message Content Text Object 数据结构
 * @description OpenAI API 合约中的 Message Content Text Object 结构定义。
 */
export type MessageContentTextObject = {
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: {
    /**
     * @title annotations 值
     * @description OpenAI API 合约中的 annotations 值。
     */
    annotations: Array<any>;
    /**
     * @title value 值
     * @description OpenAI API 合约中的 value 值。
     */
    value: string
  };
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'text';
}

/**
 * @title Message Delta Content Image File Object 数据结构
 * @description OpenAI API 合约中的 Message Delta Content Image File Object 结构定义。
 */
export type MessageDeltaContentImageFileObject = {
  /**
   * @title image file 值
   * @description OpenAI API 合约中的 image file 值。
   */
  image_file?: {
    /**
     * @title detail 值
     * @description OpenAI API 合约中的 detail 值。
     */
    detail?: 'auto' | 'low' | 'high';
    /**
     * @title file id 值
     * @description OpenAI API 合约中的 file id 值。
     */
    file_id?: string
  };
  /**
   * @title index 值
   * @description OpenAI API 合约中的 index 值。
   */
  index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'image_file';
}

/**
 * @title Message Delta Content Image Url Object 数据结构
 * @description OpenAI API 合约中的 Message Delta Content Image Url Object 结构定义。
 */
export type MessageDeltaContentImageUrlObject = {
  /**
   * @title image url 值
   * @description OpenAI API 合约中的 image url 值。
   */
  image_url?: {
    /**
     * @title detail 值
     * @description OpenAI API 合约中的 detail 值。
     */
    detail?: 'auto' | 'low' | 'high';
    /**
     * @title url 值
     * @description OpenAI API 合约中的 url 值。
     */
    url?: string
  };
  /**
   * @title index 值
   * @description OpenAI API 合约中的 index 值。
   */
  index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'image_url';
}

/**
 * @title Message Delta Content Refusal Object 数据结构
 * @description OpenAI API 合约中的 Message Delta Content Refusal Object 结构定义。
 */
export type MessageDeltaContentRefusalObject = {
  /**
   * @title index 值
   * @description OpenAI API 合约中的 index 值。
   */
  index: number;
  /**
   * @title refusal 值
   * @description OpenAI API 合约中的 refusal 值。
   */
  refusal?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'refusal';
}

/**
 * @title Message Delta Content Text Annotations File Citation Object 数据结构
 * @description OpenAI API 合约中的 Message Delta Content Text Annotations File Citation Object 结构定义。
 */
export type MessageDeltaContentTextAnnotationsFileCitationObject = {
  /**
   * @title end index 值
   * @description OpenAI API 合约中的 end index 值。
   */
  end_index?: number;
  /**
   * @title file citation 值
   * @description OpenAI API 合约中的 file citation 值。
   */
  file_citation?: {
    /**
     * @title file id 值
     * @description OpenAI API 合约中的 file id 值。
     */
    file_id?: string;
    /**
     * @title quote 值
     * @description OpenAI API 合约中的 quote 值。
     */
    quote?: string
  };
  /**
   * @title index 值
   * @description OpenAI API 合约中的 index 值。
   */
  index: number;
  /**
   * @title start index 值
   * @description OpenAI API 合约中的 start index 值。
   */
  start_index?: number;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file_citation';
}

/**
 * @title Message Delta Content Text Annotations File Path Object 数据结构
 * @description OpenAI API 合约中的 Message Delta Content Text Annotations File Path Object 结构定义。
 */
export type MessageDeltaContentTextAnnotationsFilePathObject = {
  /**
   * @title end index 值
   * @description OpenAI API 合约中的 end index 值。
   */
  end_index?: number;
  /**
   * @title file path 值
   * @description OpenAI API 合约中的 file path 值。
   */
  file_path?: {
    /**
     * @title file id 值
     * @description OpenAI API 合约中的 file id 值。
     */
    file_id?: string
  };
  /**
   * @title index 值
   * @description OpenAI API 合约中的 index 值。
   */
  index: number;
  /**
   * @title start index 值
   * @description OpenAI API 合约中的 start index 值。
   */
  start_index?: number;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file_path';
}

/**
 * @title Message Delta Content Text Object 数据结构
 * @description OpenAI API 合约中的 Message Delta Content Text Object 结构定义。
 */
export type MessageDeltaContentTextObject = {
  /**
   * @title index 值
   * @description OpenAI API 合约中的 index 值。
   */
  index: number;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text?: {
    /**
     * @title annotations 值
     * @description OpenAI API 合约中的 annotations 值。
     */
    annotations?: Array<any>;
    /**
     * @title value 值
     * @description OpenAI API 合约中的 value 值。
     */
    value?: string
  };
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'text';
}

/**
 * @title Message Delta Object 数据结构
 * @description OpenAI API 合约中的 Message Delta Object 结构定义。
 */
export type MessageDeltaObject = {
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: {
    /**
     * @title content 值
     * @description OpenAI API 合约中的 content 值。
     */
    content?: Array<any>;
    /**
     * @title role 值
     * @description OpenAI API 合约中的 role 值。
     */
    role?: 'user' | 'assistant'
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'thread.message.delta';
}

/**
 * @title Message Object 数据结构
 * @description OpenAI API 合约中的 Message Object 结构定义。
 */
export type MessageObject = {
  /**
   * @title assistant id 值
   * @description OpenAI API 合约中的 assistant id 值。
   */
  assistant_id: any;
  /**
   * @title attachments 值
   * @description OpenAI API 合约中的 attachments 值。
   */
  attachments: any;
  /**
   * @title completed at 值
   * @description OpenAI API 合约中的 completed at 值。
   */
  completed_at: any;
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: Array<any>;
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title incomplete at 值
   * @description OpenAI API 合约中的 incomplete at 值。
   */
  incomplete_at: any;
  /**
   * @title incomplete details 值
   * @description OpenAI API 合约中的 incomplete details 值。
   */
  incomplete_details: any;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata: Metadata;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'thread.message';
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'user' | 'assistant';
  /**
   * @title run id 值
   * @description OpenAI API 合约中的 run id 值。
   */
  run_id: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'in_progress' | 'incomplete' | 'completed';
  /**
   * @title thread id 值
   * @description OpenAI API 合约中的 thread id 值。
   */
  thread_id: string;
}

/**
 * @title Message Phase 数据结构
 * @description OpenAI API 合约中的 Message Phase 结构定义。
 */
export type MessagePhase = 'commentary' | 'final_answer'

/**
 * @title Message Request Content Text Object 数据结构
 * @description OpenAI API 合约中的 Message Request Content Text Object 结构定义。
 */
export type MessageRequestContentTextObject = {
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'text';
}

/**
 * @title Message Role 数据结构
 * @description OpenAI API 合约中的 Message Role 结构定义。
 */
export type MessageRole = 'unknown' | 'user' | 'assistant' | 'system' | 'critic' | 'discriminator' | 'developer' | 'tool'

/**
 * @title Message Status 数据结构
 * @description OpenAI API 合约中的 Message Status 结构定义。
 */
export type MessageStatus = 'in_progress' | 'completed' | 'incomplete'

/**
 * @title Message Stream Event 数据结构
 * @description OpenAI API 合约中的 Message Stream Event 结构定义。
 */
export type MessageStreamEvent = any

/**
 * @title Metadata 数据结构
 * @description OpenAI API 合约中的 Metadata 结构定义。
 */
export type Metadata = any

/**
 * @title Model 数据结构
 * @description OpenAI API 合约中的 Model 结构定义。
 */
export type Model = any

/**
 * @title Model Ids 数据结构
 * @description OpenAI API 合约中的 Model Ids 结构定义。
 */
export type ModelIds = any

/**
 * @title Model Ids Compaction 数据结构
 * @description OpenAI API 合约中的 Model Ids Compaction 结构定义。
 */
export type ModelIdsCompaction = any

/**
 * @title Model Ids Responses 数据结构
 * @description OpenAI API 合约中的 Model Ids Responses 结构定义。
 */
export type ModelIdsResponses = any

/**
 * @title Model Ids Shared 数据结构
 * @description OpenAI API 合约中的 Model Ids Shared 结构定义。
 */
export type ModelIdsShared = any

/**
 * @title Model Response Properties 数据结构
 * @description OpenAI API 合约中的 Model Response Properties 结构定义。
 */
export type ModelResponseProperties = {
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title prompt cache key 值
   * @description OpenAI API 合约中的 prompt cache key 值。
   */
  prompt_cache_key?: any;
  /**
   * @title prompt cache retention 值
   * @description OpenAI API 合约中的 prompt cache retention 值。
   */
  prompt_cache_retention?: any;
  /**
   * @title safety identifier 值
   * @description OpenAI API 合约中的 safety identifier 值。
   */
  safety_identifier?: any;
  /**
   * @title temperature 值
   * @description OpenAI API 合约中的 temperature 值。
   */
  temperature?: any;
  /**
   * @title top logprobs 值
   * @description OpenAI API 合约中的 top logprobs 值。
   */
  top_logprobs?: any;
  /**
   * @title top p 值
   * @description OpenAI API 合约中的 top p 值。
   */
  top_p?: any;
  /**
   * @title user 值
   * @description OpenAI API 合约中的 user 值。
   */
  user?: string;
}

/**
 * @title Moderation 数据结构
 * @description OpenAI API 合约中的 Moderation 结构定义。
 */
export type Moderation = {
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input: any;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: any;
}

/**
 * @title Moderation Config Param 数据结构
 * @description OpenAI API 合约中的 Moderation Config Param 结构定义。
 */
export type ModerationConfigParam = {
  /**
   * @title mode 值
   * @description OpenAI API 合约中的 mode 值。
   */
  mode: ModerationMode;
}

/**
 * @title Moderation Error Body 数据结构
 * @description OpenAI API 合约中的 Moderation Error Body 结构定义。
 */
export type ModerationErrorBody = {
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: string;
  /**
   * @title message 值
   * @description OpenAI API 合约中的 message 值。
   */
  message: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'error';
}

/**
 * @title Moderation Input Type 数据结构
 * @description OpenAI API 合约中的 Moderation Input Type 结构定义。
 */
export type ModerationInputType = 'text' | 'image'

/**
 * @title Moderation Mode 数据结构
 * @description OpenAI API 合约中的 Moderation Mode 结构定义。
 */
export type ModerationMode = 'score' | 'block'

/**
 * @title Moderation Param 数据结构
 * @description OpenAI API 合约中的 Moderation Param 结构定义。
 */
export type ModerationParam = {
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: string;
  /**
   * @title policy 值
   * @description OpenAI API 合约中的 policy 值。
   */
  policy?: any;
}

/**
 * @title Moderation Policy Param 数据结构
 * @description OpenAI API 合约中的 Moderation Policy Param 结构定义。
 */
export type ModerationPolicyParam = {
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input?: any;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output?: any;
}

/**
 * @title Moderation Result Body 数据结构
 * @description OpenAI API 合约中的 Moderation Result Body 结构定义。
 */
export type ModerationResultBody = {
  /**
   * @title categories 值
   * @description OpenAI API 合约中的 categories 值。
   */
  categories: Record<any, boolean>;
  /**
   * @title category applied input types 值
   * @description OpenAI API 合约中的 category applied input types 值。
   */
  category_applied_input_types: Record<any, Array<ModerationInputType>>;
  /**
   * @title category scores 值
   * @description OpenAI API 合约中的 category scores 值。
   */
  category_scores: Record<any, number>;
  /**
   * @title flagged 值
   * @description OpenAI API 合约中的 flagged 值。
   */
  flagged: boolean;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'moderation_result';
}

/**
 * @title Modify Assistant Request 数据结构
 * @description OpenAI API 合约中的 Modify Assistant Request 结构定义。
 */
export type ModifyAssistantRequest = {
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description?: any;
  /**
   * @title instructions 值
   * @description OpenAI API 合约中的 instructions 值。
   */
  instructions?: any;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: any;
  /**
   * @title reasoning effort 值
   * @description OpenAI API 合约中的 reasoning effort 值。
   */
  reasoning_effort?: ReasoningEffort;
  /**
   * @title response format 值
   * @description OpenAI API 合约中的 response format 值。
   */
  response_format?: any;
  /**
   * @title temperature 值
   * @description OpenAI API 合约中的 temperature 值。
   */
  temperature?: any;
  /**
   * @title tool resources 值
   * @description OpenAI API 合约中的 tool resources 值。
   */
  tool_resources?: any;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools?: Array<any>;
  /**
   * @title top p 值
   * @description OpenAI API 合约中的 top p 值。
   */
  top_p?: any;
}

/**
 * @title Modify Certificate Request 数据结构
 * @description OpenAI API 合约中的 Modify Certificate Request 结构定义。
 */
export type ModifyCertificateRequest = {
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: string;
}

/**
 * @title Modify Message Request 数据结构
 * @description OpenAI API 合约中的 Modify Message Request 结构定义。
 */
export type ModifyMessageRequest = {
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
}

/**
 * @title Modify Run Request 数据结构
 * @description OpenAI API 合约中的 Modify Run Request 结构定义。
 */
export type ModifyRunRequest = {
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
}

/**
 * @title Modify Thread Request 数据结构
 * @description OpenAI API 合约中的 Modify Thread Request 结构定义。
 */
export type ModifyThreadRequest = {
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title tool resources 值
   * @description OpenAI API 合约中的 tool resources 值。
   */
  tool_resources?: any;
}

/**
 * @title Move Param 数据结构
 * @description OpenAI API 合约中的 Move Param 结构定义。
 */
export type MoveParam = {
  /**
   * @title keys 值
   * @description OpenAI API 合约中的 keys 值。
   */
  keys?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'move';
  /**
   * @title x 值
   * @description OpenAI API 合约中的 x 值。
   */
  x: number;
  /**
   * @title y 值
   * @description OpenAI API 合约中的 y 值。
   */
  y: number;
}

/**
 * @title Namespace Tool Param 数据结构
 * @description OpenAI API 合约中的 Namespace Tool Param 结构定义。
 */
export type NamespaceToolParam = {
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools: Array<any>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'namespace';
}

/**
 * @title Noise Reduction Type 数据结构
 * @description OpenAI API 合约中的 Noise Reduction Type 结构定义。
 */
export type NoiseReductionType = 'near_field' | 'far_field'

/**
 * @title Open AIFile 数据结构
 * @description OpenAI API 合约中的 Open AIFile 结构定义。
 */
export type OpenAIFile = any

/**
 * @title Order Enum 数据结构
 * @description OpenAI API 合约中的 Order Enum 结构定义。
 */
export type OrderEnum = 'asc' | 'desc'

/**
 * @title Organization Certificate 数据结构
 * @description OpenAI API 合约中的 Organization Certificate 结构定义。
 */
export type OrganizationCertificate = {
  /**
   * @title active 值
   * @description OpenAI API 合约中的 active 值。
   */
  active: boolean;
  /**
   * @title certificate details 值
   * @description OpenAI API 合约中的 certificate details 值。
   */
  certificate_details: {
    /**
     * @title expires at 值
     * @description OpenAI API 合约中的 expires at 值。
     */
    expires_at?: number;
    /**
     * @title valid at 值
     * @description OpenAI API 合约中的 valid at 值。
     */
    valid_at?: number
  };
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.certificate';
}

/**
 * @title Organization Certificate Activation Response 数据结构
 * @description OpenAI API 合约中的 Organization Certificate Activation Response 结构定义。
 */
export type OrganizationCertificateActivationResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<OrganizationCertificate>;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.certificate.activation';
}

/**
 * @title Organization Certificate Deactivation Response 数据结构
 * @description OpenAI API 合约中的 Organization Certificate Deactivation Response 结构定义。
 */
export type OrganizationCertificateDeactivationResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<OrganizationCertificate>;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.certificate.deactivation';
}

/**
 * @title Organization Data Retention 数据结构
 * @description OpenAI API 合约中的 Organization Data Retention 结构定义。
 */
export type OrganizationDataRetention = {
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.data_retention';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'zero_data_retention' | 'modified_abuse_monitoring' | 'enhanced_zero_data_retention' | 'enhanced_modified_abuse_monitoring';
}

/**
 * @title Organization Project Certificate 数据结构
 * @description OpenAI API 合约中的 Organization Project Certificate 结构定义。
 */
export type OrganizationProjectCertificate = {
  /**
   * @title active 值
   * @description OpenAI API 合约中的 active 值。
   */
  active: boolean;
  /**
   * @title certificate details 值
   * @description OpenAI API 合约中的 certificate details 值。
   */
  certificate_details: {
    /**
     * @title expires at 值
     * @description OpenAI API 合约中的 expires at 值。
     */
    expires_at?: number;
    /**
     * @title valid at 值
     * @description OpenAI API 合约中的 valid at 值。
     */
    valid_at?: number
  };
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.project.certificate';
}

/**
 * @title Organization Project Certificate Activation Response 数据结构
 * @description OpenAI API 合约中的 Organization Project Certificate Activation Response 结构定义。
 */
export type OrganizationProjectCertificateActivationResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<OrganizationProjectCertificate>;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.project.certificate.activation';
}

/**
 * @title Organization Project Certificate Deactivation Response 数据结构
 * @description OpenAI API 合约中的 Organization Project Certificate Deactivation Response 结构定义。
 */
export type OrganizationProjectCertificateDeactivationResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<OrganizationProjectCertificate>;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.project.certificate.deactivation';
}

/**
 * @title Organization Spend Alert 数据结构
 * @description OpenAI API 合约中的 Organization Spend Alert 结构定义。
 */
export type OrganizationSpendAlert = {
  /**
   * @title currency 值
   * @description OpenAI API 合约中的 currency 值。
   */
  currency: 'USD';
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title interval 值
   * @description OpenAI API 合约中的 interval 值。
   */
  interval: 'month';
  /**
   * @title notification channel 值
   * @description OpenAI API 合约中的 notification channel 值。
   */
  notification_channel: SpendAlertNotificationChannel;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.spend_alert';
  /**
   * @title threshold amount 值
   * @description OpenAI API 合约中的 threshold amount 值。
   */
  threshold_amount: number;
}

/**
 * @title Organization Spend Alert Deleted Resource 数据结构
 * @description OpenAI API 合约中的 Organization Spend Alert Deleted Resource 结构定义。
 */
export type OrganizationSpendAlertDeletedResource = {
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
  object: 'organization.spend_alert.deleted';
}

/**
 * @title Organization Spend Alert List Resource 数据结构
 * @description OpenAI API 合约中的 Organization Spend Alert List Resource 结构定义。
 */
export type OrganizationSpendAlertListResource = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<OrganizationSpendAlert>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id: any;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Organization Spend Limit Deleted Resource 数据结构
 * @description OpenAI API 合约中的 Organization Spend Limit Deleted Resource 结构定义。
 */
export type OrganizationSpendLimitDeletedResource = {
  /**
   * @title deleted 值
   * @description OpenAI API 合约中的 deleted 值。
   */
  deleted: boolean;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.spend_limit.deleted';
}

/**
 * @title Organization Spend Limit Resource 数据结构
 * @description OpenAI API 合约中的 Organization Spend Limit Resource 结构定义。
 */
export type OrganizationSpendLimitResource = {
  /**
   * @title currency 值
   * @description OpenAI API 合约中的 currency 值。
   */
  currency: SpendLimitCurrency;
  /**
   * @title enforcement 值
   * @description OpenAI API 合约中的 enforcement 值。
   */
  enforcement: SpendLimitEnforcement;
  /**
   * @title interval 值
   * @description OpenAI API 合约中的 interval 值。
   */
  interval: SpendLimitInterval;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.spend_limit';
  /**
   * @title threshold amount 值
   * @description OpenAI API 合约中的 threshold amount 值。
   */
  threshold_amount: number;
}

/**
 * @title Other Chunking Strategy Response Param 数据结构
 * @description OpenAI API 合约中的 Other Chunking Strategy Response Param 结构定义。
 */
export type OtherChunkingStrategyResponseParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'other';
}

/**
 * @title Output Audio 数据结构
 * @description OpenAI API 合约中的 Output Audio 结构定义。
 */
export type OutputAudio = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: string;
  /**
   * @title transcript 值
   * @description OpenAI API 合约中的 transcript 值。
   */
  transcript: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'output_audio';
}

/**
 * @title Output Content 数据结构
 * @description OpenAI API 合约中的 Output Content 结构定义。
 */
export type OutputContent = any

/**
 * @title Output Item 数据结构
 * @description OpenAI API 合约中的 Output Item 结构定义。
 */
export type OutputItem = any

/**
 * @title Output Message 数据结构
 * @description OpenAI API 合约中的 Output Message 结构定义。
 */
export type OutputMessage = {
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: Array<OutputMessageContent>;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title phase 值
   * @description OpenAI API 合约中的 phase 值。
   */
  phase?: any;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'assistant';
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'in_progress' | 'completed' | 'incomplete';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'message';
}

/**
 * @title Output Message Content 数据结构
 * @description OpenAI API 合约中的 Output Message Content 结构定义。
 */
export type OutputMessageContent = any

/**
 * @title Output Text Content 数据结构
 * @description OpenAI API 合约中的 Output Text Content 结构定义。
 */
export type OutputTextContent = {
  /**
   * @title annotations 值
   * @description OpenAI API 合约中的 annotations 值。
   */
  annotations: Array<Annotation>;
  /**
   * @title logprobs 值
   * @description OpenAI API 合约中的 logprobs 值。
   */
  logprobs: Array<LogProb>;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'output_text';
}

/**
 * @title Parallel Tool Calls 数据结构
 * @description OpenAI API 合约中的 Parallel Tool Calls 结构定义。
 */
export type ParallelToolCalls = boolean

/**
 * @title Partial Images 数据结构
 * @description OpenAI API 合约中的 Partial Images 结构定义。
 */
export type PartialImages = any

/**
 * @title Personality Enum 数据结构
 * @description OpenAI API 合约中的 Personality Enum 结构定义。
 */
export type PersonalityEnum = any

/**
 * @title Prediction Content 数据结构
 * @description OpenAI API 合约中的 Prediction Content 结构定义。
 */
export type PredictionContent = {
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'content';
}

/**
 * @title Program 数据结构
 * @description OpenAI API 合约中的 Program 结构定义。
 */
export type Program = {
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: string;
  /**
   * @title fingerprint 值
   * @description OpenAI API 合约中的 fingerprint 值。
   */
  fingerprint: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'program';
}

/**
 * @title Program Item Param 数据结构
 * @description OpenAI API 合约中的 Program Item Param 结构定义。
 */
export type ProgramItemParam = {
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: string;
  /**
   * @title fingerprint 值
   * @description OpenAI API 合约中的 fingerprint 值。
   */
  fingerprint: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'program';
}

/**
 * @title Program Output 数据结构
 * @description OpenAI API 合约中的 Program Output 结构定义。
 */
export type ProgramOutput = {
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title result 值
   * @description OpenAI API 合约中的 result 值。
   */
  result: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: ProgramOutputStatus;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'program_output';
}

/**
 * @title Program Output Item Param 数据结构
 * @description OpenAI API 合约中的 Program Output Item Param 结构定义。
 */
export type ProgramOutputItemParam = {
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title result 值
   * @description OpenAI API 合约中的 result 值。
   */
  result: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: ProgramOutputItemStatus;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'program_output';
}

/**
 * @title Program Output Item Status 数据结构
 * @description OpenAI API 合约中的 Program Output Item Status 结构定义。
 */
export type ProgramOutputItemStatus = 'completed' | 'incomplete'

/**
 * @title Program Output Status 数据结构
 * @description OpenAI API 合约中的 Program Output Status 结构定义。
 */
export type ProgramOutputStatus = 'completed' | 'incomplete'

/**
 * @title Program Tool Call Caller 数据结构
 * @description OpenAI API 合约中的 Program Tool Call Caller 结构定义。
 */
export type ProgramToolCallCaller = {
  /**
   * @title caller id 值
   * @description OpenAI API 合约中的 caller id 值。
   */
  caller_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'program';
}

/**
 * @title Program Tool Call Caller Param 数据结构
 * @description OpenAI API 合约中的 Program Tool Call Caller Param 结构定义。
 */
export type ProgramToolCallCallerParam = {
  /**
   * @title caller id 值
   * @description OpenAI API 合约中的 caller id 值。
   */
  caller_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'program';
}

/**
 * @title Programmatic Tool Calling Param 数据结构
 * @description OpenAI API 合约中的 Programmatic Tool Calling Param 结构定义。
 */
export type ProgrammaticToolCallingParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'programmatic_tool_calling';
}

/**
 * @title Project 数据结构
 * @description OpenAI API 合约中的 Project 结构定义。
 */
export type Project = {
  /**
   * @title archived at 值
   * @description OpenAI API 合约中的 archived at 值。
   */
  archived_at?: any;
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title external key id 值
   * @description OpenAI API 合约中的 external key id 值。
   */
  external_key_id?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.project';
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: any;
}

/**
 * @title Project Api Key 数据结构
 * @description OpenAI API 合约中的 Project Api Key 结构定义。
 */
export type ProjectApiKey = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title last used at 值
   * @description OpenAI API 合约中的 last used at 值。
   */
  last_used_at: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.project.api_key';
  /**
   * @title owner 值
   * @description OpenAI API 合约中的 owner 值。
   */
  owner: {
    /**
     * @title service account 值
     * @description OpenAI API 合约中的 service account 值。
     */
    service_account?: ProjectApiKeyOwnerServiceAccount;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: 'user' | 'service_account';
    /**
     * @title user 值
     * @description OpenAI API 合约中的 user 值。
     */
    user?: ProjectApiKeyOwnerUser
  };
  /**
   * @title owner project access 值
   * @description OpenAI API 合约中的 owner project access 值。
   */
  owner_project_access: 'active' | 'inactive';
  /**
   * @title redacted value 值
   * @description OpenAI API 合约中的 redacted value 值。
   */
  redacted_value: string;
}

/**
 * @title Project Api Key Delete Response 数据结构
 * @description OpenAI API 合约中的 Project Api Key Delete Response 结构定义。
 */
export type ProjectApiKeyDeleteResponse = {
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
  object: 'organization.project.api_key.deleted';
}

/**
 * @title Project Api Key List Response 数据结构
 * @description OpenAI API 合约中的 Project Api Key List Response 结构定义。
 */
export type ProjectApiKeyListResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<ProjectApiKey>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id?: any;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id?: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Project Api Key Owner Service Account 数据结构
 * @description OpenAI API 合约中的 Project Api Key Owner Service Account 结构定义。
 */
export type ProjectApiKeyOwnerServiceAccount = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: string;
}

/**
 * @title Project Api Key Owner User 数据结构
 * @description OpenAI API 合约中的 Project Api Key Owner User 结构定义。
 */
export type ProjectApiKeyOwnerUser = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title email 值
   * @description OpenAI API 合约中的 email 值。
   */
  email: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: string;
}

/**
 * @title Project Create Request 数据结构
 * @description OpenAI API 合约中的 Project Create Request 结构定义。
 */
export type ProjectCreateRequest = {
  /**
   * @title external key id 值
   * @description OpenAI API 合约中的 external key id 值。
   */
  external_key_id?: any;
  /**
   * @title geography 值
   * @description OpenAI API 合约中的 geography 值。
   */
  geography?: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
}

/**
 * @title Project Data Retention 数据结构
 * @description OpenAI API 合约中的 Project Data Retention 结构定义。
 */
export type ProjectDataRetention = {
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'project.data_retention';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'organization_default' | 'none' | 'zero_data_retention' | 'modified_abuse_monitoring' | 'enhanced_zero_data_retention' | 'enhanced_modified_abuse_monitoring';
}

/**
 * @title Project Group 数据结构
 * @description OpenAI API 合约中的 Project Group 结构定义。
 */
export type ProjectGroup = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title group id 值
   * @description OpenAI API 合约中的 group id 值。
   */
  group_id: string;
  /**
   * @title group name 值
   * @description OpenAI API 合约中的 group name 值。
   */
  group_name: string;
  /**
   * @title group type 值
   * @description OpenAI API 合约中的 group type 值。
   */
  group_type: 'group' | 'tenant_group';
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'project.group';
  /**
   * @title project id 值
   * @description OpenAI API 合约中的 project id 值。
   */
  project_id: string;
}

/**
 * @title Project Group Deleted Resource 数据结构
 * @description OpenAI API 合约中的 Project Group Deleted Resource 结构定义。
 */
export type ProjectGroupDeletedResource = {
  /**
   * @title deleted 值
   * @description OpenAI API 合约中的 deleted 值。
   */
  deleted: boolean;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'project.group.deleted';
}

/**
 * @title Project Group List Resource 数据结构
 * @description OpenAI API 合约中的 Project Group List Resource 结构定义。
 */
export type ProjectGroupListResource = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<ProjectGroup>;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title next 值
   * @description OpenAI API 合约中的 next 值。
   */
  next: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Project Hosted Tool Permissions 数据结构
 * @description OpenAI API 合约中的 Project Hosted Tool Permissions 结构定义。
 */
export type ProjectHostedToolPermissions = {
  /**
   * @title code interpreter 值
   * @description OpenAI API 合约中的 code interpreter 值。
   */
  code_interpreter: HostedToolPermission;
  /**
   * @title file search 值
   * @description OpenAI API 合约中的 file search 值。
   */
  file_search: HostedToolPermission;
  /**
   * @title image generation 值
   * @description OpenAI API 合约中的 image generation 值。
   */
  image_generation: HostedToolPermission;
  /**
   * @title mcp 值
   * @description OpenAI API 合约中的 mcp 值。
   */
  mcp: HostedToolPermission;
  /**
   * @title web search 值
   * @description OpenAI API 合约中的 web search 值。
   */
  web_search: HostedToolPermission;
}

/**
 * @title Project Hosted Tool Permissions Update Request 数据结构
 * @description OpenAI API 合约中的 Project Hosted Tool Permissions Update Request 结构定义。
 */
export type ProjectHostedToolPermissionsUpdateRequest = {
  /**
   * @title code interpreter 值
   * @description OpenAI API 合约中的 code interpreter 值。
   */
  code_interpreter?: any;
  /**
   * @title file search 值
   * @description OpenAI API 合约中的 file search 值。
   */
  file_search?: any;
  /**
   * @title image generation 值
   * @description OpenAI API 合约中的 image generation 值。
   */
  image_generation?: any;
  /**
   * @title mcp 值
   * @description OpenAI API 合约中的 mcp 值。
   */
  mcp?: any;
  /**
   * @title web search 值
   * @description OpenAI API 合约中的 web search 值。
   */
  web_search?: any;
}

/**
 * @title Project List Response 数据结构
 * @description OpenAI API 合约中的 Project List Response 结构定义。
 */
export type ProjectListResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<Project>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id?: any;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id?: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Project Model Permissions 数据结构
 * @description OpenAI API 合约中的 Project Model Permissions 结构定义。
 */
export type ProjectModelPermissions = {
  /**
   * @title mode 值
   * @description OpenAI API 合约中的 mode 值。
   */
  mode: 'allow_list' | 'deny_list';
  /**
   * @title model ids 值
   * @description OpenAI API 合约中的 model ids 值。
   */
  model_ids: Array<string>;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'project.model_permissions';
}

/**
 * @title Project Model Permissions Delete Response 数据结构
 * @description OpenAI API 合约中的 Project Model Permissions Delete Response 结构定义。
 */
export type ProjectModelPermissionsDeleteResponse = {
  /**
   * @title deleted 值
   * @description OpenAI API 合约中的 deleted 值。
   */
  deleted: boolean;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'project.model_permissions.deleted';
}

/**
 * @title Project Model Permissions Update Request 数据结构
 * @description OpenAI API 合约中的 Project Model Permissions Update Request 结构定义。
 */
export type ProjectModelPermissionsUpdateRequest = {
  /**
   * @title mode 值
   * @description OpenAI API 合约中的 mode 值。
   */
  mode: 'allow_list' | 'deny_list';
  /**
   * @title model ids 值
   * @description OpenAI API 合约中的 model ids 值。
   */
  model_ids: Array<string>;
}

/**
 * @title Project Rate Limit 数据结构
 * @description OpenAI API 合约中的 Project Rate Limit 结构定义。
 */
export type ProjectRateLimit = {
  /**
   * @title batch 1 day max input tokens 值
   * @description OpenAI API 合约中的 batch 1 day max input tokens 值。
   */
  batch_1_day_max_input_tokens?: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title max audio megabytes per 1 minute 值
   * @description OpenAI API 合约中的 max audio megabytes per 1 minute 值。
   */
  max_audio_megabytes_per_1_minute?: number;
  /**
   * @title max images per 1 minute 值
   * @description OpenAI API 合约中的 max images per 1 minute 值。
   */
  max_images_per_1_minute?: number;
  /**
   * @title max requests per 1 day 值
   * @description OpenAI API 合约中的 max requests per 1 day 值。
   */
  max_requests_per_1_day?: number;
  /**
   * @title max requests per 1 minute 值
   * @description OpenAI API 合约中的 max requests per 1 minute 值。
   */
  max_requests_per_1_minute: number;
  /**
   * @title max tokens per 1 minute 值
   * @description OpenAI API 合约中的 max tokens per 1 minute 值。
   */
  max_tokens_per_1_minute: number;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'project.rate_limit';
}

/**
 * @title Project Rate Limit List Response 数据结构
 * @description OpenAI API 合约中的 Project Rate Limit List Response 结构定义。
 */
export type ProjectRateLimitListResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<ProjectRateLimit>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id?: any;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id?: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Project Rate Limit Update Request 数据结构
 * @description OpenAI API 合约中的 Project Rate Limit Update Request 结构定义。
 */
export type ProjectRateLimitUpdateRequest = {
  /**
   * @title batch 1 day max input tokens 值
   * @description OpenAI API 合约中的 batch 1 day max input tokens 值。
   */
  batch_1_day_max_input_tokens?: number;
  /**
   * @title max audio megabytes per 1 minute 值
   * @description OpenAI API 合约中的 max audio megabytes per 1 minute 值。
   */
  max_audio_megabytes_per_1_minute?: number;
  /**
   * @title max images per 1 minute 值
   * @description OpenAI API 合约中的 max images per 1 minute 值。
   */
  max_images_per_1_minute?: number;
  /**
   * @title max requests per 1 day 值
   * @description OpenAI API 合约中的 max requests per 1 day 值。
   */
  max_requests_per_1_day?: number;
  /**
   * @title max requests per 1 minute 值
   * @description OpenAI API 合约中的 max requests per 1 minute 值。
   */
  max_requests_per_1_minute?: number;
  /**
   * @title max tokens per 1 minute 值
   * @description OpenAI API 合约中的 max tokens per 1 minute 值。
   */
  max_tokens_per_1_minute?: number;
}

/**
 * @title Project Service Account 数据结构
 * @description OpenAI API 合约中的 Project Service Account 结构定义。
 */
export type ProjectServiceAccount = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.project.service_account';
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'owner' | 'member' | 'none';
}

/**
 * @title Project Service Account Api Key 数据结构
 * @description OpenAI API 合约中的 Project Service Account Api Key 结构定义。
 */
export type ProjectServiceAccountApiKey = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.project.service_account.api_key';
  /**
   * @title value 值
   * @description OpenAI API 合约中的 value 值。
   */
  value: string;
}

/**
 * @title Project Service Account Create Request 数据结构
 * @description OpenAI API 合约中的 Project Service Account Create Request 结构定义。
 */
export type ProjectServiceAccountCreateRequest = {
  /**
   * @title create service account only 值
   * @description OpenAI API 合约中的 create service account only 值。
   */
  create_service_account_only?: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
}

/**
 * @title Project Service Account Create Response 数据结构
 * @description OpenAI API 合约中的 Project Service Account Create Response 结构定义。
 */
export type ProjectServiceAccountCreateResponse = {
  /**
   * @title api key 值
   * @description OpenAI API 合约中的 api key 值。
   */
  api_key: any;
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.project.service_account';
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'member' | 'none';
}

/**
 * @title Project Service Account Delete Response 数据结构
 * @description OpenAI API 合约中的 Project Service Account Delete Response 结构定义。
 */
export type ProjectServiceAccountDeleteResponse = {
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
  object: 'organization.project.service_account.deleted';
}

/**
 * @title Project Service Account List Response 数据结构
 * @description OpenAI API 合约中的 Project Service Account List Response 结构定义。
 */
export type ProjectServiceAccountListResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<ProjectServiceAccount>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id?: any;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id?: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Project Spend Alert 数据结构
 * @description OpenAI API 合约中的 Project Spend Alert 结构定义。
 */
export type ProjectSpendAlert = {
  /**
   * @title currency 值
   * @description OpenAI API 合约中的 currency 值。
   */
  currency: 'USD';
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title interval 值
   * @description OpenAI API 合约中的 interval 值。
   */
  interval: 'month';
  /**
   * @title notification channel 值
   * @description OpenAI API 合约中的 notification channel 值。
   */
  notification_channel: SpendAlertNotificationChannel;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'project.spend_alert';
  /**
   * @title threshold amount 值
   * @description OpenAI API 合约中的 threshold amount 值。
   */
  threshold_amount: number;
}

/**
 * @title Project Spend Alert Deleted Resource 数据结构
 * @description OpenAI API 合约中的 Project Spend Alert Deleted Resource 结构定义。
 */
export type ProjectSpendAlertDeletedResource = {
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
  object: 'project.spend_alert.deleted';
}

/**
 * @title Project Spend Alert List Resource 数据结构
 * @description OpenAI API 合约中的 Project Spend Alert List Resource 结构定义。
 */
export type ProjectSpendAlertListResource = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<ProjectSpendAlert>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id: any;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Project Spend Limit Deleted Resource 数据结构
 * @description OpenAI API 合约中的 Project Spend Limit Deleted Resource 结构定义。
 */
export type ProjectSpendLimitDeletedResource = {
  /**
   * @title deleted 值
   * @description OpenAI API 合约中的 deleted 值。
   */
  deleted: boolean;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'project.spend_limit.deleted';
}

/**
 * @title Project Spend Limit Resource 数据结构
 * @description OpenAI API 合约中的 Project Spend Limit Resource 结构定义。
 */
export type ProjectSpendLimitResource = {
  /**
   * @title currency 值
   * @description OpenAI API 合约中的 currency 值。
   */
  currency: SpendLimitCurrency;
  /**
   * @title enforcement 值
   * @description OpenAI API 合约中的 enforcement 值。
   */
  enforcement: SpendLimitEnforcement;
  /**
   * @title interval 值
   * @description OpenAI API 合约中的 interval 值。
   */
  interval: SpendLimitInterval;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'project.spend_limit';
  /**
   * @title threshold amount 值
   * @description OpenAI API 合约中的 threshold amount 值。
   */
  threshold_amount: number;
}

/**
 * @title Project Update Request 数据结构
 * @description OpenAI API 合约中的 Project Update Request 结构定义。
 */
export type ProjectUpdateRequest = {
  /**
   * @title external key id 值
   * @description OpenAI API 合约中的 external key id 值。
   */
  external_key_id?: any;
  /**
   * @title geography 值
   * @description OpenAI API 合约中的 geography 值。
   */
  geography?: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: any;
}

/**
 * @title Project User 数据结构
 * @description OpenAI API 合约中的 Project User 结构定义。
 */
export type ProjectUser = {
  /**
   * @title added at 值
   * @description OpenAI API 合约中的 added at 值。
   */
  added_at: number;
  /**
   * @title email 值
   * @description OpenAI API 合约中的 email 值。
   */
  email?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.project.user';
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: string;
}

/**
 * @title Project User Create Request 数据结构
 * @description OpenAI API 合约中的 Project User Create Request 结构定义。
 */
export type ProjectUserCreateRequest = {
  /**
   * @title email 值
   * @description OpenAI API 合约中的 email 值。
   */
  email?: any;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: string;
  /**
   * @title user id 值
   * @description OpenAI API 合约中的 user id 值。
   */
  user_id?: any;
}

/**
 * @title Project User Delete Response 数据结构
 * @description OpenAI API 合约中的 Project User Delete Response 结构定义。
 */
export type ProjectUserDeleteResponse = {
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
  object: 'organization.project.user.deleted';
}

/**
 * @title Project User List Response 数据结构
 * @description OpenAI API 合约中的 Project User List Response 结构定义。
 */
export type ProjectUserListResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<ProjectUser>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id?: any;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id?: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: string;
}

/**
 * @title Project User Update Request 数据结构
 * @description OpenAI API 合约中的 Project User Update Request 结构定义。
 */
export type ProjectUserUpdateRequest = {
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role?: any;
}

/**
 * @title Prompt 数据结构
 * @description OpenAI API 合约中的 Prompt 结构定义。
 */
export type Prompt = any

/**
 * @title Prompt Cache Breakpoint Config 数据结构
 * @description OpenAI API 合约中的 Prompt Cache Breakpoint Config 结构定义。
 */
export type PromptCacheBreakpointConfig = {
  /**
   * @title mode 值
   * @description OpenAI API 合约中的 mode 值。
   */
  mode: 'explicit';
}

/**
 * @title Prompt Cache Breakpoint Param 数据结构
 * @description OpenAI API 合约中的 Prompt Cache Breakpoint Param 结构定义。
 */
export type PromptCacheBreakpointParam = {
  /**
   * @title mode 值
   * @description OpenAI API 合约中的 mode 值。
   */
  mode: 'explicit';
}

/**
 * @title Prompt Cache Mode Enum 数据结构
 * @description OpenAI API 合约中的 Prompt Cache Mode Enum 结构定义。
 */
export type PromptCacheModeEnum = 'implicit' | 'explicit'

/**
 * @title Prompt Cache Options 数据结构
 * @description OpenAI API 合约中的 Prompt Cache Options 结构定义。
 */
export type PromptCacheOptions = {
  /**
   * @title mode 值
   * @description OpenAI API 合约中的 mode 值。
   */
  mode: PromptCacheModeEnum;
  /**
   * @title ttl 值
   * @description OpenAI API 合约中的 ttl 值。
   */
  ttl: PromptCacheTTLEnum;
}

/**
 * @title Prompt Cache Options Param 数据结构
 * @description OpenAI API 合约中的 Prompt Cache Options Param 结构定义。
 */
export type PromptCacheOptionsParam = {
  /**
   * @title mode 值
   * @description OpenAI API 合约中的 mode 值。
   */
  mode?: PromptCacheModeEnum;
  /**
   * @title ttl 值
   * @description OpenAI API 合约中的 ttl 值。
   */
  ttl?: PromptCacheTTLEnum;
}

/**
 * @title Prompt Cache Retention Enum 数据结构
 * @description OpenAI API 合约中的 Prompt Cache Retention Enum 结构定义。
 */
export type PromptCacheRetentionEnum = 'in_memory' | '24h'

/**
 * @title Prompt Cache TTLEnum 数据结构
 * @description OpenAI API 合约中的 Prompt Cache TTLEnum 结构定义。
 */
export type PromptCacheTTLEnum = '30m'

/**
 * @title Provenance Check Object 数据结构
 * @description OpenAI API 合约中的 Provenance Check Object 结构定义。
 */
export type ProvenanceCheckObject = 'content_provenance_check'

/**
 * @title Provenance Detection Result Api 数据结构
 * @description OpenAI API 合约中的 Provenance Detection Result Api 结构定义。
 */
export type ProvenanceDetectionResultApi = 'detected' | 'not_detected'

/**
 * @title Provenance Resource 数据结构
 * @description OpenAI API 合约中的 Provenance Resource 结构定义。
 */
export type ProvenanceResource = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: ProvenanceCheckObject;
  /**
   * @title results 值
   * @description OpenAI API 合约中的 results 值。
   */
  results: Array<any>;
}

/**
 * @title Public Assign Organization Group Role Body 数据结构
 * @description OpenAI API 合约中的 Public Assign Organization Group Role Body 结构定义。
 */
export type PublicAssignOrganizationGroupRoleBody = {
  /**
   * @title role id 值
   * @description OpenAI API 合约中的 role id 值。
   */
  role_id: string;
}

/**
 * @title Public Create Organization Role Body 数据结构
 * @description OpenAI API 合约中的 Public Create Organization Role Body 结构定义。
 */
export type PublicCreateOrganizationRoleBody = {
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description?: any;
  /**
   * @title permissions 值
   * @description OpenAI API 合约中的 permissions 值。
   */
  permissions: Array<string>;
  /**
   * @title role name 值
   * @description OpenAI API 合约中的 role name 值。
   */
  role_name: string;
}

/**
 * @title Public Role List Resource 数据结构
 * @description OpenAI API 合约中的 Public Role List Resource 结构定义。
 */
export type PublicRoleListResource = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<Role>;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title next 值
   * @description OpenAI API 合约中的 next 值。
   */
  next: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Public Update Organization Role Body 数据结构
 * @description OpenAI API 合约中的 Public Update Organization Role Body 结构定义。
 */
export type PublicUpdateOrganizationRoleBody = {
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description?: any;
  /**
   * @title permissions 值
   * @description OpenAI API 合约中的 permissions 值。
   */
  permissions?: any;
  /**
   * @title role name 值
   * @description OpenAI API 合约中的 role name 值。
   */
  role_name?: any;
}

/**
 * @title Ranker Version Type 数据结构
 * @description OpenAI API 合约中的 Ranker Version Type 结构定义。
 */
export type RankerVersionType = 'auto' | 'default-2024-11-15'

/**
 * @title Ranking Options 数据结构
 * @description OpenAI API 合约中的 Ranking Options 结构定义。
 */
export type RankingOptions = {
  /**
   * @title hybrid search 值
   * @description OpenAI API 合约中的 hybrid search 值。
   */
  hybrid_search?: HybridSearchOptions;
  /**
   * @title ranker 值
   * @description OpenAI API 合约中的 ranker 值。
   */
  ranker?: RankerVersionType;
  /**
   * @title score threshold 值
   * @description OpenAI API 合约中的 score threshold 值。
   */
  score_threshold?: number;
}

/**
 * @title Rate Limits Param 数据结构
 * @description OpenAI API 合约中的 Rate Limits Param 结构定义。
 */
export type RateLimitsParam = {
  /**
   * @title max requests per 1 minute 值
   * @description OpenAI API 合约中的 max requests per 1 minute 值。
   */
  max_requests_per_1_minute?: number;
}

/**
 * @title Realtime Audio Formats 数据结构
 * @description OpenAI API 合约中的 Realtime Audio Formats 结构定义。
 */
export type RealtimeAudioFormats = any

/**
 * @title Realtime Beta Client Event Conversation Item Create 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Client Event Conversation Item Create 结构定义。
 */
export type RealtimeBetaClientEventConversationItemCreate = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title item 值
   * @description OpenAI API 合约中的 item 值。
   */
  item: RealtimeConversationItem;
  /**
   * @title previous item id 值
   * @description OpenAI API 合约中的 previous item id 值。
   */
  previous_item_id?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.create';
}

/**
 * @title Realtime Beta Client Event Conversation Item Delete 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Client Event Conversation Item Delete 结构定义。
 */
export type RealtimeBetaClientEventConversationItemDelete = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.delete';
}

/**
 * @title Realtime Beta Client Event Conversation Item Retrieve 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Client Event Conversation Item Retrieve 结构定义。
 */
export type RealtimeBetaClientEventConversationItemRetrieve = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.retrieve';
}

/**
 * @title Realtime Beta Client Event Conversation Item Truncate 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Client Event Conversation Item Truncate 结构定义。
 */
export type RealtimeBetaClientEventConversationItemTruncate = {
  /**
   * @title audio end ms 值
   * @description OpenAI API 合约中的 audio end ms 值。
   */
  audio_end_ms: number;
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.truncate';
}

/**
 * @title Realtime Beta Client Event Input Audio Buffer Append 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Client Event Input Audio Buffer Append 结构定义。
 */
export type RealtimeBetaClientEventInputAudioBufferAppend = {
  /**
   * @title audio 值
   * @description OpenAI API 合约中的 audio 值。
   */
  audio: string;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_audio_buffer.append';
}

/**
 * @title Realtime Beta Client Event Input Audio Buffer Clear 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Client Event Input Audio Buffer Clear 结构定义。
 */
export type RealtimeBetaClientEventInputAudioBufferClear = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_audio_buffer.clear';
}

/**
 * @title Realtime Beta Client Event Input Audio Buffer Commit 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Client Event Input Audio Buffer Commit 结构定义。
 */
export type RealtimeBetaClientEventInputAudioBufferCommit = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_audio_buffer.commit';
}

/**
 * @title Realtime Beta Client Event Output Audio Buffer Clear 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Client Event Output Audio Buffer Clear 结构定义。
 */
export type RealtimeBetaClientEventOutputAudioBufferClear = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'output_audio_buffer.clear';
}

/**
 * @title Realtime Beta Client Event Response Cancel 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Client Event Response Cancel 结构定义。
 */
export type RealtimeBetaClientEventResponseCancel = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.cancel';
}

/**
 * @title Realtime Beta Client Event Response Create 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Client Event Response Create 结构定义。
 */
export type RealtimeBetaClientEventResponseCreate = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title response 值
   * @description OpenAI API 合约中的 response 值。
   */
  response?: RealtimeBetaResponseCreateParams;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.create';
}

/**
 * @title Realtime Beta Client Event Session Update 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Client Event Session Update 结构定义。
 */
export type RealtimeBetaClientEventSessionUpdate = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title session 值
   * @description OpenAI API 合约中的 session 值。
   */
  session: RealtimeSessionCreateRequest;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'session.update';
}

/**
 * @title Realtime Beta Client Event Transcription Session Update 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Client Event Transcription Session Update 结构定义。
 */
export type RealtimeBetaClientEventTranscriptionSessionUpdate = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title session 值
   * @description OpenAI API 合约中的 session 值。
   */
  session: RealtimeTranscriptionSessionCreateRequest;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'transcription_session.update';
}

/**
 * @title Realtime Beta Response 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Response 结构定义。
 */
export type RealtimeBetaResponse = {
  /**
   * @title conversation id 值
   * @description OpenAI API 合约中的 conversation id 值。
   */
  conversation_id?: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title max output tokens 值
   * @description OpenAI API 合约中的 max output tokens 值。
   */
  max_output_tokens?: any;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title modalities 值
   * @description OpenAI API 合约中的 modalities 值。
   */
  modalities?: Array<'text' | 'audio'>;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'realtime.response';
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output?: Array<RealtimeConversationItem>;
  /**
   * @title output audio format 值
   * @description OpenAI API 合约中的 output audio format 值。
   */
  output_audio_format?: 'pcm16' | 'g711_ulaw' | 'g711_alaw';
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: 'completed' | 'cancelled' | 'failed' | 'incomplete' | 'in_progress';
  /**
   * @title status details 值
   * @description OpenAI API 合约中的 status details 值。
   */
  status_details?: {
    /**
     * @title error 值
     * @description OpenAI API 合约中的 error 值。
     */
    error?: {
      /**
       * @title code 值
       * @description OpenAI API 合约中的 code 值。
       */
      code?: string;
      /**
       * @title type 值
       * @description OpenAI API 合约中的 type 值。
       */
      type?: string
    };
    /**
     * @title reason 值
     * @description OpenAI API 合约中的 reason 值。
     */
    reason?: 'turn_detected' | 'client_cancelled' | 'max_output_tokens' | 'content_filter';
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: 'completed' | 'cancelled' | 'failed' | 'incomplete'
  };
  /**
   * @title temperature 值
   * @description OpenAI API 合约中的 temperature 值。
   */
  temperature?: number;
  /**
   * @title usage 值
   * @description OpenAI API 合约中的 usage 值。
   */
  usage?: {
    /**
     * @title input token details 值
     * @description OpenAI API 合约中的 input token details 值。
     */
    input_token_details?: {
      /**
       * @title audio tokens 值
       * @description OpenAI API 合约中的 audio tokens 值。
       */
      audio_tokens?: number;
      /**
       * @title cached tokens 值
       * @description OpenAI API 合约中的 cached tokens 值。
       */
      cached_tokens?: number;
      /**
       * @title cached tokens details 值
       * @description OpenAI API 合约中的 cached tokens details 值。
       */
      cached_tokens_details?: {
        /**
         * @title audio tokens 值
         * @description OpenAI API 合约中的 audio tokens 值。
         */
        audio_tokens?: number;
        /**
         * @title image tokens 值
         * @description OpenAI API 合约中的 image tokens 值。
         */
        image_tokens?: number;
        /**
         * @title text tokens 值
         * @description OpenAI API 合约中的 text tokens 值。
         */
        text_tokens?: number
      };
      /**
       * @title image tokens 值
       * @description OpenAI API 合约中的 image tokens 值。
       */
      image_tokens?: number;
      /**
       * @title text tokens 值
       * @description OpenAI API 合约中的 text tokens 值。
       */
      text_tokens?: number
    };
    /**
     * @title input tokens 值
     * @description OpenAI API 合约中的 input tokens 值。
     */
    input_tokens?: number;
    /**
     * @title output token details 值
     * @description OpenAI API 合约中的 output token details 值。
     */
    output_token_details?: {
      /**
       * @title audio tokens 值
       * @description OpenAI API 合约中的 audio tokens 值。
       */
      audio_tokens?: number;
      /**
       * @title text tokens 值
       * @description OpenAI API 合约中的 text tokens 值。
       */
      text_tokens?: number
    };
    /**
     * @title output tokens 值
     * @description OpenAI API 合约中的 output tokens 值。
     */
    output_tokens?: number;
    /**
     * @title total tokens 值
     * @description OpenAI API 合约中的 total tokens 值。
     */
    total_tokens?: number
  };
  /**
   * @title voice 值
   * @description OpenAI API 合约中的 voice 值。
   */
  voice?: VoiceIdsShared;
}

/**
 * @title Realtime Beta Response Create Params 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Response Create Params 结构定义。
 */
export type RealtimeBetaResponseCreateParams = {
  /**
   * @title conversation 值
   * @description OpenAI API 合约中的 conversation 值。
   */
  conversation?: any;
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input?: Array<RealtimeConversationItem>;
  /**
   * @title instructions 值
   * @description OpenAI API 合约中的 instructions 值。
   */
  instructions?: string;
  /**
   * @title max output tokens 值
   * @description OpenAI API 合约中的 max output tokens 值。
   */
  max_output_tokens?: any;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title modalities 值
   * @description OpenAI API 合约中的 modalities 值。
   */
  modalities?: Array<'text' | 'audio'>;
  /**
   * @title output audio format 值
   * @description OpenAI API 合约中的 output audio format 值。
   */
  output_audio_format?: 'pcm16' | 'g711_ulaw' | 'g711_alaw';
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt?: Prompt;
  /**
   * @title temperature 值
   * @description OpenAI API 合约中的 temperature 值。
   */
  temperature?: number;
  /**
   * @title tool choice 值
   * @description OpenAI API 合约中的 tool choice 值。
   */
  tool_choice?: any;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools?: Array<{
    /**
     * @title description 值
     * @description OpenAI API 合约中的 description 值。
     */
    description?: string;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name?: string;
    /**
     * @title parameters 值
     * @description OpenAI API 合约中的 parameters 值。
     */
    parameters?: any;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: 'function'
  }>;
  /**
   * @title voice 值
   * @description OpenAI API 合约中的 voice 值。
   */
  voice?: VoiceIdsOrCustomVoice;
}

/**
 * @title Realtime Beta Server Event Conversation Item Created 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Conversation Item Created 结构定义。
 */
export type RealtimeBetaServerEventConversationItemCreated = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item 值
   * @description OpenAI API 合约中的 item 值。
   */
  item: RealtimeConversationItem;
  /**
   * @title previous item id 值
   * @description OpenAI API 合约中的 previous item id 值。
   */
  previous_item_id?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.created';
}

/**
 * @title Realtime Beta Server Event Conversation Item Deleted 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Conversation Item Deleted 结构定义。
 */
export type RealtimeBetaServerEventConversationItemDeleted = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.deleted';
}

/**
 * @title Realtime Beta Server Event Conversation Item Input Audio Transcription Completed 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Conversation Item Input Audio Transcription Completed 结构定义。
 */
export type RealtimeBetaServerEventConversationItemInputAudioTranscriptionCompleted = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title languages 值
   * @description OpenAI API 合约中的 languages 值。
   */
  languages?: Array<TranscriptionLanguage>;
  /**
   * @title logprobs 值
   * @description OpenAI API 合约中的 logprobs 值。
   */
  logprobs?: any;
  /**
   * @title transcript 值
   * @description OpenAI API 合约中的 transcript 值。
   */
  transcript: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.input_audio_transcription.completed';
  /**
   * @title usage 值
   * @description OpenAI API 合约中的 usage 值。
   */
  usage: any;
}

/**
 * @title Realtime Beta Server Event Conversation Item Input Audio Transcription Delta 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Conversation Item Input Audio Transcription Delta 结构定义。
 */
export type RealtimeBetaServerEventConversationItemInputAudioTranscriptionDelta = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index?: number;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta?: string;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title logprobs 值
   * @description OpenAI API 合约中的 logprobs 值。
   */
  logprobs?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.input_audio_transcription.delta';
}

/**
 * @title Realtime Beta Server Event Conversation Item Input Audio Transcription Failed 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Conversation Item Input Audio Transcription Failed 结构定义。
 */
export type RealtimeBetaServerEventConversationItemInputAudioTranscriptionFailed = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title error 值
   * @description OpenAI API 合约中的 error 值。
   */
  error: {
    /**
     * @title code 值
     * @description OpenAI API 合约中的 code 值。
     */
    code?: string;
    /**
     * @title message 值
     * @description OpenAI API 合约中的 message 值。
     */
    message?: string;
    /**
     * @title param 值
     * @description OpenAI API 合约中的 param 值。
     */
    param?: string;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: string
  };
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.input_audio_transcription.failed';
}

/**
 * @title Realtime Beta Server Event Conversation Item Input Audio Transcription Segment 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Conversation Item Input Audio Transcription Segment 结构定义。
 */
export type RealtimeBetaServerEventConversationItemInputAudioTranscriptionSegment = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title end 值
   * @description OpenAI API 合约中的 end 值。
   */
  end: number;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title speaker 值
   * @description OpenAI API 合约中的 speaker 值。
   */
  speaker: string;
  /**
   * @title start 值
   * @description OpenAI API 合约中的 start 值。
   */
  start: number;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.input_audio_transcription.segment';
}

/**
 * @title Realtime Beta Server Event Conversation Item Retrieved 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Conversation Item Retrieved 结构定义。
 */
export type RealtimeBetaServerEventConversationItemRetrieved = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item 值
   * @description OpenAI API 合约中的 item 值。
   */
  item: RealtimeConversationItem;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.retrieved';
}

/**
 * @title Realtime Beta Server Event Conversation Item Truncated 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Conversation Item Truncated 结构定义。
 */
export type RealtimeBetaServerEventConversationItemTruncated = {
  /**
   * @title audio end ms 值
   * @description OpenAI API 合约中的 audio end ms 值。
   */
  audio_end_ms: number;
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.truncated';
}

/**
 * @title Realtime Beta Server Event Error 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Error 结构定义。
 */
export type RealtimeBetaServerEventError = {
  /**
   * @title error 值
   * @description OpenAI API 合约中的 error 值。
   */
  error: {
    /**
     * @title code 值
     * @description OpenAI API 合约中的 code 值。
     */
    code?: any;
    /**
     * @title event id 值
     * @description OpenAI API 合约中的 event id 值。
     */
    event_id?: any;
    /**
     * @title message 值
     * @description OpenAI API 合约中的 message 值。
     */
    message: string;
    /**
     * @title param 值
     * @description OpenAI API 合约中的 param 值。
     */
    param?: any;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type: string
  };
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'error';
}

/**
 * @title Realtime Beta Server Event Input Audio Buffer Cleared 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Input Audio Buffer Cleared 结构定义。
 */
export type RealtimeBetaServerEventInputAudioBufferCleared = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_audio_buffer.cleared';
}

/**
 * @title Realtime Beta Server Event Input Audio Buffer Committed 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Input Audio Buffer Committed 结构定义。
 */
export type RealtimeBetaServerEventInputAudioBufferCommitted = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title previous item id 值
   * @description OpenAI API 合约中的 previous item id 值。
   */
  previous_item_id?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_audio_buffer.committed';
}

/**
 * @title Realtime Beta Server Event Input Audio Buffer Speech Started 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Input Audio Buffer Speech Started 结构定义。
 */
export type RealtimeBetaServerEventInputAudioBufferSpeechStarted = {
  /**
   * @title audio start ms 值
   * @description OpenAI API 合约中的 audio start ms 值。
   */
  audio_start_ms: number;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_audio_buffer.speech_started';
}

/**
 * @title Realtime Beta Server Event Input Audio Buffer Speech Stopped 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Input Audio Buffer Speech Stopped 结构定义。
 */
export type RealtimeBetaServerEventInputAudioBufferSpeechStopped = {
  /**
   * @title audio end ms 值
   * @description OpenAI API 合约中的 audio end ms 值。
   */
  audio_end_ms: number;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_audio_buffer.speech_stopped';
}

/**
 * @title Realtime Beta Server Event MCPList Tools Completed 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event MCPList Tools Completed 结构定义。
 */
export type RealtimeBetaServerEventMCPListToolsCompleted = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_list_tools.completed';
}

/**
 * @title Realtime Beta Server Event MCPList Tools Failed 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event MCPList Tools Failed 结构定义。
 */
export type RealtimeBetaServerEventMCPListToolsFailed = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_list_tools.failed';
}

/**
 * @title Realtime Beta Server Event MCPList Tools In Progress 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event MCPList Tools In Progress 结构定义。
 */
export type RealtimeBetaServerEventMCPListToolsInProgress = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_list_tools.in_progress';
}

/**
 * @title Realtime Beta Server Event Rate Limits Updated 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Rate Limits Updated 结构定义。
 */
export type RealtimeBetaServerEventRateLimitsUpdated = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title rate limits 值
   * @description OpenAI API 合约中的 rate limits 值。
   */
  rate_limits: Array<{
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name?: 'requests' | 'tokens';
    /**
     * @title remaining 值
     * @description OpenAI API 合约中的 remaining 值。
     */
    remaining?: number;
    /**
     * @title reset seconds 值
     * @description OpenAI API 合约中的 reset seconds 值。
     */
    reset_seconds?: number
  }>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'rate_limits.updated';
}

/**
 * @title Realtime Beta Server Event Response Audio Delta 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Response Audio Delta 结构定义。
 */
export type RealtimeBetaServerEventResponseAudioDelta = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_audio.delta';
}

/**
 * @title Realtime Beta Server Event Response Audio Done 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Response Audio Done 结构定义。
 */
export type RealtimeBetaServerEventResponseAudioDone = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_audio.done';
}

/**
 * @title Realtime Beta Server Event Response Audio Transcript Delta 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Response Audio Transcript Delta 结构定义。
 */
export type RealtimeBetaServerEventResponseAudioTranscriptDelta = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_audio_transcript.delta';
}

/**
 * @title Realtime Beta Server Event Response Audio Transcript Done 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Response Audio Transcript Done 结构定义。
 */
export type RealtimeBetaServerEventResponseAudioTranscriptDone = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title transcript 值
   * @description OpenAI API 合约中的 transcript 值。
   */
  transcript: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_audio_transcript.done';
}

/**
 * @title Realtime Beta Server Event Response Content Part Added 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Response Content Part Added 结构定义。
 */
export type RealtimeBetaServerEventResponseContentPartAdded = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title part 值
   * @description OpenAI API 合约中的 part 值。
   */
  part: {
    /**
     * @title audio 值
     * @description OpenAI API 合约中的 audio 值。
     */
    audio?: string;
    /**
     * @title text 值
     * @description OpenAI API 合约中的 text 值。
     */
    text?: string;
    /**
     * @title transcript 值
     * @description OpenAI API 合约中的 transcript 值。
     */
    transcript?: string;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: 'audio' | 'text'
  };
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.content_part.added';
}

/**
 * @title Realtime Beta Server Event Response Content Part Done 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Response Content Part Done 结构定义。
 */
export type RealtimeBetaServerEventResponseContentPartDone = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title part 值
   * @description OpenAI API 合约中的 part 值。
   */
  part: {
    /**
     * @title audio 值
     * @description OpenAI API 合约中的 audio 值。
     */
    audio?: string;
    /**
     * @title text 值
     * @description OpenAI API 合约中的 text 值。
     */
    text?: string;
    /**
     * @title transcript 值
     * @description OpenAI API 合约中的 transcript 值。
     */
    transcript?: string;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: 'audio' | 'text'
  };
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.content_part.done';
}

/**
 * @title Realtime Beta Server Event Response Created 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Response Created 结构定义。
 */
export type RealtimeBetaServerEventResponseCreated = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title response 值
   * @description OpenAI API 合约中的 response 值。
   */
  response: RealtimeBetaResponse;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.created';
}

/**
 * @title Realtime Beta Server Event Response Done 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Response Done 结构定义。
 */
export type RealtimeBetaServerEventResponseDone = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title response 值
   * @description OpenAI API 合约中的 response 值。
   */
  response: RealtimeBetaResponse;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.done';
}

/**
 * @title Realtime Beta Server Event Response Function Call Arguments Delta 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Response Function Call Arguments Delta 结构定义。
 */
export type RealtimeBetaServerEventResponseFunctionCallArgumentsDelta = {
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.function_call_arguments.delta';
}

/**
 * @title Realtime Beta Server Event Response Function Call Arguments Done 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Response Function Call Arguments Done 结构定义。
 */
export type RealtimeBetaServerEventResponseFunctionCallArgumentsDone = {
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: string;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.function_call_arguments.done';
}

/**
 * @title Realtime Beta Server Event Response MCPCall Arguments Delta 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Response MCPCall Arguments Delta 结构定义。
 */
export type RealtimeBetaServerEventResponseMCPCallArgumentsDelta = {
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title obfuscation 值
   * @description OpenAI API 合约中的 obfuscation 值。
   */
  obfuscation?: any;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_call_arguments.delta';
}

/**
 * @title Realtime Beta Server Event Response MCPCall Arguments Done 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Response MCPCall Arguments Done 结构定义。
 */
export type RealtimeBetaServerEventResponseMCPCallArgumentsDone = {
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: string;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_call_arguments.done';
}

/**
 * @title Realtime Beta Server Event Response MCPCall Completed 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Response MCPCall Completed 结构定义。
 */
export type RealtimeBetaServerEventResponseMCPCallCompleted = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_call.completed';
}

/**
 * @title Realtime Beta Server Event Response MCPCall Failed 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Response MCPCall Failed 结构定义。
 */
export type RealtimeBetaServerEventResponseMCPCallFailed = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_call.failed';
}

/**
 * @title Realtime Beta Server Event Response MCPCall In Progress 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Response MCPCall In Progress 结构定义。
 */
export type RealtimeBetaServerEventResponseMCPCallInProgress = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_call.in_progress';
}

/**
 * @title Realtime Beta Server Event Response Output Item Added 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Response Output Item Added 结构定义。
 */
export type RealtimeBetaServerEventResponseOutputItemAdded = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item 值
   * @description OpenAI API 合约中的 item 值。
   */
  item: RealtimeConversationItem;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_item.added';
}

/**
 * @title Realtime Beta Server Event Response Output Item Done 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Response Output Item Done 结构定义。
 */
export type RealtimeBetaServerEventResponseOutputItemDone = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item 值
   * @description OpenAI API 合约中的 item 值。
   */
  item: RealtimeConversationItem;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_item.done';
}

/**
 * @title Realtime Beta Server Event Response Text Delta 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Response Text Delta 结构定义。
 */
export type RealtimeBetaServerEventResponseTextDelta = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_text.delta';
}

/**
 * @title Realtime Beta Server Event Response Text Done 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Response Text Done 结构定义。
 */
export type RealtimeBetaServerEventResponseTextDone = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_text.done';
}

/**
 * @title Realtime Beta Server Event Session Created 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Session Created 结构定义。
 */
export type RealtimeBetaServerEventSessionCreated = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title session 值
   * @description OpenAI API 合约中的 session 值。
   */
  session: RealtimeSession;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'session.created';
}

/**
 * @title Realtime Beta Server Event Session Updated 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Session Updated 结构定义。
 */
export type RealtimeBetaServerEventSessionUpdated = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title session 值
   * @description OpenAI API 合约中的 session 值。
   */
  session: RealtimeSession;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'session.updated';
}

/**
 * @title Realtime Beta Server Event Transcription Session Created 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Transcription Session Created 结构定义。
 */
export type RealtimeBetaServerEventTranscriptionSessionCreated = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title session 值
   * @description OpenAI API 合约中的 session 值。
   */
  session: RealtimeTranscriptionSessionCreateResponse;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'transcription_session.created';
}

/**
 * @title Realtime Beta Server Event Transcription Session Updated 数据结构
 * @description OpenAI API 合约中的 Realtime Beta Server Event Transcription Session Updated 结构定义。
 */
export type RealtimeBetaServerEventTranscriptionSessionUpdated = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title session 值
   * @description OpenAI API 合约中的 session 值。
   */
  session: RealtimeTranscriptionSessionCreateResponse;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'transcription_session.updated';
}

/**
 * @title Realtime Call Create Request 数据结构
 * @description OpenAI API 合约中的 Realtime Call Create Request 结构定义。
 */
export type RealtimeCallCreateRequest = {
  /**
   * @title sdp 值
   * @description OpenAI API 合约中的 sdp 值。
   */
  sdp: string;
  /**
   * @title session 值
   * @description OpenAI API 合约中的 session 值。
   */
  session?: any;
}

/**
 * @title Realtime Call Refer Request 数据结构
 * @description OpenAI API 合约中的 Realtime Call Refer Request 结构定义。
 */
export type RealtimeCallReferRequest = {
  /**
   * @title target uri 值
   * @description OpenAI API 合约中的 target uri 值。
   */
  target_uri: string;
}

/**
 * @title Realtime Call Reject Request 数据结构
 * @description OpenAI API 合约中的 Realtime Call Reject Request 结构定义。
 */
export type RealtimeCallRejectRequest = {
  /**
   * @title status code 值
   * @description OpenAI API 合约中的 status code 值。
   */
  status_code?: number;
}

/**
 * @title Realtime Client Event 数据结构
 * @description OpenAI API 合约中的 Realtime Client Event 结构定义。
 */
export type RealtimeClientEvent = any

/**
 * @title Realtime Client Event Conversation Item Create 数据结构
 * @description OpenAI API 合约中的 Realtime Client Event Conversation Item Create 结构定义。
 */
export type RealtimeClientEventConversationItemCreate = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title item 值
   * @description OpenAI API 合约中的 item 值。
   */
  item: RealtimeConversationItem;
  /**
   * @title previous item id 值
   * @description OpenAI API 合约中的 previous item id 值。
   */
  previous_item_id?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.create';
}

/**
 * @title Realtime Client Event Conversation Item Delete 数据结构
 * @description OpenAI API 合约中的 Realtime Client Event Conversation Item Delete 结构定义。
 */
export type RealtimeClientEventConversationItemDelete = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.delete';
}

/**
 * @title Realtime Client Event Conversation Item Retrieve 数据结构
 * @description OpenAI API 合约中的 Realtime Client Event Conversation Item Retrieve 结构定义。
 */
export type RealtimeClientEventConversationItemRetrieve = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.retrieve';
}

/**
 * @title Realtime Client Event Conversation Item Truncate 数据结构
 * @description OpenAI API 合约中的 Realtime Client Event Conversation Item Truncate 结构定义。
 */
export type RealtimeClientEventConversationItemTruncate = {
  /**
   * @title audio end ms 值
   * @description OpenAI API 合约中的 audio end ms 值。
   */
  audio_end_ms: number;
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.truncate';
}

/**
 * @title Realtime Client Event Input Audio Buffer Append 数据结构
 * @description OpenAI API 合约中的 Realtime Client Event Input Audio Buffer Append 结构定义。
 */
export type RealtimeClientEventInputAudioBufferAppend = {
  /**
   * @title audio 值
   * @description OpenAI API 合约中的 audio 值。
   */
  audio: string;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_audio_buffer.append';
}

/**
 * @title Realtime Client Event Input Audio Buffer Clear 数据结构
 * @description OpenAI API 合约中的 Realtime Client Event Input Audio Buffer Clear 结构定义。
 */
export type RealtimeClientEventInputAudioBufferClear = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_audio_buffer.clear';
}

/**
 * @title Realtime Client Event Input Audio Buffer Commit 数据结构
 * @description OpenAI API 合约中的 Realtime Client Event Input Audio Buffer Commit 结构定义。
 */
export type RealtimeClientEventInputAudioBufferCommit = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_audio_buffer.commit';
}

/**
 * @title Realtime Client Event Output Audio Buffer Clear 数据结构
 * @description OpenAI API 合约中的 Realtime Client Event Output Audio Buffer Clear 结构定义。
 */
export type RealtimeClientEventOutputAudioBufferClear = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'output_audio_buffer.clear';
}

/**
 * @title Realtime Client Event Response Cancel 数据结构
 * @description OpenAI API 合约中的 Realtime Client Event Response Cancel 结构定义。
 */
export type RealtimeClientEventResponseCancel = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.cancel';
}

/**
 * @title Realtime Client Event Response Create 数据结构
 * @description OpenAI API 合约中的 Realtime Client Event Response Create 结构定义。
 */
export type RealtimeClientEventResponseCreate = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title response 值
   * @description OpenAI API 合约中的 response 值。
   */
  response?: RealtimeResponseCreateParams;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.create';
}

/**
 * @title Realtime Client Event Session Update 数据结构
 * @description OpenAI API 合约中的 Realtime Client Event Session Update 结构定义。
 */
export type RealtimeClientEventSessionUpdate = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title session 值
   * @description OpenAI API 合约中的 session 值。
   */
  session: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'session.update';
}

/**
 * @title Realtime Client Event Transcription Session Update 数据结构
 * @description OpenAI API 合约中的 Realtime Client Event Transcription Session Update 结构定义。
 */
export type RealtimeClientEventTranscriptionSessionUpdate = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title session 值
   * @description OpenAI API 合约中的 session 值。
   */
  session: RealtimeTranscriptionSessionCreateRequest;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'transcription_session.update';
}

/**
 * @title Realtime Conversation Item 数据结构
 * @description OpenAI API 合约中的 Realtime Conversation Item 结构定义。
 */
export type RealtimeConversationItem = any

/**
 * @title Realtime Conversation Item Function Call 数据结构
 * @description OpenAI API 合约中的 Realtime Conversation Item Function Call 结构定义。
 */
export type RealtimeConversationItemFunctionCall = {
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: string;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id?: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'realtime.item';
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: 'completed' | 'incomplete' | 'in_progress';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'function_call';
}

/**
 * @title Realtime Conversation Item Function Call Output 数据结构
 * @description OpenAI API 合约中的 Realtime Conversation Item Function Call Output 结构定义。
 */
export type RealtimeConversationItemFunctionCallOutput = {
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'realtime.item';
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: 'completed' | 'incomplete' | 'in_progress';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'function_call_output';
}

/**
 * @title Realtime Conversation Item Message Assistant 数据结构
 * @description OpenAI API 合约中的 Realtime Conversation Item Message Assistant 结构定义。
 */
export type RealtimeConversationItemMessageAssistant = {
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: Array<{
    /**
     * @title audio 值
     * @description OpenAI API 合约中的 audio 值。
     */
    audio?: string;
    /**
     * @title text 值
     * @description OpenAI API 合约中的 text 值。
     */
    text?: string;
    /**
     * @title transcript 值
     * @description OpenAI API 合约中的 transcript 值。
     */
    transcript?: string;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: 'output_text' | 'output_audio'
  }>;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'realtime.item';
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'assistant';
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: 'completed' | 'incomplete' | 'in_progress';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'message';
}

/**
 * @title Realtime Conversation Item Message System 数据结构
 * @description OpenAI API 合约中的 Realtime Conversation Item Message System 结构定义。
 */
export type RealtimeConversationItemMessageSystem = {
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: Array<{
    /**
     * @title text 值
     * @description OpenAI API 合约中的 text 值。
     */
    text?: string;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: 'input_text'
  }>;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'realtime.item';
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'system';
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: 'completed' | 'incomplete' | 'in_progress';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'message';
}

/**
 * @title Realtime Conversation Item Message User 数据结构
 * @description OpenAI API 合约中的 Realtime Conversation Item Message User 结构定义。
 */
export type RealtimeConversationItemMessageUser = {
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: Array<{
    /**
     * @title audio 值
     * @description OpenAI API 合约中的 audio 值。
     */
    audio?: string;
    /**
     * @title detail 值
     * @description OpenAI API 合约中的 detail 值。
     */
    detail?: 'auto' | 'low' | 'high';
    /**
     * @title image url 值
     * @description OpenAI API 合约中的 image url 值。
     */
    image_url?: string;
    /**
     * @title text 值
     * @description OpenAI API 合约中的 text 值。
     */
    text?: string;
    /**
     * @title transcript 值
     * @description OpenAI API 合约中的 transcript 值。
     */
    transcript?: string;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: 'input_text' | 'input_audio' | 'input_image'
  }>;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'realtime.item';
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: 'user';
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: 'completed' | 'incomplete' | 'in_progress';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'message';
}

/**
 * @title Realtime Conversation Item With Reference 数据结构
 * @description OpenAI API 合约中的 Realtime Conversation Item With Reference 结构定义。
 */
export type RealtimeConversationItemWithReference = {
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments?: string;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id?: string;
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content?: Array<{
    /**
     * @title audio 值
     * @description OpenAI API 合约中的 audio 值。
     */
    audio?: string;
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string;
    /**
     * @title text 值
     * @description OpenAI API 合约中的 text 值。
     */
    text?: string;
    /**
     * @title transcript 值
     * @description OpenAI API 合约中的 transcript 值。
     */
    transcript?: string;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: 'input_audio' | 'input_text' | 'item_reference' | 'text'
  }>;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'realtime.item';
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output?: string;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role?: 'user' | 'assistant' | 'system';
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: 'completed' | 'incomplete' | 'in_progress';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type?: 'message' | 'function_call' | 'function_call_output';
}

/**
 * @title Realtime Create Client Secret Request 数据结构
 * @description OpenAI API 合约中的 Realtime Create Client Secret Request 结构定义。
 */
export type RealtimeCreateClientSecretRequest = {
  /**
   * @title expires after 值
   * @description OpenAI API 合约中的 expires after 值。
   */
  expires_after?: {
    /**
     * @title anchor 值
     * @description OpenAI API 合约中的 anchor 值。
     */
    anchor?: 'created_at';
    /**
     * @title seconds 值
     * @description OpenAI API 合约中的 seconds 值。
     */
    seconds?: number
  };
  /**
   * @title session 值
   * @description OpenAI API 合约中的 session 值。
   */
  session?: any;
}

/**
 * @title Realtime Create Client Secret Response 数据结构
 * @description OpenAI API 合约中的 Realtime Create Client Secret Response 结构定义。
 */
export type RealtimeCreateClientSecretResponse = {
  /**
   * @title expires at 值
   * @description OpenAI API 合约中的 expires at 值。
   */
  expires_at: number;
  /**
   * @title session 值
   * @description OpenAI API 合约中的 session 值。
   */
  session: any;
  /**
   * @title value 值
   * @description OpenAI API 合约中的 value 值。
   */
  value: string;
}

/**
 * @title Realtime Function Tool 数据结构
 * @description OpenAI API 合约中的 Realtime Function Tool 结构定义。
 */
export type RealtimeFunctionTool = {
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description?: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: string;
  /**
   * @title parameters 值
   * @description OpenAI API 合约中的 parameters 值。
   */
  parameters?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type?: 'function';
}

/**
 * @title Realtime MCPApproval Request 数据结构
 * @description OpenAI API 合约中的 Realtime MCPApproval Request 结构定义。
 */
export type RealtimeMCPApprovalRequest = {
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title server label 值
   * @description OpenAI API 合约中的 server label 值。
   */
  server_label: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_approval_request';
}

/**
 * @title Realtime MCPApproval Response 数据结构
 * @description OpenAI API 合约中的 Realtime MCPApproval Response 结构定义。
 */
export type RealtimeMCPApprovalResponse = {
  /**
   * @title approval request id 值
   * @description OpenAI API 合约中的 approval request id 值。
   */
  approval_request_id: string;
  /**
   * @title approve 值
   * @description OpenAI API 合约中的 approve 值。
   */
  approve: boolean;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title reason 值
   * @description OpenAI API 合约中的 reason 值。
   */
  reason?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_approval_response';
}

/**
 * @title Realtime MCPHTTPError 数据结构
 * @description OpenAI API 合约中的 Realtime MCPHTTPError 结构定义。
 */
export type RealtimeMCPHTTPError = {
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: number;
  /**
   * @title message 值
   * @description OpenAI API 合约中的 message 值。
   */
  message: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'http_error';
}

/**
 * @title Realtime MCPList Tools 数据结构
 * @description OpenAI API 合约中的 Realtime MCPList Tools 结构定义。
 */
export type RealtimeMCPListTools = {
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title server label 值
   * @description OpenAI API 合约中的 server label 值。
   */
  server_label: string;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools: Array<MCPListToolsTool>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_list_tools';
}

/**
 * @title Realtime MCPProtocol Error 数据结构
 * @description OpenAI API 合约中的 Realtime MCPProtocol Error 结构定义。
 */
export type RealtimeMCPProtocolError = {
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: number;
  /**
   * @title message 值
   * @description OpenAI API 合约中的 message 值。
   */
  message: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'protocol_error';
}

/**
 * @title Realtime MCPTool Call 数据结构
 * @description OpenAI API 合约中的 Realtime MCPTool Call 结构定义。
 */
export type RealtimeMCPToolCall = {
  /**
   * @title approval request id 值
   * @description OpenAI API 合约中的 approval request id 值。
   */
  approval_request_id?: any;
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: string;
  /**
   * @title error 值
   * @description OpenAI API 合约中的 error 值。
   */
  error?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output?: any;
  /**
   * @title server label 值
   * @description OpenAI API 合约中的 server label 值。
   */
  server_label: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_call';
}

/**
 * @title Realtime MCPTool Execution Error 数据结构
 * @description OpenAI API 合约中的 Realtime MCPTool Execution Error 结构定义。
 */
export type RealtimeMCPToolExecutionError = {
  /**
   * @title message 值
   * @description OpenAI API 合约中的 message 值。
   */
  message: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'tool_execution_error';
}

/**
 * @title Realtime Reasoning 数据结构
 * @description OpenAI API 合约中的 Realtime Reasoning 结构定义。
 */
export type RealtimeReasoning = {
  /**
   * @title effort 值
   * @description OpenAI API 合约中的 effort 值。
   */
  effort?: RealtimeReasoningEffort;
}

/**
 * @title Realtime Reasoning Effort 数据结构
 * @description OpenAI API 合约中的 Realtime Reasoning Effort 结构定义。
 */
export type RealtimeReasoningEffort = 'minimal' | 'low' | 'medium' | 'high' | 'xhigh'

/**
 * @title Realtime Response 数据结构
 * @description OpenAI API 合约中的 Realtime Response 结构定义。
 */
export type RealtimeResponse = {
  /**
   * @title audio 值
   * @description OpenAI API 合约中的 audio 值。
   */
  audio?: {
    /**
     * @title output 值
     * @description OpenAI API 合约中的 output 值。
     */
    output?: {
      /**
       * @title format 值
       * @description OpenAI API 合约中的 format 值。
       */
      format?: RealtimeAudioFormats;
      /**
       * @title voice 值
       * @description OpenAI API 合约中的 voice 值。
       */
      voice?: VoiceIdsShared
    }
  };
  /**
   * @title conversation id 值
   * @description OpenAI API 合约中的 conversation id 值。
   */
  conversation_id?: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title max output tokens 值
   * @description OpenAI API 合约中的 max output tokens 值。
   */
  max_output_tokens?: any;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'realtime.response';
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output?: Array<RealtimeConversationItem>;
  /**
   * @title output modalities 值
   * @description OpenAI API 合约中的 output modalities 值。
   */
  output_modalities?: Array<'text' | 'audio'>;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: 'completed' | 'cancelled' | 'failed' | 'incomplete' | 'in_progress';
  /**
   * @title status details 值
   * @description OpenAI API 合约中的 status details 值。
   */
  status_details?: {
    /**
     * @title error 值
     * @description OpenAI API 合约中的 error 值。
     */
    error?: {
      /**
       * @title code 值
       * @description OpenAI API 合约中的 code 值。
       */
      code?: string;
      /**
       * @title type 值
       * @description OpenAI API 合约中的 type 值。
       */
      type?: string
    };
    /**
     * @title reason 值
     * @description OpenAI API 合约中的 reason 值。
     */
    reason?: 'turn_detected' | 'client_cancelled' | 'max_output_tokens' | 'content_filter';
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: 'completed' | 'cancelled' | 'failed' | 'incomplete'
  };
  /**
   * @title usage 值
   * @description OpenAI API 合约中的 usage 值。
   */
  usage?: {
    /**
     * @title input token details 值
     * @description OpenAI API 合约中的 input token details 值。
     */
    input_token_details?: {
      /**
       * @title audio tokens 值
       * @description OpenAI API 合约中的 audio tokens 值。
       */
      audio_tokens?: number;
      /**
       * @title cached tokens 值
       * @description OpenAI API 合约中的 cached tokens 值。
       */
      cached_tokens?: number;
      /**
       * @title cached tokens details 值
       * @description OpenAI API 合约中的 cached tokens details 值。
       */
      cached_tokens_details?: {
        /**
         * @title audio tokens 值
         * @description OpenAI API 合约中的 audio tokens 值。
         */
        audio_tokens?: number;
        /**
         * @title image tokens 值
         * @description OpenAI API 合约中的 image tokens 值。
         */
        image_tokens?: number;
        /**
         * @title text tokens 值
         * @description OpenAI API 合约中的 text tokens 值。
         */
        text_tokens?: number
      };
      /**
       * @title image tokens 值
       * @description OpenAI API 合约中的 image tokens 值。
       */
      image_tokens?: number;
      /**
       * @title text tokens 值
       * @description OpenAI API 合约中的 text tokens 值。
       */
      text_tokens?: number
    };
    /**
     * @title input tokens 值
     * @description OpenAI API 合约中的 input tokens 值。
     */
    input_tokens?: number;
    /**
     * @title output token details 值
     * @description OpenAI API 合约中的 output token details 值。
     */
    output_token_details?: {
      /**
       * @title audio tokens 值
       * @description OpenAI API 合约中的 audio tokens 值。
       */
      audio_tokens?: number;
      /**
       * @title text tokens 值
       * @description OpenAI API 合约中的 text tokens 值。
       */
      text_tokens?: number
    };
    /**
     * @title output tokens 值
     * @description OpenAI API 合约中的 output tokens 值。
     */
    output_tokens?: number;
    /**
     * @title total tokens 值
     * @description OpenAI API 合约中的 total tokens 值。
     */
    total_tokens?: number
  };
}

/**
 * @title Realtime Response Create Params 数据结构
 * @description OpenAI API 合约中的 Realtime Response Create Params 结构定义。
 */
export type RealtimeResponseCreateParams = {
  /**
   * @title audio 值
   * @description OpenAI API 合约中的 audio 值。
   */
  audio?: {
    /**
     * @title output 值
     * @description OpenAI API 合约中的 output 值。
     */
    output?: {
      /**
       * @title format 值
       * @description OpenAI API 合约中的 format 值。
       */
      format?: RealtimeAudioFormats;
      /**
       * @title voice 值
       * @description OpenAI API 合约中的 voice 值。
       */
      voice?: VoiceIdsOrCustomVoice
    }
  };
  /**
   * @title conversation 值
   * @description OpenAI API 合约中的 conversation 值。
   */
  conversation?: any;
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input?: Array<RealtimeConversationItem>;
  /**
   * @title instructions 值
   * @description OpenAI API 合约中的 instructions 值。
   */
  instructions?: string;
  /**
   * @title max output tokens 值
   * @description OpenAI API 合约中的 max output tokens 值。
   */
  max_output_tokens?: any;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title output modalities 值
   * @description OpenAI API 合约中的 output modalities 值。
   */
  output_modalities?: Array<'text' | 'audio'>;
  /**
   * @title parallel tool calls 值
   * @description OpenAI API 合约中的 parallel tool calls 值。
   */
  parallel_tool_calls?: boolean;
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt?: Prompt;
  /**
   * @title reasoning 值
   * @description OpenAI API 合约中的 reasoning 值。
   */
  reasoning?: RealtimeReasoning;
  /**
   * @title tool choice 值
   * @description OpenAI API 合约中的 tool choice 值。
   */
  tool_choice?: any;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools?: Array<any>;
}

/**
 * @title Realtime Server Event 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event 结构定义。
 */
export type RealtimeServerEvent = any

/**
 * @title Realtime Server Event Conversation Created 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Conversation Created 结构定义。
 */
export type RealtimeServerEventConversationCreated = {
  /**
   * @title conversation 值
   * @description OpenAI API 合约中的 conversation 值。
   */
  conversation: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id?: string;
    /**
     * @title object 值
     * @description OpenAI API 合约中的 object 值。
     */
    object?: string
  };
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.created';
}

/**
 * @title Realtime Server Event Conversation Item Added 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Conversation Item Added 结构定义。
 */
export type RealtimeServerEventConversationItemAdded = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item 值
   * @description OpenAI API 合约中的 item 值。
   */
  item: RealtimeConversationItem;
  /**
   * @title previous item id 值
   * @description OpenAI API 合约中的 previous item id 值。
   */
  previous_item_id?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.added';
}

/**
 * @title Realtime Server Event Conversation Item Created 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Conversation Item Created 结构定义。
 */
export type RealtimeServerEventConversationItemCreated = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item 值
   * @description OpenAI API 合约中的 item 值。
   */
  item: RealtimeConversationItem;
  /**
   * @title previous item id 值
   * @description OpenAI API 合约中的 previous item id 值。
   */
  previous_item_id?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.created';
}

/**
 * @title Realtime Server Event Conversation Item Deleted 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Conversation Item Deleted 结构定义。
 */
export type RealtimeServerEventConversationItemDeleted = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.deleted';
}

/**
 * @title Realtime Server Event Conversation Item Done 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Conversation Item Done 结构定义。
 */
export type RealtimeServerEventConversationItemDone = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item 值
   * @description OpenAI API 合约中的 item 值。
   */
  item: RealtimeConversationItem;
  /**
   * @title previous item id 值
   * @description OpenAI API 合约中的 previous item id 值。
   */
  previous_item_id?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.done';
}

/**
 * @title Realtime Server Event Conversation Item Input Audio Transcription Completed 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Conversation Item Input Audio Transcription Completed 结构定义。
 */
export type RealtimeServerEventConversationItemInputAudioTranscriptionCompleted = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title languages 值
   * @description OpenAI API 合约中的 languages 值。
   */
  languages?: Array<TranscriptionLanguage>;
  /**
   * @title logprobs 值
   * @description OpenAI API 合约中的 logprobs 值。
   */
  logprobs?: any;
  /**
   * @title transcript 值
   * @description OpenAI API 合约中的 transcript 值。
   */
  transcript: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.input_audio_transcription.completed';
  /**
   * @title usage 值
   * @description OpenAI API 合约中的 usage 值。
   */
  usage: any;
}

/**
 * @title Realtime Server Event Conversation Item Input Audio Transcription Delta 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Conversation Item Input Audio Transcription Delta 结构定义。
 */
export type RealtimeServerEventConversationItemInputAudioTranscriptionDelta = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index?: number;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta?: string;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title logprobs 值
   * @description OpenAI API 合约中的 logprobs 值。
   */
  logprobs?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.input_audio_transcription.delta';
}

/**
 * @title Realtime Server Event Conversation Item Input Audio Transcription Failed 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Conversation Item Input Audio Transcription Failed 结构定义。
 */
export type RealtimeServerEventConversationItemInputAudioTranscriptionFailed = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title error 值
   * @description OpenAI API 合约中的 error 值。
   */
  error: {
    /**
     * @title code 值
     * @description OpenAI API 合约中的 code 值。
     */
    code?: string;
    /**
     * @title message 值
     * @description OpenAI API 合约中的 message 值。
     */
    message?: string;
    /**
     * @title param 值
     * @description OpenAI API 合约中的 param 值。
     */
    param?: string;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: string
  };
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.input_audio_transcription.failed';
}

/**
 * @title Realtime Server Event Conversation Item Input Audio Transcription Segment 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Conversation Item Input Audio Transcription Segment 结构定义。
 */
export type RealtimeServerEventConversationItemInputAudioTranscriptionSegment = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title end 值
   * @description OpenAI API 合约中的 end 值。
   */
  end: number;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title speaker 值
   * @description OpenAI API 合约中的 speaker 值。
   */
  speaker: string;
  /**
   * @title start 值
   * @description OpenAI API 合约中的 start 值。
   */
  start: number;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.input_audio_transcription.segment';
}

/**
 * @title Realtime Server Event Conversation Item Retrieved 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Conversation Item Retrieved 结构定义。
 */
export type RealtimeServerEventConversationItemRetrieved = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item 值
   * @description OpenAI API 合约中的 item 值。
   */
  item: RealtimeConversationItem;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.retrieved';
}

/**
 * @title Realtime Server Event Conversation Item Truncated 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Conversation Item Truncated 结构定义。
 */
export type RealtimeServerEventConversationItemTruncated = {
  /**
   * @title audio end ms 值
   * @description OpenAI API 合约中的 audio end ms 值。
   */
  audio_end_ms: number;
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'conversation.item.truncated';
}

/**
 * @title Realtime Server Event Error 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Error 结构定义。
 */
export type RealtimeServerEventError = {
  /**
   * @title error 值
   * @description OpenAI API 合约中的 error 值。
   */
  error: {
    /**
     * @title code 值
     * @description OpenAI API 合约中的 code 值。
     */
    code?: any;
    /**
     * @title event id 值
     * @description OpenAI API 合约中的 event id 值。
     */
    event_id?: any;
    /**
     * @title message 值
     * @description OpenAI API 合约中的 message 值。
     */
    message: string;
    /**
     * @title param 值
     * @description OpenAI API 合约中的 param 值。
     */
    param?: any;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type: string
  };
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'error';
}

/**
 * @title Realtime Server Event Input Audio Buffer Cleared 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Input Audio Buffer Cleared 结构定义。
 */
export type RealtimeServerEventInputAudioBufferCleared = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_audio_buffer.cleared';
}

/**
 * @title Realtime Server Event Input Audio Buffer Committed 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Input Audio Buffer Committed 结构定义。
 */
export type RealtimeServerEventInputAudioBufferCommitted = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title previous item id 值
   * @description OpenAI API 合约中的 previous item id 值。
   */
  previous_item_id?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_audio_buffer.committed';
}

/**
 * @title Realtime Server Event Input Audio Buffer Dtmf Event Received 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Input Audio Buffer Dtmf Event Received 结构定义。
 */
export type RealtimeServerEventInputAudioBufferDtmfEventReceived = {
  /**
   * @title event 值
   * @description OpenAI API 合约中的 event 值。
   */
  event: string;
  /**
   * @title received at 值
   * @description OpenAI API 合约中的 received at 值。
   */
  received_at: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_audio_buffer.dtmf_event_received';
}

/**
 * @title Realtime Server Event Input Audio Buffer Speech Started 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Input Audio Buffer Speech Started 结构定义。
 */
export type RealtimeServerEventInputAudioBufferSpeechStarted = {
  /**
   * @title audio start ms 值
   * @description OpenAI API 合约中的 audio start ms 值。
   */
  audio_start_ms: number;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_audio_buffer.speech_started';
}

/**
 * @title Realtime Server Event Input Audio Buffer Speech Stopped 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Input Audio Buffer Speech Stopped 结构定义。
 */
export type RealtimeServerEventInputAudioBufferSpeechStopped = {
  /**
   * @title audio end ms 值
   * @description OpenAI API 合约中的 audio end ms 值。
   */
  audio_end_ms: number;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_audio_buffer.speech_stopped';
}

/**
 * @title Realtime Server Event Input Audio Buffer Timeout Triggered 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Input Audio Buffer Timeout Triggered 结构定义。
 */
export type RealtimeServerEventInputAudioBufferTimeoutTriggered = {
  /**
   * @title audio end ms 值
   * @description OpenAI API 合约中的 audio end ms 值。
   */
  audio_end_ms: number;
  /**
   * @title audio start ms 值
   * @description OpenAI API 合约中的 audio start ms 值。
   */
  audio_start_ms: number;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_audio_buffer.timeout_triggered';
}

/**
 * @title Realtime Server Event MCPList Tools Completed 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event MCPList Tools Completed 结构定义。
 */
export type RealtimeServerEventMCPListToolsCompleted = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_list_tools.completed';
}

/**
 * @title Realtime Server Event MCPList Tools Failed 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event MCPList Tools Failed 结构定义。
 */
export type RealtimeServerEventMCPListToolsFailed = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_list_tools.failed';
}

/**
 * @title Realtime Server Event MCPList Tools In Progress 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event MCPList Tools In Progress 结构定义。
 */
export type RealtimeServerEventMCPListToolsInProgress = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp_list_tools.in_progress';
}

/**
 * @title Realtime Server Event Output Audio Buffer Cleared 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Output Audio Buffer Cleared 结构定义。
 */
export type RealtimeServerEventOutputAudioBufferCleared = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'output_audio_buffer.cleared';
}

/**
 * @title Realtime Server Event Output Audio Buffer Started 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Output Audio Buffer Started 结构定义。
 */
export type RealtimeServerEventOutputAudioBufferStarted = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'output_audio_buffer.started';
}

/**
 * @title Realtime Server Event Output Audio Buffer Stopped 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Output Audio Buffer Stopped 结构定义。
 */
export type RealtimeServerEventOutputAudioBufferStopped = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'output_audio_buffer.stopped';
}

/**
 * @title Realtime Server Event Rate Limits Updated 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Rate Limits Updated 结构定义。
 */
export type RealtimeServerEventRateLimitsUpdated = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title rate limits 值
   * @description OpenAI API 合约中的 rate limits 值。
   */
  rate_limits: Array<{
    /**
     * @title limit 值
     * @description OpenAI API 合约中的 limit 值。
     */
    limit?: number;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name?: 'requests' | 'tokens';
    /**
     * @title remaining 值
     * @description OpenAI API 合约中的 remaining 值。
     */
    remaining?: number;
    /**
     * @title reset seconds 值
     * @description OpenAI API 合约中的 reset seconds 值。
     */
    reset_seconds?: number
  }>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'rate_limits.updated';
}

/**
 * @title Realtime Server Event Response Audio Delta 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Response Audio Delta 结构定义。
 */
export type RealtimeServerEventResponseAudioDelta = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_audio.delta';
}

/**
 * @title Realtime Server Event Response Audio Done 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Response Audio Done 结构定义。
 */
export type RealtimeServerEventResponseAudioDone = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_audio.done';
}

/**
 * @title Realtime Server Event Response Audio Transcript Delta 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Response Audio Transcript Delta 结构定义。
 */
export type RealtimeServerEventResponseAudioTranscriptDelta = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_audio_transcript.delta';
}

/**
 * @title Realtime Server Event Response Audio Transcript Done 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Response Audio Transcript Done 结构定义。
 */
export type RealtimeServerEventResponseAudioTranscriptDone = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title transcript 值
   * @description OpenAI API 合约中的 transcript 值。
   */
  transcript: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_audio_transcript.done';
}

/**
 * @title Realtime Server Event Response Content Part Added 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Response Content Part Added 结构定义。
 */
export type RealtimeServerEventResponseContentPartAdded = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title part 值
   * @description OpenAI API 合约中的 part 值。
   */
  part: {
    /**
     * @title audio 值
     * @description OpenAI API 合约中的 audio 值。
     */
    audio?: string;
    /**
     * @title text 值
     * @description OpenAI API 合约中的 text 值。
     */
    text?: string;
    /**
     * @title transcript 值
     * @description OpenAI API 合约中的 transcript 值。
     */
    transcript?: string;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: 'audio' | 'text'
  };
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.content_part.added';
}

/**
 * @title Realtime Server Event Response Content Part Done 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Response Content Part Done 结构定义。
 */
export type RealtimeServerEventResponseContentPartDone = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title part 值
   * @description OpenAI API 合约中的 part 值。
   */
  part: {
    /**
     * @title audio 值
     * @description OpenAI API 合约中的 audio 值。
     */
    audio?: string;
    /**
     * @title text 值
     * @description OpenAI API 合约中的 text 值。
     */
    text?: string;
    /**
     * @title transcript 值
     * @description OpenAI API 合约中的 transcript 值。
     */
    transcript?: string;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: 'audio' | 'text'
  };
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.content_part.done';
}

/**
 * @title Realtime Server Event Response Created 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Response Created 结构定义。
 */
export type RealtimeServerEventResponseCreated = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title response 值
   * @description OpenAI API 合约中的 response 值。
   */
  response: RealtimeResponse;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.created';
}

/**
 * @title Realtime Server Event Response Done 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Response Done 结构定义。
 */
export type RealtimeServerEventResponseDone = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title response 值
   * @description OpenAI API 合约中的 response 值。
   */
  response: RealtimeResponse;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.done';
}

/**
 * @title Realtime Server Event Response Function Call Arguments Delta 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Response Function Call Arguments Delta 结构定义。
 */
export type RealtimeServerEventResponseFunctionCallArgumentsDelta = {
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.function_call_arguments.delta';
}

/**
 * @title Realtime Server Event Response Function Call Arguments Done 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Response Function Call Arguments Done 结构定义。
 */
export type RealtimeServerEventResponseFunctionCallArgumentsDone = {
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: string;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: string;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.function_call_arguments.done';
}

/**
 * @title Realtime Server Event Response MCPCall Arguments Delta 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Response MCPCall Arguments Delta 结构定义。
 */
export type RealtimeServerEventResponseMCPCallArgumentsDelta = {
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title obfuscation 值
   * @description OpenAI API 合约中的 obfuscation 值。
   */
  obfuscation?: any;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_call_arguments.delta';
}

/**
 * @title Realtime Server Event Response MCPCall Arguments Done 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Response MCPCall Arguments Done 结构定义。
 */
export type RealtimeServerEventResponseMCPCallArgumentsDone = {
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: string;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_call_arguments.done';
}

/**
 * @title Realtime Server Event Response MCPCall Completed 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Response MCPCall Completed 结构定义。
 */
export type RealtimeServerEventResponseMCPCallCompleted = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_call.completed';
}

/**
 * @title Realtime Server Event Response MCPCall Failed 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Response MCPCall Failed 结构定义。
 */
export type RealtimeServerEventResponseMCPCallFailed = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_call.failed';
}

/**
 * @title Realtime Server Event Response MCPCall In Progress 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Response MCPCall In Progress 结构定义。
 */
export type RealtimeServerEventResponseMCPCallInProgress = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_call.in_progress';
}

/**
 * @title Realtime Server Event Response Output Item Added 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Response Output Item Added 结构定义。
 */
export type RealtimeServerEventResponseOutputItemAdded = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item 值
   * @description OpenAI API 合约中的 item 值。
   */
  item: RealtimeConversationItem;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_item.added';
}

/**
 * @title Realtime Server Event Response Output Item Done 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Response Output Item Done 结构定义。
 */
export type RealtimeServerEventResponseOutputItemDone = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item 值
   * @description OpenAI API 合约中的 item 值。
   */
  item: RealtimeConversationItem;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_item.done';
}

/**
 * @title Realtime Server Event Response Text Delta 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Response Text Delta 结构定义。
 */
export type RealtimeServerEventResponseTextDelta = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_text.delta';
}

/**
 * @title Realtime Server Event Response Text Done 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Response Text Done 结构定义。
 */
export type RealtimeServerEventResponseTextDone = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title response id 值
   * @description OpenAI API 合约中的 response id 值。
   */
  response_id: string;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_text.done';
}

/**
 * @title Realtime Server Event Session Created 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Session Created 结构定义。
 */
export type RealtimeServerEventSessionCreated = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title session 值
   * @description OpenAI API 合约中的 session 值。
   */
  session: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'session.created';
}

/**
 * @title Realtime Server Event Session Updated 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Session Updated 结构定义。
 */
export type RealtimeServerEventSessionUpdated = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title session 值
   * @description OpenAI API 合约中的 session 值。
   */
  session: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'session.updated';
}

/**
 * @title Realtime Server Event Transcription Session Updated 数据结构
 * @description OpenAI API 合约中的 Realtime Server Event Transcription Session Updated 结构定义。
 */
export type RealtimeServerEventTranscriptionSessionUpdated = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title session 值
   * @description OpenAI API 合约中的 session 值。
   */
  session: RealtimeTranscriptionSessionCreateResponse;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'transcription_session.updated';
}

/**
 * @title Realtime Session 数据结构
 * @description OpenAI API 合约中的 Realtime Session 结构定义。
 */
export type RealtimeSession = {
  /**
   * @title expires at 值
   * @description OpenAI API 合约中的 expires at 值。
   */
  expires_at?: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title include 值
   * @description OpenAI API 合约中的 include 值。
   */
  include?: any;
  /**
   * @title input audio format 值
   * @description OpenAI API 合约中的 input audio format 值。
   */
  input_audio_format?: 'pcm16' | 'g711_ulaw' | 'g711_alaw';
  /**
   * @title input audio noise reduction 值
   * @description OpenAI API 合约中的 input audio noise reduction 值。
   */
  input_audio_noise_reduction?: {
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: NoiseReductionType
  };
  /**
   * @title input audio transcription 值
   * @description OpenAI API 合约中的 input audio transcription 值。
   */
  input_audio_transcription?: any;
  /**
   * @title instructions 值
   * @description OpenAI API 合约中的 instructions 值。
   */
  instructions?: string;
  /**
   * @title max response output tokens 值
   * @description OpenAI API 合约中的 max response output tokens 值。
   */
  max_response_output_tokens?: any;
  /**
   * @title modalities 值
   * @description OpenAI API 合约中的 modalities 值。
   */
  modalities?: any;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'realtime.session';
  /**
   * @title output audio format 值
   * @description OpenAI API 合约中的 output audio format 值。
   */
  output_audio_format?: 'pcm16' | 'g711_ulaw' | 'g711_alaw';
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt?: any;
  /**
   * @title speed 值
   * @description OpenAI API 合约中的 speed 值。
   */
  speed?: number;
  /**
   * @title temperature 值
   * @description OpenAI API 合约中的 temperature 值。
   */
  temperature?: number;
  /**
   * @title tool choice 值
   * @description OpenAI API 合约中的 tool choice 值。
   */
  tool_choice?: string;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools?: Array<RealtimeFunctionTool>;
  /**
   * @title tracing 值
   * @description OpenAI API 合约中的 tracing 值。
   */
  tracing?: any;
  /**
   * @title turn detection 值
   * @description OpenAI API 合约中的 turn detection 值。
   */
  turn_detection?: RealtimeTurnDetection;
  /**
   * @title voice 值
   * @description OpenAI API 合约中的 voice 值。
   */
  voice?: VoiceIdsShared;
}

/**
 * @title Realtime Session Create Request 数据结构
 * @description OpenAI API 合约中的 Realtime Session Create Request 结构定义。
 */
export type RealtimeSessionCreateRequest = {
  /**
   * @title client secret 值
   * @description OpenAI API 合约中的 client secret 值。
   */
  client_secret: {
    /**
     * @title expires at 值
     * @description OpenAI API 合约中的 expires at 值。
     */
    expires_at: number;
    /**
     * @title value 值
     * @description OpenAI API 合约中的 value 值。
     */
    value: string
  };
  /**
   * @title input audio format 值
   * @description OpenAI API 合约中的 input audio format 值。
   */
  input_audio_format?: string;
  /**
   * @title input audio transcription 值
   * @description OpenAI API 合约中的 input audio transcription 值。
   */
  input_audio_transcription?: {
    /**
     * @title model 值
     * @description OpenAI API 合约中的 model 值。
     */
    model?: string
  };
  /**
   * @title instructions 值
   * @description OpenAI API 合约中的 instructions 值。
   */
  instructions?: string;
  /**
   * @title max response output tokens 值
   * @description OpenAI API 合约中的 max response output tokens 值。
   */
  max_response_output_tokens?: any;
  /**
   * @title modalities 值
   * @description OpenAI API 合约中的 modalities 值。
   */
  modalities?: any;
  /**
   * @title output audio format 值
   * @description OpenAI API 合约中的 output audio format 值。
   */
  output_audio_format?: string;
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt?: Prompt;
  /**
   * @title speed 值
   * @description OpenAI API 合约中的 speed 值。
   */
  speed?: number;
  /**
   * @title temperature 值
   * @description OpenAI API 合约中的 temperature 值。
   */
  temperature?: number;
  /**
   * @title tool choice 值
   * @description OpenAI API 合约中的 tool choice 值。
   */
  tool_choice?: string;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools?: Array<{
    /**
     * @title description 值
     * @description OpenAI API 合约中的 description 值。
     */
    description?: string;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name?: string;
    /**
     * @title parameters 值
     * @description OpenAI API 合约中的 parameters 值。
     */
    parameters?: any;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: 'function'
  }>;
  /**
   * @title tracing 值
   * @description OpenAI API 合约中的 tracing 值。
   */
  tracing?: any;
  /**
   * @title truncation 值
   * @description OpenAI API 合约中的 truncation 值。
   */
  truncation?: RealtimeTruncation;
  /**
   * @title turn detection 值
   * @description OpenAI API 合约中的 turn detection 值。
   */
  turn_detection?: {
    /**
     * @title prefix padding ms 值
     * @description OpenAI API 合约中的 prefix padding ms 值。
     */
    prefix_padding_ms?: number;
    /**
     * @title silence duration ms 值
     * @description OpenAI API 合约中的 silence duration ms 值。
     */
    silence_duration_ms?: number;
    /**
     * @title threshold 值
     * @description OpenAI API 合约中的 threshold 值。
     */
    threshold?: number;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: string
  };
  /**
   * @title voice 值
   * @description OpenAI API 合约中的 voice 值。
   */
  voice?: VoiceIdsOrCustomVoice;
}

/**
 * @title Realtime Session Create Request GA 数据结构
 * @description OpenAI API 合约中的 Realtime Session Create Request GA 结构定义。
 */
export type RealtimeSessionCreateRequestGA = {
  /**
   * @title audio 值
   * @description OpenAI API 合约中的 audio 值。
   */
  audio?: {
    /**
     * @title input 值
     * @description OpenAI API 合约中的 input 值。
     */
    input?: {
      /**
       * @title format 值
       * @description OpenAI API 合约中的 format 值。
       */
      format?: RealtimeAudioFormats;
      /**
       * @title noise reduction 值
       * @description OpenAI API 合约中的 noise reduction 值。
       */
      noise_reduction?: {
        /**
         * @title type 值
         * @description OpenAI API 合约中的 type 值。
         */
        type?: NoiseReductionType
      };
      /**
       * @title transcription 值
       * @description OpenAI API 合约中的 transcription 值。
       */
      transcription?: AudioTranscription;
      /**
       * @title turn detection 值
       * @description OpenAI API 合约中的 turn detection 值。
       */
      turn_detection?: RealtimeTurnDetection
    };
    /**
     * @title output 值
     * @description OpenAI API 合约中的 output 值。
     */
    output?: {
      /**
       * @title format 值
       * @description OpenAI API 合约中的 format 值。
       */
      format?: RealtimeAudioFormats;
      /**
       * @title speed 值
       * @description OpenAI API 合约中的 speed 值。
       */
      speed?: number;
      /**
       * @title voice 值
       * @description OpenAI API 合约中的 voice 值。
       */
      voice?: VoiceIdsOrCustomVoice
    }
  };
  /**
   * @title include 值
   * @description OpenAI API 合约中的 include 值。
   */
  include?: Array<'item.input_audio_transcription.logprobs'>;
  /**
   * @title instructions 值
   * @description OpenAI API 合约中的 instructions 值。
   */
  instructions?: string;
  /**
   * @title max output tokens 值
   * @description OpenAI API 合约中的 max output tokens 值。
   */
  max_output_tokens?: any;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title output modalities 值
   * @description OpenAI API 合约中的 output modalities 值。
   */
  output_modalities?: Array<'text' | 'audio'>;
  /**
   * @title parallel tool calls 值
   * @description OpenAI API 合约中的 parallel tool calls 值。
   */
  parallel_tool_calls?: boolean;
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt?: Prompt;
  /**
   * @title reasoning 值
   * @description OpenAI API 合约中的 reasoning 值。
   */
  reasoning?: RealtimeReasoning;
  /**
   * @title tool choice 值
   * @description OpenAI API 合约中的 tool choice 值。
   */
  tool_choice?: any;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools?: Array<any>;
  /**
   * @title tracing 值
   * @description OpenAI API 合约中的 tracing 值。
   */
  tracing?: any;
  /**
   * @title truncation 值
   * @description OpenAI API 合约中的 truncation 值。
   */
  truncation?: RealtimeTruncation;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'realtime';
}

/**
 * @title Realtime Session Create Response 数据结构
 * @description OpenAI API 合约中的 Realtime Session Create Response 结构定义。
 */
export type RealtimeSessionCreateResponse = {
  /**
   * @title audio 值
   * @description OpenAI API 合约中的 audio 值。
   */
  audio?: {
    /**
     * @title input 值
     * @description OpenAI API 合约中的 input 值。
     */
    input?: {
      /**
       * @title format 值
       * @description OpenAI API 合约中的 format 值。
       */
      format?: RealtimeAudioFormats;
      /**
       * @title noise reduction 值
       * @description OpenAI API 合约中的 noise reduction 值。
       */
      noise_reduction?: {
        /**
         * @title type 值
         * @description OpenAI API 合约中的 type 值。
         */
        type?: NoiseReductionType
      };
      /**
       * @title transcription 值
       * @description OpenAI API 合约中的 transcription 值。
       */
      transcription?: AudioTranscriptionResponse;
      /**
       * @title turn detection 值
       * @description OpenAI API 合约中的 turn detection 值。
       */
      turn_detection?: {
        /**
         * @title prefix padding ms 值
         * @description OpenAI API 合约中的 prefix padding ms 值。
         */
        prefix_padding_ms?: number;
        /**
         * @title silence duration ms 值
         * @description OpenAI API 合约中的 silence duration ms 值。
         */
        silence_duration_ms?: number;
        /**
         * @title threshold 值
         * @description OpenAI API 合约中的 threshold 值。
         */
        threshold?: number;
        /**
         * @title type 值
         * @description OpenAI API 合约中的 type 值。
         */
        type?: string
      }
    };
    /**
     * @title output 值
     * @description OpenAI API 合约中的 output 值。
     */
    output?: {
      /**
       * @title format 值
       * @description OpenAI API 合约中的 format 值。
       */
      format?: RealtimeAudioFormats;
      /**
       * @title speed 值
       * @description OpenAI API 合约中的 speed 值。
       */
      speed?: number;
      /**
       * @title voice 值
       * @description OpenAI API 合约中的 voice 值。
       */
      voice?: VoiceIdsShared
    }
  };
  /**
   * @title expires at 值
   * @description OpenAI API 合约中的 expires at 值。
   */
  expires_at?: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title include 值
   * @description OpenAI API 合约中的 include 值。
   */
  include?: Array<'item.input_audio_transcription.logprobs'>;
  /**
   * @title instructions 值
   * @description OpenAI API 合约中的 instructions 值。
   */
  instructions?: string;
  /**
   * @title max output tokens 值
   * @description OpenAI API 合约中的 max output tokens 值。
   */
  max_output_tokens?: any;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: string;
  /**
   * @title output modalities 值
   * @description OpenAI API 合约中的 output modalities 值。
   */
  output_modalities?: any;
  /**
   * @title tool choice 值
   * @description OpenAI API 合约中的 tool choice 值。
   */
  tool_choice?: string;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools?: Array<RealtimeFunctionTool>;
  /**
   * @title tracing 值
   * @description OpenAI API 合约中的 tracing 值。
   */
  tracing?: any;
  /**
   * @title turn detection 值
   * @description OpenAI API 合约中的 turn detection 值。
   */
  turn_detection?: {
    /**
     * @title prefix padding ms 值
     * @description OpenAI API 合约中的 prefix padding ms 值。
     */
    prefix_padding_ms?: number;
    /**
     * @title silence duration ms 值
     * @description OpenAI API 合约中的 silence duration ms 值。
     */
    silence_duration_ms?: number;
    /**
     * @title threshold 值
     * @description OpenAI API 合约中的 threshold 值。
     */
    threshold?: number;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: string
  };
}

/**
 * @title Realtime Session Create Response GA 数据结构
 * @description OpenAI API 合约中的 Realtime Session Create Response GA 结构定义。
 */
export type RealtimeSessionCreateResponseGA = {
  /**
   * @title audio 值
   * @description OpenAI API 合约中的 audio 值。
   */
  audio?: {
    /**
     * @title input 值
     * @description OpenAI API 合约中的 input 值。
     */
    input?: {
      /**
       * @title format 值
       * @description OpenAI API 合约中的 format 值。
       */
      format?: RealtimeAudioFormats;
      /**
       * @title noise reduction 值
       * @description OpenAI API 合约中的 noise reduction 值。
       */
      noise_reduction?: {
        /**
         * @title type 值
         * @description OpenAI API 合约中的 type 值。
         */
        type?: NoiseReductionType
      };
      /**
       * @title transcription 值
       * @description OpenAI API 合约中的 transcription 值。
       */
      transcription?: AudioTranscriptionResponse;
      /**
       * @title turn detection 值
       * @description OpenAI API 合约中的 turn detection 值。
       */
      turn_detection?: RealtimeTurnDetection
    };
    /**
     * @title output 值
     * @description OpenAI API 合约中的 output 值。
     */
    output?: {
      /**
       * @title format 值
       * @description OpenAI API 合约中的 format 值。
       */
      format?: RealtimeAudioFormats;
      /**
       * @title speed 值
       * @description OpenAI API 合约中的 speed 值。
       */
      speed?: number;
      /**
       * @title voice 值
       * @description OpenAI API 合约中的 voice 值。
       */
      voice?: VoiceIdsShared
    }
  };
  /**
   * @title expires at 值
   * @description OpenAI API 合约中的 expires at 值。
   */
  expires_at?: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title include 值
   * @description OpenAI API 合约中的 include 值。
   */
  include?: Array<'item.input_audio_transcription.logprobs'>;
  /**
   * @title instructions 值
   * @description OpenAI API 合约中的 instructions 值。
   */
  instructions?: string;
  /**
   * @title max output tokens 值
   * @description OpenAI API 合约中的 max output tokens 值。
   */
  max_output_tokens?: any;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'realtime.session';
  /**
   * @title output modalities 值
   * @description OpenAI API 合约中的 output modalities 值。
   */
  output_modalities?: Array<'text' | 'audio'>;
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt?: Prompt;
  /**
   * @title reasoning 值
   * @description OpenAI API 合约中的 reasoning 值。
   */
  reasoning?: RealtimeReasoning;
  /**
   * @title tool choice 值
   * @description OpenAI API 合约中的 tool choice 值。
   */
  tool_choice?: any;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools?: Array<any>;
  /**
   * @title tracing 值
   * @description OpenAI API 合约中的 tracing 值。
   */
  tracing?: any;
  /**
   * @title truncation 值
   * @description OpenAI API 合约中的 truncation 值。
   */
  truncation?: RealtimeTruncation;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'realtime';
}

/**
 * @title Realtime Transcription Session Create Request 数据结构
 * @description OpenAI API 合约中的 Realtime Transcription Session Create Request 结构定义。
 */
export type RealtimeTranscriptionSessionCreateRequest = {
  /**
   * @title include 值
   * @description OpenAI API 合约中的 include 值。
   */
  include?: Array<'item.input_audio_transcription.logprobs'>;
  /**
   * @title input audio format 值
   * @description OpenAI API 合约中的 input audio format 值。
   */
  input_audio_format?: 'pcm16' | 'g711_ulaw' | 'g711_alaw';
  /**
   * @title input audio noise reduction 值
   * @description OpenAI API 合约中的 input audio noise reduction 值。
   */
  input_audio_noise_reduction?: {
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: NoiseReductionType
  };
  /**
   * @title input audio transcription 值
   * @description OpenAI API 合约中的 input audio transcription 值。
   */
  input_audio_transcription?: AudioTranscription;
  /**
   * @title turn detection 值
   * @description OpenAI API 合约中的 turn detection 值。
   */
  turn_detection?: {
    /**
     * @title prefix padding ms 值
     * @description OpenAI API 合约中的 prefix padding ms 值。
     */
    prefix_padding_ms?: number;
    /**
     * @title silence duration ms 值
     * @description OpenAI API 合约中的 silence duration ms 值。
     */
    silence_duration_ms?: number;
    /**
     * @title threshold 值
     * @description OpenAI API 合约中的 threshold 值。
     */
    threshold?: number;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: 'server_vad'
  };
}

/**
 * @title Realtime Transcription Session Create Request GA 数据结构
 * @description OpenAI API 合约中的 Realtime Transcription Session Create Request GA 结构定义。
 */
export type RealtimeTranscriptionSessionCreateRequestGA = {
  /**
   * @title audio 值
   * @description OpenAI API 合约中的 audio 值。
   */
  audio?: {
    /**
     * @title input 值
     * @description OpenAI API 合约中的 input 值。
     */
    input?: {
      /**
       * @title format 值
       * @description OpenAI API 合约中的 format 值。
       */
      format?: RealtimeAudioFormats;
      /**
       * @title noise reduction 值
       * @description OpenAI API 合约中的 noise reduction 值。
       */
      noise_reduction?: {
        /**
         * @title type 值
         * @description OpenAI API 合约中的 type 值。
         */
        type?: NoiseReductionType
      };
      /**
       * @title transcription 值
       * @description OpenAI API 合约中的 transcription 值。
       */
      transcription?: AudioTranscription;
      /**
       * @title turn detection 值
       * @description OpenAI API 合约中的 turn detection 值。
       */
      turn_detection?: RealtimeTurnDetection
    }
  };
  /**
   * @title include 值
   * @description OpenAI API 合约中的 include 值。
   */
  include?: Array<'item.input_audio_transcription.logprobs'>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'transcription';
}

/**
 * @title Realtime Transcription Session Create Response 数据结构
 * @description OpenAI API 合约中的 Realtime Transcription Session Create Response 结构定义。
 */
export type RealtimeTranscriptionSessionCreateResponse = {
  /**
   * @title client secret 值
   * @description OpenAI API 合约中的 client secret 值。
   */
  client_secret: {
    /**
     * @title expires at 值
     * @description OpenAI API 合约中的 expires at 值。
     */
    expires_at: number;
    /**
     * @title value 值
     * @description OpenAI API 合约中的 value 值。
     */
    value: string
  };
  /**
   * @title input audio format 值
   * @description OpenAI API 合约中的 input audio format 值。
   */
  input_audio_format?: string;
  /**
   * @title input audio transcription 值
   * @description OpenAI API 合约中的 input audio transcription 值。
   */
  input_audio_transcription?: AudioTranscriptionResponse;
  /**
   * @title modalities 值
   * @description OpenAI API 合约中的 modalities 值。
   */
  modalities?: any;
  /**
   * @title turn detection 值
   * @description OpenAI API 合约中的 turn detection 值。
   */
  turn_detection?: {
    /**
     * @title prefix padding ms 值
     * @description OpenAI API 合约中的 prefix padding ms 值。
     */
    prefix_padding_ms?: number;
    /**
     * @title silence duration ms 值
     * @description OpenAI API 合约中的 silence duration ms 值。
     */
    silence_duration_ms?: number;
    /**
     * @title threshold 值
     * @description OpenAI API 合约中的 threshold 值。
     */
    threshold?: number;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: string
  };
}

/**
 * @title Realtime Transcription Session Create Response GA 数据结构
 * @description OpenAI API 合约中的 Realtime Transcription Session Create Response GA 结构定义。
 */
export type RealtimeTranscriptionSessionCreateResponseGA = {
  /**
   * @title audio 值
   * @description OpenAI API 合约中的 audio 值。
   */
  audio?: {
    /**
     * @title input 值
     * @description OpenAI API 合约中的 input 值。
     */
    input?: {
      /**
       * @title format 值
       * @description OpenAI API 合约中的 format 值。
       */
      format?: RealtimeAudioFormats;
      /**
       * @title noise reduction 值
       * @description OpenAI API 合约中的 noise reduction 值。
       */
      noise_reduction?: {
        /**
         * @title type 值
         * @description OpenAI API 合约中的 type 值。
         */
        type?: NoiseReductionType
      };
      /**
       * @title transcription 值
       * @description OpenAI API 合约中的 transcription 值。
       */
      transcription?: AudioTranscriptionResponse;
      /**
       * @title turn detection 值
       * @description OpenAI API 合约中的 turn detection 值。
       */
      turn_detection?: any
    }
  };
  /**
   * @title expires at 值
   * @description OpenAI API 合约中的 expires at 值。
   */
  expires_at?: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title include 值
   * @description OpenAI API 合约中的 include 值。
   */
  include?: Array<'item.input_audio_transcription.logprobs'>;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'transcription';
}

/**
 * @title Realtime Translation Client Event 数据结构
 * @description OpenAI API 合约中的 Realtime Translation Client Event 结构定义。
 */
export type RealtimeTranslationClientEvent = any

/**
 * @title Realtime Translation Client Event Input Audio Buffer Append 数据结构
 * @description OpenAI API 合约中的 Realtime Translation Client Event Input Audio Buffer Append 结构定义。
 */
export type RealtimeTranslationClientEventInputAudioBufferAppend = {
  /**
   * @title audio 值
   * @description OpenAI API 合约中的 audio 值。
   */
  audio: string;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'session.input_audio_buffer.append';
}

/**
 * @title Realtime Translation Client Event Session Close 数据结构
 * @description OpenAI API 合约中的 Realtime Translation Client Event Session Close 结构定义。
 */
export type RealtimeTranslationClientEventSessionClose = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'session.close';
}

/**
 * @title Realtime Translation Client Event Session Update 数据结构
 * @description OpenAI API 合约中的 Realtime Translation Client Event Session Update 结构定义。
 */
export type RealtimeTranslationClientEventSessionUpdate = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id?: string;
  /**
   * @title session 值
   * @description OpenAI API 合约中的 session 值。
   */
  session: RealtimeTranslationSessionUpdateRequest;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'session.update';
}

/**
 * @title Realtime Translation Client Secret Create Request 数据结构
 * @description OpenAI API 合约中的 Realtime Translation Client Secret Create Request 结构定义。
 */
export type RealtimeTranslationClientSecretCreateRequest = {
  /**
   * @title expires after 值
   * @description OpenAI API 合约中的 expires after 值。
   */
  expires_after?: {
    /**
     * @title anchor 值
     * @description OpenAI API 合约中的 anchor 值。
     */
    anchor?: 'created_at';
    /**
     * @title seconds 值
     * @description OpenAI API 合约中的 seconds 值。
     */
    seconds?: number
  };
  /**
   * @title session 值
   * @description OpenAI API 合约中的 session 值。
   */
  session: RealtimeTranslationSessionCreateRequest;
}

/**
 * @title Realtime Translation Client Secret Create Response 数据结构
 * @description OpenAI API 合约中的 Realtime Translation Client Secret Create Response 结构定义。
 */
export type RealtimeTranslationClientSecretCreateResponse = {
  /**
   * @title expires at 值
   * @description OpenAI API 合约中的 expires at 值。
   */
  expires_at: number;
  /**
   * @title session 值
   * @description OpenAI API 合约中的 session 值。
   */
  session: RealtimeTranslationSession;
  /**
   * @title value 值
   * @description OpenAI API 合约中的 value 值。
   */
  value: string;
}

/**
 * @title Realtime Translation Server Event 数据结构
 * @description OpenAI API 合约中的 Realtime Translation Server Event 结构定义。
 */
export type RealtimeTranslationServerEvent = any

/**
 * @title Realtime Translation Server Event Session Closed 数据结构
 * @description OpenAI API 合约中的 Realtime Translation Server Event Session Closed 结构定义。
 */
export type RealtimeTranslationServerEventSessionClosed = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'session.closed';
}

/**
 * @title Realtime Translation Server Event Session Created 数据结构
 * @description OpenAI API 合约中的 Realtime Translation Server Event Session Created 结构定义。
 */
export type RealtimeTranslationServerEventSessionCreated = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title session 值
   * @description OpenAI API 合约中的 session 值。
   */
  session: RealtimeTranslationSession;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'session.created';
}

/**
 * @title Realtime Translation Server Event Session Input Transcript Delta 数据结构
 * @description OpenAI API 合约中的 Realtime Translation Server Event Session Input Transcript Delta 结构定义。
 */
export type RealtimeTranslationServerEventSessionInputTranscriptDelta = {
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title elapsed ms 值
   * @description OpenAI API 合约中的 elapsed ms 值。
   */
  elapsed_ms?: any;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'session.input_transcript.delta';
}

/**
 * @title Realtime Translation Server Event Session Output Audio Delta 数据结构
 * @description OpenAI API 合约中的 Realtime Translation Server Event Session Output Audio Delta 结构定义。
 */
export type RealtimeTranslationServerEventSessionOutputAudioDelta = {
  /**
   * @title channels 值
   * @description OpenAI API 合约中的 channels 值。
   */
  channels?: number;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title elapsed ms 值
   * @description OpenAI API 合约中的 elapsed ms 值。
   */
  elapsed_ms?: any;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title format 值
   * @description OpenAI API 合约中的 format 值。
   */
  format?: 'pcm16';
  /**
   * @title sample rate 值
   * @description OpenAI API 合约中的 sample rate 值。
   */
  sample_rate?: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'session.output_audio.delta';
}

/**
 * @title Realtime Translation Server Event Session Output Transcript Delta 数据结构
 * @description OpenAI API 合约中的 Realtime Translation Server Event Session Output Transcript Delta 结构定义。
 */
export type RealtimeTranslationServerEventSessionOutputTranscriptDelta = {
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title elapsed ms 值
   * @description OpenAI API 合约中的 elapsed ms 值。
   */
  elapsed_ms?: any;
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'session.output_transcript.delta';
}

/**
 * @title Realtime Translation Server Event Session Updated 数据结构
 * @description OpenAI API 合约中的 Realtime Translation Server Event Session Updated 结构定义。
 */
export type RealtimeTranslationServerEventSessionUpdated = {
  /**
   * @title event id 值
   * @description OpenAI API 合约中的 event id 值。
   */
  event_id: string;
  /**
   * @title session 值
   * @description OpenAI API 合约中的 session 值。
   */
  session: RealtimeTranslationSession;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'session.updated';
}

/**
 * @title Realtime Translation Session 数据结构
 * @description OpenAI API 合约中的 Realtime Translation Session 结构定义。
 */
export type RealtimeTranslationSession = {
  /**
   * @title audio 值
   * @description OpenAI API 合约中的 audio 值。
   */
  audio: {
    /**
     * @title input 值
     * @description OpenAI API 合约中的 input 值。
     */
    input?: {
      /**
       * @title noise reduction 值
       * @description OpenAI API 合约中的 noise reduction 值。
       */
      noise_reduction?: any;
      /**
       * @title transcription 值
       * @description OpenAI API 合约中的 transcription 值。
       */
      transcription?: any
    };
    /**
     * @title output 值
     * @description OpenAI API 合约中的 output 值。
     */
    output?: {
      /**
       * @title language 值
       * @description OpenAI API 合约中的 language 值。
       */
      language?: string
    }
  };
  /**
   * @title expires at 值
   * @description OpenAI API 合约中的 expires at 值。
   */
  expires_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'translation';
}

/**
 * @title Realtime Translation Session Create Request 数据结构
 * @description OpenAI API 合约中的 Realtime Translation Session Create Request 结构定义。
 */
export type RealtimeTranslationSessionCreateRequest = {
  /**
   * @title audio 值
   * @description OpenAI API 合约中的 audio 值。
   */
  audio?: {
    /**
     * @title input 值
     * @description OpenAI API 合约中的 input 值。
     */
    input?: {
      /**
       * @title noise reduction 值
       * @description OpenAI API 合约中的 noise reduction 值。
       */
      noise_reduction?: any;
      /**
       * @title transcription 值
       * @description OpenAI API 合约中的 transcription 值。
       */
      transcription?: any
    };
    /**
     * @title output 值
     * @description OpenAI API 合约中的 output 值。
     */
    output?: {
      /**
       * @title language 值
       * @description OpenAI API 合约中的 language 值。
       */
      language?: string
    }
  };
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: string;
}

/**
 * @title Realtime Translation Session Update Request 数据结构
 * @description OpenAI API 合约中的 Realtime Translation Session Update Request 结构定义。
 */
export type RealtimeTranslationSessionUpdateRequest = {
  /**
   * @title audio 值
   * @description OpenAI API 合约中的 audio 值。
   */
  audio?: {
    /**
     * @title input 值
     * @description OpenAI API 合约中的 input 值。
     */
    input?: {
      /**
       * @title noise reduction 值
       * @description OpenAI API 合约中的 noise reduction 值。
       */
      noise_reduction?: any;
      /**
       * @title transcription 值
       * @description OpenAI API 合约中的 transcription 值。
       */
      transcription?: any
    };
    /**
     * @title output 值
     * @description OpenAI API 合约中的 output 值。
     */
    output?: {
      /**
       * @title language 值
       * @description OpenAI API 合约中的 language 值。
       */
      language?: string
    }
  };
}

/**
 * @title Realtime Truncation 数据结构
 * @description OpenAI API 合约中的 Realtime Truncation 结构定义。
 */
export type RealtimeTruncation = any

/**
 * @title Realtime Turn Detection 数据结构
 * @description OpenAI API 合约中的 Realtime Turn Detection 结构定义。
 */
export type RealtimeTurnDetection = any

/**
 * @title Reasoning 数据结构
 * @description OpenAI API 合约中的 Reasoning 结构定义。
 */
export type Reasoning = {
  /**
   * @title context 值
   * @description OpenAI API 合约中的 context 值。
   */
  context?: any;
  /**
   * @title effort 值
   * @description OpenAI API 合约中的 effort 值。
   */
  effort?: ReasoningEffort;
  /**
   * @title generate summary 值
   * @description OpenAI API 合约中的 generate summary 值。
   */
  generate_summary?: any;
  /**
   * @title mode 值
   * @description OpenAI API 合约中的 mode 值。
   */
  mode?: ReasoningModeEnum;
  /**
   * @title summary 值
   * @description OpenAI API 合约中的 summary 值。
   */
  summary?: any;
}

/**
 * @title Reasoning Effort 数据结构
 * @description OpenAI API 合约中的 Reasoning Effort 结构定义。
 */
export type ReasoningEffort = any

/**
 * @title Reasoning Item 数据结构
 * @description OpenAI API 合约中的 Reasoning Item 结构定义。
 */
export type ReasoningItem = {
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content?: Array<ReasoningTextContent>;
  /**
   * @title encrypted content 值
   * @description OpenAI API 合约中的 encrypted content 值。
   */
  encrypted_content?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: 'in_progress' | 'completed' | 'incomplete';
  /**
   * @title summary 值
   * @description OpenAI API 合约中的 summary 值。
   */
  summary: Array<SummaryTextContent>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'reasoning';
}

/**
 * @title Reasoning Mode Enum 数据结构
 * @description OpenAI API 合约中的 Reasoning Mode Enum 结构定义。
 */
export type ReasoningModeEnum = any

/**
 * @title Reasoning Text Content 数据结构
 * @description OpenAI API 合约中的 Reasoning Text Content 结构定义。
 */
export type ReasoningTextContent = {
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'reasoning_text';
}

/**
 * @title Refusal Content 数据结构
 * @description OpenAI API 合约中的 Refusal Content 结构定义。
 */
export type RefusalContent = {
  /**
   * @title refusal 值
   * @description OpenAI API 合约中的 refusal 值。
   */
  refusal: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'refusal';
}

/**
 * @title Response 数据结构
 * @description OpenAI API 合约中的 Response 结构定义。
 */
export type Response = any

/**
 * @title Response Audio Delta Event 数据结构
 * @description OpenAI API 合约中的 Response Audio Delta Event 结构定义。
 */
export type ResponseAudioDeltaEvent = {
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.audio.delta';
}

/**
 * @title Response Audio Done Event 数据结构
 * @description OpenAI API 合约中的 Response Audio Done Event 结构定义。
 */
export type ResponseAudioDoneEvent = {
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.audio.done';
}

/**
 * @title Response Audio Transcript Delta Event 数据结构
 * @description OpenAI API 合约中的 Response Audio Transcript Delta Event 结构定义。
 */
export type ResponseAudioTranscriptDeltaEvent = {
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.audio.transcript.delta';
}

/**
 * @title Response Audio Transcript Done Event 数据结构
 * @description OpenAI API 合约中的 Response Audio Transcript Done Event 结构定义。
 */
export type ResponseAudioTranscriptDoneEvent = {
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.audio.transcript.done';
}

/**
 * @title Response Code Interpreter Call Code Delta Event 数据结构
 * @description OpenAI API 合约中的 Response Code Interpreter Call Code Delta Event 结构定义。
 */
export type ResponseCodeInterpreterCallCodeDeltaEvent = {
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.code_interpreter_call_code.delta';
}

/**
 * @title Response Code Interpreter Call Code Done Event 数据结构
 * @description OpenAI API 合约中的 Response Code Interpreter Call Code Done Event 结构定义。
 */
export type ResponseCodeInterpreterCallCodeDoneEvent = {
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.code_interpreter_call_code.done';
}

/**
 * @title Response Code Interpreter Call Completed Event 数据结构
 * @description OpenAI API 合约中的 Response Code Interpreter Call Completed Event 结构定义。
 */
export type ResponseCodeInterpreterCallCompletedEvent = {
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.code_interpreter_call.completed';
}

/**
 * @title Response Code Interpreter Call In Progress Event 数据结构
 * @description OpenAI API 合约中的 Response Code Interpreter Call In Progress Event 结构定义。
 */
export type ResponseCodeInterpreterCallInProgressEvent = {
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.code_interpreter_call.in_progress';
}

/**
 * @title Response Code Interpreter Call Interpreting Event 数据结构
 * @description OpenAI API 合约中的 Response Code Interpreter Call Interpreting Event 结构定义。
 */
export type ResponseCodeInterpreterCallInterpretingEvent = {
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.code_interpreter_call.interpreting';
}

/**
 * @title Response Completed Event 数据结构
 * @description OpenAI API 合约中的 Response Completed Event 结构定义。
 */
export type ResponseCompletedEvent = {
  /**
   * @title response 值
   * @description OpenAI API 合约中的 response 值。
   */
  response: Response;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.completed';
}

/**
 * @title Response Content Part Added Event 数据结构
 * @description OpenAI API 合约中的 Response Content Part Added Event 结构定义。
 */
export type ResponseContentPartAddedEvent = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title part 值
   * @description OpenAI API 合约中的 part 值。
   */
  part: OutputContent;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.content_part.added';
}

/**
 * @title Response Content Part Done Event 数据结构
 * @description OpenAI API 合约中的 Response Content Part Done Event 结构定义。
 */
export type ResponseContentPartDoneEvent = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title part 值
   * @description OpenAI API 合约中的 part 值。
   */
  part: OutputContent;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.content_part.done';
}

/**
 * @title Response Conversation 数据结构
 * @description OpenAI API 合约中的 Response Conversation 结构定义。
 */
export type ResponseConversation = {
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
}

/**
 * @title Response Created Event 数据结构
 * @description OpenAI API 合约中的 Response Created Event 结构定义。
 */
export type ResponseCreatedEvent = {
  /**
   * @title response 值
   * @description OpenAI API 合约中的 response 值。
   */
  response: Response;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.created';
}

/**
 * @title Response Custom Tool Call Input Delta Event 数据结构
 * @description OpenAI API 合约中的 Response Custom Tool Call Input Delta Event 结构定义。
 */
export type ResponseCustomToolCallInputDeltaEvent = {
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.custom_tool_call_input.delta';
}

/**
 * @title Response Custom Tool Call Input Done Event 数据结构
 * @description OpenAI API 合约中的 Response Custom Tool Call Input Done Event 结构定义。
 */
export type ResponseCustomToolCallInputDoneEvent = {
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.custom_tool_call_input.done';
}

/**
 * @title Response Error 数据结构
 * @description OpenAI API 合约中的 Response Error 结构定义。
 */
export type ResponseError = any

/**
 * @title Response Error Code 数据结构
 * @description OpenAI API 合约中的 Response Error Code 结构定义。
 */
export type ResponseErrorCode = 'server_error' | 'rate_limit_exceeded' | 'invalid_prompt' | 'data_residency_mismatch' | 'bio_policy' | 'vector_store_timeout' | 'invalid_image' | 'invalid_image_format' | 'invalid_base64_image' | 'invalid_image_url' | 'image_too_large' | 'image_too_small' | 'image_parse_error' | 'image_content_policy_violation' | 'invalid_image_mode' | 'image_file_too_large' | 'unsupported_image_media_type' | 'empty_image_file' | 'failed_to_download_image' | 'image_file_not_found'

/**
 * @title Response Error Event 数据结构
 * @description OpenAI API 合约中的 Response Error Event 结构定义。
 */
export type ResponseErrorEvent = {
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: any;
  /**
   * @title message 值
   * @description OpenAI API 合约中的 message 值。
   */
  message: string;
  /**
   * @title param 值
   * @description OpenAI API 合约中的 param 值。
   */
  param: any;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'error';
}

/**
 * @title Response Failed Event 数据结构
 * @description OpenAI API 合约中的 Response Failed Event 结构定义。
 */
export type ResponseFailedEvent = {
  /**
   * @title response 值
   * @description OpenAI API 合约中的 response 值。
   */
  response: Response;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.failed';
}

/**
 * @title Response File Search Call Completed Event 数据结构
 * @description OpenAI API 合约中的 Response File Search Call Completed Event 结构定义。
 */
export type ResponseFileSearchCallCompletedEvent = {
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.file_search_call.completed';
}

/**
 * @title Response File Search Call In Progress Event 数据结构
 * @description OpenAI API 合约中的 Response File Search Call In Progress Event 结构定义。
 */
export type ResponseFileSearchCallInProgressEvent = {
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.file_search_call.in_progress';
}

/**
 * @title Response File Search Call Searching Event 数据结构
 * @description OpenAI API 合约中的 Response File Search Call Searching Event 结构定义。
 */
export type ResponseFileSearchCallSearchingEvent = {
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.file_search_call.searching';
}

/**
 * @title Response Format Json Object 数据结构
 * @description OpenAI API 合约中的 Response Format Json Object 结构定义。
 */
export type ResponseFormatJsonObject = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'json_object';
}

/**
 * @title Response Format Json Schema 数据结构
 * @description OpenAI API 合约中的 Response Format Json Schema 结构定义。
 */
export type ResponseFormatJsonSchema = {
  /**
   * @title json schema 值
   * @description OpenAI API 合约中的 json schema 值。
   */
  json_schema: {
    /**
     * @title description 值
     * @description OpenAI API 合约中的 description 值。
     */
    description?: string;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name: string;
    /**
     * @title schema 值
     * @description OpenAI API 合约中的 schema 值。
     */
    schema?: ResponseFormatJsonSchemaSchema;
    /**
     * @title strict 值
     * @description OpenAI API 合约中的 strict 值。
     */
    strict?: any
  };
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'json_schema';
}

/**
 * @title Response Format Json Schema Schema 数据结构
 * @description OpenAI API 合约中的 Response Format Json Schema Schema 结构定义。
 */
export type ResponseFormatJsonSchemaSchema = Record<any, any>

/**
 * @title Response Format Text 数据结构
 * @description OpenAI API 合约中的 Response Format Text 结构定义。
 */
export type ResponseFormatText = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'text';
}

/**
 * @title Response Format Text Grammar 数据结构
 * @description OpenAI API 合约中的 Response Format Text Grammar 结构定义。
 */
export type ResponseFormatTextGrammar = {
  /**
   * @title grammar 值
   * @description OpenAI API 合约中的 grammar 值。
   */
  grammar: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'grammar';
}

/**
 * @title Response Format Text Python 数据结构
 * @description OpenAI API 合约中的 Response Format Text Python 结构定义。
 */
export type ResponseFormatTextPython = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'python';
}

/**
 * @title Response Function Call Arguments Delta Event 数据结构
 * @description OpenAI API 合约中的 Response Function Call Arguments Delta Event 结构定义。
 */
export type ResponseFunctionCallArgumentsDeltaEvent = {
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.function_call_arguments.delta';
}

/**
 * @title Response Function Call Arguments Done Event 数据结构
 * @description OpenAI API 合约中的 Response Function Call Arguments Done Event 结构定义。
 */
export type ResponseFunctionCallArgumentsDoneEvent = {
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.function_call_arguments.done';
}

/**
 * @title Response Image Gen Call Completed Event 数据结构
 * @description OpenAI API 合约中的 Response Image Gen Call Completed Event 结构定义。
 */
export type ResponseImageGenCallCompletedEvent = {
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.image_generation_call.completed';
}

/**
 * @title Response Image Gen Call Generating Event 数据结构
 * @description OpenAI API 合约中的 Response Image Gen Call Generating Event 结构定义。
 */
export type ResponseImageGenCallGeneratingEvent = {
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.image_generation_call.generating';
}

/**
 * @title Response Image Gen Call In Progress Event 数据结构
 * @description OpenAI API 合约中的 Response Image Gen Call In Progress Event 结构定义。
 */
export type ResponseImageGenCallInProgressEvent = {
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.image_generation_call.in_progress';
}

/**
 * @title Response Image Gen Call Partial Image Event 数据结构
 * @description OpenAI API 合约中的 Response Image Gen Call Partial Image Event 结构定义。
 */
export type ResponseImageGenCallPartialImageEvent = {
  /**
   * @title background 值
   * @description OpenAI API 合约中的 background 值。
   */
  background?: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output format 值
   * @description OpenAI API 合约中的 output format 值。
   */
  output_format?: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title partial image b64 值
   * @description OpenAI API 合约中的 partial image b64 值。
   */
  partial_image_b64: string;
  /**
   * @title partial image index 值
   * @description OpenAI API 合约中的 partial image index 值。
   */
  partial_image_index: number;
  /**
   * @title quality 值
   * @description OpenAI API 合约中的 quality 值。
   */
  quality?: string;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title size 值
   * @description OpenAI API 合约中的 size 值。
   */
  size?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.image_generation_call.partial_image';
}

/**
 * @title Response In Progress Event 数据结构
 * @description OpenAI API 合约中的 Response In Progress Event 结构定义。
 */
export type ResponseInProgressEvent = {
  /**
   * @title response 值
   * @description OpenAI API 合约中的 response 值。
   */
  response: Response;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.in_progress';
}

/**
 * @title Response Incomplete Event 数据结构
 * @description OpenAI API 合约中的 Response Incomplete Event 结构定义。
 */
export type ResponseIncompleteEvent = {
  /**
   * @title response 值
   * @description OpenAI API 合约中的 response 值。
   */
  response: Response;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.incomplete';
}

/**
 * @title Response Item List 数据结构
 * @description OpenAI API 合约中的 Response Item List 结构定义。
 */
export type ResponseItemList = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<ItemResource>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id: string;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Response Log Prob 数据结构
 * @description OpenAI API 合约中的 Response Log Prob 结构定义。
 */
export type ResponseLogProb = {
  /**
   * @title logprob 值
   * @description OpenAI API 合约中的 logprob 值。
   */
  logprob: number;
  /**
   * @title token 值
   * @description OpenAI API 合约中的 token 值。
   */
  token: string;
  /**
   * @title top logprobs 值
   * @description OpenAI API 合约中的 top logprobs 值。
   */
  top_logprobs?: Array<{
    /**
     * @title logprob 值
     * @description OpenAI API 合约中的 logprob 值。
     */
    logprob?: number;
    /**
     * @title token 值
     * @description OpenAI API 合约中的 token 值。
     */
    token?: string
  }>;
}

/**
 * @title Response MCPCall Arguments Delta Event 数据结构
 * @description OpenAI API 合约中的 Response MCPCall Arguments Delta Event 结构定义。
 */
export type ResponseMCPCallArgumentsDeltaEvent = {
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_call_arguments.delta';
}

/**
 * @title Response MCPCall Arguments Done Event 数据结构
 * @description OpenAI API 合约中的 Response MCPCall Arguments Done Event 结构定义。
 */
export type ResponseMCPCallArgumentsDoneEvent = {
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_call_arguments.done';
}

/**
 * @title Response MCPCall Completed Event 数据结构
 * @description OpenAI API 合约中的 Response MCPCall Completed Event 结构定义。
 */
export type ResponseMCPCallCompletedEvent = {
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_call.completed';
}

/**
 * @title Response MCPCall Failed Event 数据结构
 * @description OpenAI API 合约中的 Response MCPCall Failed Event 结构定义。
 */
export type ResponseMCPCallFailedEvent = {
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_call.failed';
}

/**
 * @title Response MCPCall In Progress Event 数据结构
 * @description OpenAI API 合约中的 Response MCPCall In Progress Event 结构定义。
 */
export type ResponseMCPCallInProgressEvent = {
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_call.in_progress';
}

/**
 * @title Response MCPList Tools Completed Event 数据结构
 * @description OpenAI API 合约中的 Response MCPList Tools Completed Event 结构定义。
 */
export type ResponseMCPListToolsCompletedEvent = {
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_list_tools.completed';
}

/**
 * @title Response MCPList Tools Failed Event 数据结构
 * @description OpenAI API 合约中的 Response MCPList Tools Failed Event 结构定义。
 */
export type ResponseMCPListToolsFailedEvent = {
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_list_tools.failed';
}

/**
 * @title Response MCPList Tools In Progress Event 数据结构
 * @description OpenAI API 合约中的 Response MCPList Tools In Progress Event 结构定义。
 */
export type ResponseMCPListToolsInProgressEvent = {
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.mcp_list_tools.in_progress';
}

/**
 * @title Response Modalities 数据结构
 * @description OpenAI API 合约中的 Response Modalities 结构定义。
 */
export type ResponseModalities = any

/**
 * @title Response Output Item Added Event 数据结构
 * @description OpenAI API 合约中的 Response Output Item Added Event 结构定义。
 */
export type ResponseOutputItemAddedEvent = {
  /**
   * @title item 值
   * @description OpenAI API 合约中的 item 值。
   */
  item: OutputItem;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_item.added';
}

/**
 * @title Response Output Item Done Event 数据结构
 * @description OpenAI API 合约中的 Response Output Item Done Event 结构定义。
 */
export type ResponseOutputItemDoneEvent = {
  /**
   * @title item 值
   * @description OpenAI API 合约中的 item 值。
   */
  item: OutputItem;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_item.done';
}

/**
 * @title Response Output Text 数据结构
 * @description OpenAI API 合约中的 Response Output Text 结构定义。
 */
export type ResponseOutputText = {
  /**
   * @title annotations 值
   * @description OpenAI API 合约中的 annotations 值。
   */
  annotations: Array<any>;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'output_text';
}

/**
 * @title Response Output Text Annotation Added Event 数据结构
 * @description OpenAI API 合约中的 Response Output Text Annotation Added Event 结构定义。
 */
export type ResponseOutputTextAnnotationAddedEvent = {
  /**
   * @title annotation 值
   * @description OpenAI API 合约中的 annotation 值。
   */
  annotation: any;
  /**
   * @title annotation index 值
   * @description OpenAI API 合约中的 annotation index 值。
   */
  annotation_index: number;
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_text.annotation.added';
}

/**
 * @title Response Prompt Variables 数据结构
 * @description OpenAI API 合约中的 Response Prompt Variables 结构定义。
 */
export type ResponsePromptVariables = any

/**
 * @title Response Properties 数据结构
 * @description OpenAI API 合约中的 Response Properties 结构定义。
 */
export type ResponseProperties = {
  /**
   * @title background 值
   * @description OpenAI API 合约中的 background 值。
   */
  background?: any;
  /**
   * @title max tool calls 值
   * @description OpenAI API 合约中的 max tool calls 值。
   */
  max_tool_calls?: any;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: ModelIdsResponses;
  /**
   * @title previous response id 值
   * @description OpenAI API 合约中的 previous response id 值。
   */
  previous_response_id?: any;
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt?: Prompt;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text?: ResponseTextParam;
  /**
   * @title tool choice 值
   * @description OpenAI API 合约中的 tool choice 值。
   */
  tool_choice?: ToolChoiceParam;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools?: ToolsArray;
}

/**
 * @title Response Queued Event 数据结构
 * @description OpenAI API 合约中的 Response Queued Event 结构定义。
 */
export type ResponseQueuedEvent = {
  /**
   * @title response 值
   * @description OpenAI API 合约中的 response 值。
   */
  response: Response;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.queued';
}

/**
 * @title Response Reasoning Summary Part Added Event 数据结构
 * @description OpenAI API 合约中的 Response Reasoning Summary Part Added Event 结构定义。
 */
export type ResponseReasoningSummaryPartAddedEvent = {
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title part 值
   * @description OpenAI API 合约中的 part 值。
   */
  part: {
    /**
     * @title text 值
     * @description OpenAI API 合约中的 text 值。
     */
    text: string;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type: 'summary_text'
  };
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title summary index 值
   * @description OpenAI API 合约中的 summary index 值。
   */
  summary_index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.reasoning_summary_part.added';
}

/**
 * @title Response Reasoning Summary Part Done Event 数据结构
 * @description OpenAI API 合约中的 Response Reasoning Summary Part Done Event 结构定义。
 */
export type ResponseReasoningSummaryPartDoneEvent = {
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title part 值
   * @description OpenAI API 合约中的 part 值。
   */
  part: {
    /**
     * @title text 值
     * @description OpenAI API 合约中的 text 值。
     */
    text: string;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type: 'summary_text'
  };
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: 'incomplete';
  /**
   * @title summary index 值
   * @description OpenAI API 合约中的 summary index 值。
   */
  summary_index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.reasoning_summary_part.done';
}

/**
 * @title Response Reasoning Summary Text Delta Event 数据结构
 * @description OpenAI API 合约中的 Response Reasoning Summary Text Delta Event 结构定义。
 */
export type ResponseReasoningSummaryTextDeltaEvent = {
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title summary index 值
   * @description OpenAI API 合约中的 summary index 值。
   */
  summary_index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.reasoning_summary_text.delta';
}

/**
 * @title Response Reasoning Summary Text Done Event 数据结构
 * @description OpenAI API 合约中的 Response Reasoning Summary Text Done Event 结构定义。
 */
export type ResponseReasoningSummaryTextDoneEvent = {
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title summary index 值
   * @description OpenAI API 合约中的 summary index 值。
   */
  summary_index: number;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.reasoning_summary_text.done';
}

/**
 * @title Response Reasoning Text Delta Event 数据结构
 * @description OpenAI API 合约中的 Response Reasoning Text Delta Event 结构定义。
 */
export type ResponseReasoningTextDeltaEvent = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.reasoning_text.delta';
}

/**
 * @title Response Reasoning Text Done Event 数据结构
 * @description OpenAI API 合约中的 Response Reasoning Text Done Event 结构定义。
 */
export type ResponseReasoningTextDoneEvent = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.reasoning_text.done';
}

/**
 * @title Response Refusal Delta Event 数据结构
 * @description OpenAI API 合约中的 Response Refusal Delta Event 结构定义。
 */
export type ResponseRefusalDeltaEvent = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.refusal.delta';
}

/**
 * @title Response Refusal Done Event 数据结构
 * @description OpenAI API 合约中的 Response Refusal Done Event 结构定义。
 */
export type ResponseRefusalDoneEvent = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title refusal 值
   * @description OpenAI API 合约中的 refusal 值。
   */
  refusal: string;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.refusal.done';
}

/**
 * @title Response Shell Call Command Added Streaming Event 数据结构
 * @description OpenAI API 合约中的 Response Shell Call Command Added Streaming Event 结构定义。
 */
export type ResponseShellCallCommandAddedStreamingEvent = {
  /**
   * @title command 值
   * @description OpenAI API 合约中的 command 值。
   */
  command: string;
  /**
   * @title command index 值
   * @description OpenAI API 合约中的 command index 值。
   */
  command_index: number;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.shell_call_command.added';
}

/**
 * @title Response Shell Call Command Delta Streaming Event 数据结构
 * @description OpenAI API 合约中的 Response Shell Call Command Delta Streaming Event 结构定义。
 */
export type ResponseShellCallCommandDeltaStreamingEvent = {
  /**
   * @title command index 值
   * @description OpenAI API 合约中的 command index 值。
   */
  command_index: number;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title obfuscation 值
   * @description OpenAI API 合约中的 obfuscation 值。
   */
  obfuscation?: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.shell_call_command.delta';
}

/**
 * @title Response Shell Call Command Done Streaming Event 数据结构
 * @description OpenAI API 合约中的 Response Shell Call Command Done Streaming Event 结构定义。
 */
export type ResponseShellCallCommandDoneStreamingEvent = {
  /**
   * @title command 值
   * @description OpenAI API 合约中的 command 值。
   */
  command: string;
  /**
   * @title command index 值
   * @description OpenAI API 合约中的 command index 值。
   */
  command_index: number;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.shell_call_command.done';
}

/**
 * @title Response Shell Call Output Content Delta Streaming Event 数据结构
 * @description OpenAI API 合约中的 Response Shell Call Output Content Delta Streaming Event 结构定义。
 */
export type ResponseShellCallOutputContentDeltaStreamingEvent = {
  /**
   * @title command index 值
   * @description OpenAI API 合约中的 command index 值。
   */
  command_index: number;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: ShellCallOutputDelta;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.shell_call_output_content.delta';
}

/**
 * @title Response Shell Call Output Content Done Streaming Event 数据结构
 * @description OpenAI API 合约中的 Response Shell Call Output Content Done Streaming Event 结构定义。
 */
export type ResponseShellCallOutputContentDoneStreamingEvent = {
  /**
   * @title command index 值
   * @description OpenAI API 合约中的 command index 值。
   */
  command_index: number;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output 值
   * @description OpenAI API 合约中的 output 值。
   */
  output: Array<FunctionShellCallOutputContent>;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.shell_call_output_content.done';
}

/**
 * @title Response Stream Event 数据结构
 * @description OpenAI API 合约中的 Response Stream Event 结构定义。
 */
export type ResponseStreamEvent = any

/**
 * @title Response Stream Options 数据结构
 * @description OpenAI API 合约中的 Response Stream Options 结构定义。
 */
export type ResponseStreamOptions = any

/**
 * @title Response Text Delta Event 数据结构
 * @description OpenAI API 合约中的 Response Text Delta Event 结构定义。
 */
export type ResponseTextDeltaEvent = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title logprobs 值
   * @description OpenAI API 合约中的 logprobs 值。
   */
  logprobs: Array<ResponseLogProb>;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_text.delta';
}

/**
 * @title Response Text Done Event 数据结构
 * @description OpenAI API 合约中的 Response Text Done Event 结构定义。
 */
export type ResponseTextDoneEvent = {
  /**
   * @title content index 值
   * @description OpenAI API 合约中的 content index 值。
   */
  content_index: number;
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title logprobs 值
   * @description OpenAI API 合约中的 logprobs 值。
   */
  logprobs: Array<ResponseLogProb>;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.output_text.done';
}

/**
 * @title Response Text Param 数据结构
 * @description OpenAI API 合约中的 Response Text Param 结构定义。
 */
export type ResponseTextParam = {
  /**
   * @title format 值
   * @description OpenAI API 合约中的 format 值。
   */
  format?: TextResponseFormatConfiguration;
  /**
   * @title verbosity 值
   * @description OpenAI API 合约中的 verbosity 值。
   */
  verbosity?: Verbosity;
}

/**
 * @title Response Usage 数据结构
 * @description OpenAI API 合约中的 Response Usage 结构定义。
 */
export type ResponseUsage = {
  /**
   * @title input tokens 值
   * @description OpenAI API 合约中的 input tokens 值。
   */
  input_tokens: number;
  /**
   * @title input tokens details 值
   * @description OpenAI API 合约中的 input tokens details 值。
   */
  input_tokens_details: {
    /**
     * @title cache write tokens 值
     * @description OpenAI API 合约中的 cache write tokens 值。
     */
    cache_write_tokens: number;
    /**
     * @title cached tokens 值
     * @description OpenAI API 合约中的 cached tokens 值。
     */
    cached_tokens: number
  };
  /**
   * @title output tokens 值
   * @description OpenAI API 合约中的 output tokens 值。
   */
  output_tokens: number;
  /**
   * @title output tokens details 值
   * @description OpenAI API 合约中的 output tokens details 值。
   */
  output_tokens_details: {
    /**
     * @title reasoning tokens 值
     * @description OpenAI API 合约中的 reasoning tokens 值。
     */
    reasoning_tokens: number
  };
  /**
   * @title total tokens 值
   * @description OpenAI API 合约中的 total tokens 值。
   */
  total_tokens: number;
}

/**
 * @title Response Web Search Call Completed Event 数据结构
 * @description OpenAI API 合约中的 Response Web Search Call Completed Event 结构定义。
 */
export type ResponseWebSearchCallCompletedEvent = {
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.web_search_call.completed';
}

/**
 * @title Response Web Search Call In Progress Event 数据结构
 * @description OpenAI API 合约中的 Response Web Search Call In Progress Event 结构定义。
 */
export type ResponseWebSearchCallInProgressEvent = {
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.web_search_call.in_progress';
}

/**
 * @title Response Web Search Call Searching Event 数据结构
 * @description OpenAI API 合约中的 Response Web Search Call Searching Event 结构定义。
 */
export type ResponseWebSearchCallSearchingEvent = {
  /**
   * @title item id 值
   * @description OpenAI API 合约中的 item id 值。
   */
  item_id: string;
  /**
   * @title output index 值
   * @description OpenAI API 合约中的 output index 值。
   */
  output_index: number;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.web_search_call.searching';
}

/**
 * @title Response Ws Error 数据结构
 * @description OpenAI API 合约中的 Response Ws Error 结构定义。
 */
export type ResponseWsError = {
  /**
   * @title error 值
   * @description OpenAI API 合约中的 error 值。
   */
  error: ErrorPayload;
  /**
   * @title sequence number 值
   * @description OpenAI API 合约中的 sequence number 值。
   */
  sequence_number?: number;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: number;
  /**
   * @title stream id 值
   * @description OpenAI API 合约中的 stream id 值。
   */
  stream_id?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'error';
}

/**
 * @title Responses Client Event 数据结构
 * @description OpenAI API 合约中的 Responses Client Event 结构定义。
 */
export type ResponsesClientEvent = any

/**
 * @title Responses Client Event Response Create 数据结构
 * @description OpenAI API 合约中的 Responses Client Event Response Create 结构定义。
 */
export type ResponsesClientEventResponseCreate = any

/**
 * @title Responses Server Event 数据结构
 * @description OpenAI API 合约中的 Responses Server Event 结构定义。
 */
export type ResponsesServerEvent = any

/**
 * @title Responses Web Socket Stream Event 数据结构
 * @description OpenAI API 合约中的 Responses Web Socket Stream Event 结构定义。
 */
export type ResponsesWebSocketStreamEvent = any

/**
 * @title Role 数据结构
 * @description OpenAI API 合约中的 Role 结构定义。
 */
export type Role = {
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'role';
  /**
   * @title permissions 值
   * @description OpenAI API 合约中的 permissions 值。
   */
  permissions: Array<string>;
  /**
   * @title predefined role 值
   * @description OpenAI API 合约中的 predefined role 值。
   */
  predefined_role: boolean;
  /**
   * @title resource type 值
   * @description OpenAI API 合约中的 resource type 值。
   */
  resource_type: string;
}

/**
 * @title Role Deleted Resource 数据结构
 * @description OpenAI API 合约中的 Role Deleted Resource 结构定义。
 */
export type RoleDeletedResource = {
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
  object: 'role.deleted';
}

/**
 * @title Role List Resource 数据结构
 * @description OpenAI API 合约中的 Role List Resource 结构定义。
 */
export type RoleListResource = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<AssignedRoleDetails>;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title next 值
   * @description OpenAI API 合约中的 next 值。
   */
  next: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Run Completion Usage 数据结构
 * @description OpenAI API 合约中的 Run Completion Usage 结构定义。
 */
export type RunCompletionUsage = any

/**
 * @title Run Grader Request 数据结构
 * @description OpenAI API 合约中的 Run Grader Request 结构定义。
 */
export type RunGraderRequest = {
  /**
   * @title grader 值
   * @description OpenAI API 合约中的 grader 值。
   */
  grader: any;
  /**
   * @title item 值
   * @description OpenAI API 合约中的 item 值。
   */
  item?: any;
  /**
   * @title model sample 值
   * @description OpenAI API 合约中的 model sample 值。
   */
  model_sample: string;
}

/**
 * @title Run Grader Response 数据结构
 * @description OpenAI API 合约中的 Run Grader Response 结构定义。
 */
export type RunGraderResponse = {
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata: {
    /**
     * @title errors 值
     * @description OpenAI API 合约中的 errors 值。
     */
    errors: {
      /**
       * @title formula parse error 值
       * @description OpenAI API 合约中的 formula parse error 值。
       */
      formula_parse_error: boolean;
      /**
       * @title invalid variable error 值
       * @description OpenAI API 合约中的 invalid variable error 值。
       */
      invalid_variable_error: boolean;
      /**
       * @title model grader parse error 值
       * @description OpenAI API 合约中的 model grader parse error 值。
       */
      model_grader_parse_error: boolean;
      /**
       * @title model grader refusal error 值
       * @description OpenAI API 合约中的 model grader refusal error 值。
       */
      model_grader_refusal_error: boolean;
      /**
       * @title model grader server error 值
       * @description OpenAI API 合约中的 model grader server error 值。
       */
      model_grader_server_error: boolean;
      /**
       * @title model grader server error details 值
       * @description OpenAI API 合约中的 model grader server error details 值。
       */
      model_grader_server_error_details: any;
      /**
       * @title other error 值
       * @description OpenAI API 合约中的 other error 值。
       */
      other_error: boolean;
      /**
       * @title python grader runtime error 值
       * @description OpenAI API 合约中的 python grader runtime error 值。
       */
      python_grader_runtime_error: boolean;
      /**
       * @title python grader runtime error details 值
       * @description OpenAI API 合约中的 python grader runtime error details 值。
       */
      python_grader_runtime_error_details: any;
      /**
       * @title python grader server error 值
       * @description OpenAI API 合约中的 python grader server error 值。
       */
      python_grader_server_error: boolean;
      /**
       * @title python grader server error type 值
       * @description OpenAI API 合约中的 python grader server error type 值。
       */
      python_grader_server_error_type: any;
      /**
       * @title sample parse error 值
       * @description OpenAI API 合约中的 sample parse error 值。
       */
      sample_parse_error: boolean;
      /**
       * @title truncated observation error 值
       * @description OpenAI API 合约中的 truncated observation error 值。
       */
      truncated_observation_error: boolean;
      /**
       * @title unresponsive reward error 值
       * @description OpenAI API 合约中的 unresponsive reward error 值。
       */
      unresponsive_reward_error: boolean
    };
    /**
     * @title execution time 值
     * @description OpenAI API 合约中的 execution time 值。
     */
    execution_time: number;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name: string;
    /**
     * @title sampled model name 值
     * @description OpenAI API 合约中的 sampled model name 值。
     */
    sampled_model_name: any;
    /**
     * @title scores 值
     * @description OpenAI API 合约中的 scores 值。
     */
    scores: Record<any, any>;
    /**
     * @title token usage 值
     * @description OpenAI API 合约中的 token usage 值。
     */
    token_usage: any;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type: string
  };
  /**
   * @title model grader token usage per model 值
   * @description OpenAI API 合约中的 model grader token usage per model 值。
   */
  model_grader_token_usage_per_model: Record<any, any>;
  /**
   * @title reward 值
   * @description OpenAI API 合约中的 reward 值。
   */
  reward: number;
  /**
   * @title sub rewards 值
   * @description OpenAI API 合约中的 sub rewards 值。
   */
  sub_rewards: Record<any, any>;
}

/**
 * @title Run Object 数据结构
 * @description OpenAI API 合约中的 Run Object 结构定义。
 */
export type RunObject = {
  /**
   * @title assistant id 值
   * @description OpenAI API 合约中的 assistant id 值。
   */
  assistant_id: string;
  /**
   * @title cancelled at 值
   * @description OpenAI API 合约中的 cancelled at 值。
   */
  cancelled_at: number;
  /**
   * @title completed at 值
   * @description OpenAI API 合约中的 completed at 值。
   */
  completed_at: number;
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title expires at 值
   * @description OpenAI API 合约中的 expires at 值。
   */
  expires_at: number;
  /**
   * @title failed at 值
   * @description OpenAI API 合约中的 failed at 值。
   */
  failed_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title incomplete details 值
   * @description OpenAI API 合约中的 incomplete details 值。
   */
  incomplete_details: {
    /**
     * @title reason 值
     * @description OpenAI API 合约中的 reason 值。
     */
    reason?: 'max_completion_tokens' | 'max_prompt_tokens'
  };
  /**
   * @title instructions 值
   * @description OpenAI API 合约中的 instructions 值。
   */
  instructions: string;
  /**
   * @title last error 值
   * @description OpenAI API 合约中的 last error 值。
   */
  last_error: {
    /**
     * @title code 值
     * @description OpenAI API 合约中的 code 值。
     */
    code: 'server_error' | 'rate_limit_exceeded' | 'invalid_prompt';
    /**
     * @title message 值
     * @description OpenAI API 合约中的 message 值。
     */
    message: string
  };
  /**
   * @title max completion tokens 值
   * @description OpenAI API 合约中的 max completion tokens 值。
   */
  max_completion_tokens: number;
  /**
   * @title max prompt tokens 值
   * @description OpenAI API 合约中的 max prompt tokens 值。
   */
  max_prompt_tokens: number;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata: Metadata;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'thread.run';
  /**
   * @title parallel tool calls 值
   * @description OpenAI API 合约中的 parallel tool calls 值。
   */
  parallel_tool_calls: ParallelToolCalls;
  /**
   * @title required action 值
   * @description OpenAI API 合约中的 required action 值。
   */
  required_action: {
    /**
     * @title submit tool outputs 值
     * @description OpenAI API 合约中的 submit tool outputs 值。
     */
    submit_tool_outputs: {
      /**
       * @title tool calls 值
       * @description OpenAI API 合约中的 tool calls 值。
       */
      tool_calls: Array<RunToolCallObject>
    };
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type: 'submit_tool_outputs'
  };
  /**
   * @title response format 值
   * @description OpenAI API 合约中的 response format 值。
   */
  response_format: AssistantsApiResponseFormatOption;
  /**
   * @title started at 值
   * @description OpenAI API 合约中的 started at 值。
   */
  started_at: number;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'queued' | 'in_progress' | 'requires_action' | 'cancelling' | 'cancelled' | 'failed' | 'completed' | 'incomplete' | 'expired';
  /**
   * @title temperature 值
   * @description OpenAI API 合约中的 temperature 值。
   */
  temperature?: number;
  /**
   * @title thread id 值
   * @description OpenAI API 合约中的 thread id 值。
   */
  thread_id: string;
  /**
   * @title tool choice 值
   * @description OpenAI API 合约中的 tool choice 值。
   */
  tool_choice: any;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools: Array<any>;
  /**
   * @title top p 值
   * @description OpenAI API 合约中的 top p 值。
   */
  top_p?: number;
  /**
   * @title truncation strategy 值
   * @description OpenAI API 合约中的 truncation strategy 值。
   */
  truncation_strategy: any;
  /**
   * @title usage 值
   * @description OpenAI API 合约中的 usage 值。
   */
  usage: RunCompletionUsage;
}

/**
 * @title Run Step Completion Usage 数据结构
 * @description OpenAI API 合约中的 Run Step Completion Usage 结构定义。
 */
export type RunStepCompletionUsage = any

/**
 * @title Run Step Delta Object 数据结构
 * @description OpenAI API 合约中的 Run Step Delta Object 结构定义。
 */
export type RunStepDeltaObject = {
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: {
    /**
     * @title step details 值
     * @description OpenAI API 合约中的 step details 值。
     */
    step_details?: any
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'thread.run.step.delta';
}

/**
 * @title Run Step Delta Step Details Message Creation Object 数据结构
 * @description OpenAI API 合约中的 Run Step Delta Step Details Message Creation Object 结构定义。
 */
export type RunStepDeltaStepDetailsMessageCreationObject = {
  /**
   * @title message creation 值
   * @description OpenAI API 合约中的 message creation 值。
   */
  message_creation?: {
    /**
     * @title message id 值
     * @description OpenAI API 合约中的 message id 值。
     */
    message_id?: string
  };
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'message_creation';
}

/**
 * @title Run Step Delta Step Details Tool Calls Code Object 数据结构
 * @description OpenAI API 合约中的 Run Step Delta Step Details Tool Calls Code Object 结构定义。
 */
export type RunStepDeltaStepDetailsToolCallsCodeObject = {
  /**
   * @title code interpreter 值
   * @description OpenAI API 合约中的 code interpreter 值。
   */
  code_interpreter?: {
    /**
     * @title input 值
     * @description OpenAI API 合约中的 input 值。
     */
    input?: string;
    /**
     * @title outputs 值
     * @description OpenAI API 合约中的 outputs 值。
     */
    outputs?: Array<any>
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title index 值
   * @description OpenAI API 合约中的 index 值。
   */
  index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'code_interpreter';
}

/**
 * @title Run Step Delta Step Details Tool Calls Code Output Image Object 数据结构
 * @description OpenAI API 合约中的 Run Step Delta Step Details Tool Calls Code Output Image Object 结构定义。
 */
export type RunStepDeltaStepDetailsToolCallsCodeOutputImageObject = {
  /**
   * @title image 值
   * @description OpenAI API 合约中的 image 值。
   */
  image?: {
    /**
     * @title file id 值
     * @description OpenAI API 合约中的 file id 值。
     */
    file_id?: string
  };
  /**
   * @title index 值
   * @description OpenAI API 合约中的 index 值。
   */
  index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'image';
}

/**
 * @title Run Step Delta Step Details Tool Calls Code Output Logs Object 数据结构
 * @description OpenAI API 合约中的 Run Step Delta Step Details Tool Calls Code Output Logs Object 结构定义。
 */
export type RunStepDeltaStepDetailsToolCallsCodeOutputLogsObject = {
  /**
   * @title index 值
   * @description OpenAI API 合约中的 index 值。
   */
  index: number;
  /**
   * @title logs 值
   * @description OpenAI API 合约中的 logs 值。
   */
  logs?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'logs';
}

/**
 * @title Run Step Delta Step Details Tool Calls File Search Object 数据结构
 * @description OpenAI API 合约中的 Run Step Delta Step Details Tool Calls File Search Object 结构定义。
 */
export type RunStepDeltaStepDetailsToolCallsFileSearchObject = {
  /**
   * @title file search 值
   * @description OpenAI API 合约中的 file search 值。
   */
  file_search: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title index 值
   * @description OpenAI API 合约中的 index 值。
   */
  index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file_search';
}

/**
 * @title Run Step Delta Step Details Tool Calls Function Object 数据结构
 * @description OpenAI API 合约中的 Run Step Delta Step Details Tool Calls Function Object 结构定义。
 */
export type RunStepDeltaStepDetailsToolCallsFunctionObject = {
  /**
   * @title function 值
   * @description OpenAI API 合约中的 function 值。
   */
  function?: {
    /**
     * @title arguments 值
     * @description OpenAI API 合约中的 arguments 值。
     */
    arguments?: string;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name?: string;
    /**
     * @title output 值
     * @description OpenAI API 合约中的 output 值。
     */
    output?: any
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: string;
  /**
   * @title index 值
   * @description OpenAI API 合约中的 index 值。
   */
  index: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'function';
}

/**
 * @title Run Step Delta Step Details Tool Calls Object 数据结构
 * @description OpenAI API 合约中的 Run Step Delta Step Details Tool Calls Object 结构定义。
 */
export type RunStepDeltaStepDetailsToolCallsObject = {
  /**
   * @title tool calls 值
   * @description OpenAI API 合约中的 tool calls 值。
   */
  tool_calls?: Array<any>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'tool_calls';
}

/**
 * @title Run Step Details Message Creation Object 数据结构
 * @description OpenAI API 合约中的 Run Step Details Message Creation Object 结构定义。
 */
export type RunStepDetailsMessageCreationObject = {
  /**
   * @title message creation 值
   * @description OpenAI API 合约中的 message creation 值。
   */
  message_creation: {
    /**
     * @title message id 值
     * @description OpenAI API 合约中的 message id 值。
     */
    message_id: string
  };
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'message_creation';
}

/**
 * @title Run Step Details Tool Calls Code Object 数据结构
 * @description OpenAI API 合约中的 Run Step Details Tool Calls Code Object 结构定义。
 */
export type RunStepDetailsToolCallsCodeObject = {
  /**
   * @title code interpreter 值
   * @description OpenAI API 合约中的 code interpreter 值。
   */
  code_interpreter: {
    /**
     * @title input 值
     * @description OpenAI API 合约中的 input 值。
     */
    input: string;
    /**
     * @title outputs 值
     * @description OpenAI API 合约中的 outputs 值。
     */
    outputs: Array<any>
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'code_interpreter';
}

/**
 * @title Run Step Details Tool Calls Code Output Image Object 数据结构
 * @description OpenAI API 合约中的 Run Step Details Tool Calls Code Output Image Object 结构定义。
 */
export type RunStepDetailsToolCallsCodeOutputImageObject = {
  /**
   * @title image 值
   * @description OpenAI API 合约中的 image 值。
   */
  image: {
    /**
     * @title file id 值
     * @description OpenAI API 合约中的 file id 值。
     */
    file_id: string
  };
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'image';
}

/**
 * @title Run Step Details Tool Calls Code Output Logs Object 数据结构
 * @description OpenAI API 合约中的 Run Step Details Tool Calls Code Output Logs Object 结构定义。
 */
export type RunStepDetailsToolCallsCodeOutputLogsObject = {
  /**
   * @title logs 值
   * @description OpenAI API 合约中的 logs 值。
   */
  logs: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'logs';
}

/**
 * @title Run Step Details Tool Calls File Search Object 数据结构
 * @description OpenAI API 合约中的 Run Step Details Tool Calls File Search Object 结构定义。
 */
export type RunStepDetailsToolCallsFileSearchObject = {
  /**
   * @title file search 值
   * @description OpenAI API 合约中的 file search 值。
   */
  file_search: {
    /**
     * @title ranking options 值
     * @description OpenAI API 合约中的 ranking options 值。
     */
    ranking_options?: RunStepDetailsToolCallsFileSearchRankingOptionsObject;
    /**
     * @title results 值
     * @description OpenAI API 合约中的 results 值。
     */
    results?: Array<RunStepDetailsToolCallsFileSearchResultObject>
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file_search';
}

/**
 * @title Run Step Details Tool Calls File Search Ranking Options Object 数据结构
 * @description OpenAI API 合约中的 Run Step Details Tool Calls File Search Ranking Options Object 结构定义。
 */
export type RunStepDetailsToolCallsFileSearchRankingOptionsObject = {
  /**
   * @title ranker 值
   * @description OpenAI API 合约中的 ranker 值。
   */
  ranker: FileSearchRanker;
  /**
   * @title score threshold 值
   * @description OpenAI API 合约中的 score threshold 值。
   */
  score_threshold: number;
}

/**
 * @title Run Step Details Tool Calls File Search Result Object 数据结构
 * @description OpenAI API 合约中的 Run Step Details Tool Calls File Search Result Object 结构定义。
 */
export type RunStepDetailsToolCallsFileSearchResultObject = {
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content?: Array<{
    /**
     * @title text 值
     * @description OpenAI API 合约中的 text 值。
     */
    text?: string;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: 'text'
  }>;
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id: string;
  /**
   * @title file name 值
   * @description OpenAI API 合约中的 file name 值。
   */
  file_name: string;
  /**
   * @title score 值
   * @description OpenAI API 合约中的 score 值。
   */
  score: number;
}

/**
 * @title Run Step Details Tool Calls Function Object 数据结构
 * @description OpenAI API 合约中的 Run Step Details Tool Calls Function Object 结构定义。
 */
export type RunStepDetailsToolCallsFunctionObject = {
  /**
   * @title function 值
   * @description OpenAI API 合约中的 function 值。
   */
  function: {
    /**
     * @title arguments 值
     * @description OpenAI API 合约中的 arguments 值。
     */
    arguments: string;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name: string;
    /**
     * @title output 值
     * @description OpenAI API 合约中的 output 值。
     */
    output: any
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'function';
}

/**
 * @title Run Step Details Tool Calls Object 数据结构
 * @description OpenAI API 合约中的 Run Step Details Tool Calls Object 结构定义。
 */
export type RunStepDetailsToolCallsObject = {
  /**
   * @title tool calls 值
   * @description OpenAI API 合约中的 tool calls 值。
   */
  tool_calls: Array<any>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'tool_calls';
}

/**
 * @title Run Step Object 数据结构
 * @description OpenAI API 合约中的 Run Step Object 结构定义。
 */
export type RunStepObject = {
  /**
   * @title assistant id 值
   * @description OpenAI API 合约中的 assistant id 值。
   */
  assistant_id: string;
  /**
   * @title cancelled at 值
   * @description OpenAI API 合约中的 cancelled at 值。
   */
  cancelled_at: any;
  /**
   * @title completed at 值
   * @description OpenAI API 合约中的 completed at 值。
   */
  completed_at: any;
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title expired at 值
   * @description OpenAI API 合约中的 expired at 值。
   */
  expired_at: any;
  /**
   * @title failed at 值
   * @description OpenAI API 合约中的 failed at 值。
   */
  failed_at: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title last error 值
   * @description OpenAI API 合约中的 last error 值。
   */
  last_error: any;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata: Metadata;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'thread.run.step';
  /**
   * @title run id 值
   * @description OpenAI API 合约中的 run id 值。
   */
  run_id: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'in_progress' | 'cancelled' | 'failed' | 'completed' | 'expired';
  /**
   * @title step details 值
   * @description OpenAI API 合约中的 step details 值。
   */
  step_details: any;
  /**
   * @title thread id 值
   * @description OpenAI API 合约中的 thread id 值。
   */
  thread_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'message_creation' | 'tool_calls';
  /**
   * @title usage 值
   * @description OpenAI API 合约中的 usage 值。
   */
  usage: RunStepCompletionUsage;
}

/**
 * @title Run Step Stream Event 数据结构
 * @description OpenAI API 合约中的 Run Step Stream Event 结构定义。
 */
export type RunStepStreamEvent = any

/**
 * @title Run Stream Event 数据结构
 * @description OpenAI API 合约中的 Run Stream Event 结构定义。
 */
export type RunStreamEvent = any

/**
 * @title Run Tool Call Object 数据结构
 * @description OpenAI API 合约中的 Run Tool Call Object 结构定义。
 */
export type RunToolCallObject = {
  /**
   * @title function 值
   * @description OpenAI API 合约中的 function 值。
   */
  function: {
    /**
     * @title arguments 值
     * @description OpenAI API 合约中的 arguments 值。
     */
    arguments: string;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name: string
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'function';
}

/**
 * @title Screenshot Param 数据结构
 * @description OpenAI API 合约中的 Screenshot Param 结构定义。
 */
export type ScreenshotParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'screenshot';
}

/**
 * @title Scroll Param 数据结构
 * @description OpenAI API 合约中的 Scroll Param 结构定义。
 */
export type ScrollParam = {
  /**
   * @title keys 值
   * @description OpenAI API 合约中的 keys 值。
   */
  keys?: any;
  /**
   * @title scroll x 值
   * @description OpenAI API 合约中的 scroll x 值。
   */
  scroll_x: number;
  /**
   * @title scroll y 值
   * @description OpenAI API 合约中的 scroll y 值。
   */
  scroll_y: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'scroll';
  /**
   * @title x 值
   * @description OpenAI API 合约中的 x 值。
   */
  x: number;
  /**
   * @title y 值
   * @description OpenAI API 合约中的 y 值。
   */
  y: number;
}

/**
 * @title Search Content Type 数据结构
 * @description OpenAI API 合约中的 Search Content Type 结构定义。
 */
export type SearchContentType = 'text' | 'image'

/**
 * @title Search Context Size 数据结构
 * @description OpenAI API 合约中的 Search Context Size 结构定义。
 */
export type SearchContextSize = 'low' | 'medium' | 'high'

/**
 * @title Service Account Api Key Body 数据结构
 * @description OpenAI API 合约中的 Service Account Api Key Body 结构定义。
 */
export type ServiceAccountApiKeyBody = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.project.service_account.api_key';
  /**
   * @title value 值
   * @description OpenAI API 合约中的 value 值。
   */
  value: string;
}

/**
 * @title Service Tier 数据结构
 * @description OpenAI API 合约中的 Service Tier 结构定义。
 */
export type ServiceTier = any

/**
 * @title Service Tier Enum 数据结构
 * @description OpenAI API 合约中的 Service Tier Enum 结构定义。
 */
export type ServiceTierEnum = 'auto' | 'default' | 'fast' | 'flex' | 'priority'

/**
 * @title Service Tier Responses 数据结构
 * @description OpenAI API 合约中的 Service Tier Responses 结构定义。
 */
export type ServiceTierResponses = any

/**
 * @title Set Default Skill Version Body 数据结构
 * @description OpenAI API 合约中的 Set Default Skill Version Body 结构定义。
 */
export type SetDefaultSkillVersionBody = {
  /**
   * @title default version 值
   * @description OpenAI API 合约中的 default version 值。
   */
  default_version: string;
}

/**
 * @title Shell Call Output Delta 数据结构
 * @description OpenAI API 合约中的 Shell Call Output Delta 结构定义。
 */
export type ShellCallOutputDelta = {
  /**
   * @title stderr 值
   * @description OpenAI API 合约中的 stderr 值。
   */
  stderr?: string;
  /**
   * @title stdout 值
   * @description OpenAI API 合约中的 stdout 值。
   */
  stdout?: string;
}

/**
 * @title Skill List Resource 数据结构
 * @description OpenAI API 合约中的 Skill List Resource 结构定义。
 */
export type SkillListResource = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<SkillResource>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id: any;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Skill Reference Param 数据结构
 * @description OpenAI API 合约中的 Skill Reference Param 结构定义。
 */
export type SkillReferenceParam = {
  /**
   * @title skill id 值
   * @description OpenAI API 合约中的 skill id 值。
   */
  skill_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'skill_reference';
  /**
   * @title version 值
   * @description OpenAI API 合约中的 version 值。
   */
  version?: string;
}

/**
 * @title Skill Resource 数据结构
 * @description OpenAI API 合约中的 Skill Resource 结构定义。
 */
export type SkillResource = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title default version 值
   * @description OpenAI API 合约中的 default version 值。
   */
  default_version: string;
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title latest version 值
   * @description OpenAI API 合约中的 latest version 值。
   */
  latest_version: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'skill';
}

/**
 * @title Skill Version List Resource 数据结构
 * @description OpenAI API 合约中的 Skill Version List Resource 结构定义。
 */
export type SkillVersionListResource = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<SkillVersionResource>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id: any;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Skill Version Resource 数据结构
 * @description OpenAI API 合约中的 Skill Version Resource 结构定义。
 */
export type SkillVersionResource = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'skill.version';
  /**
   * @title skill id 值
   * @description OpenAI API 合约中的 skill id 值。
   */
  skill_id: string;
  /**
   * @title version 值
   * @description OpenAI API 合约中的 version 值。
   */
  version: string;
}

/**
 * @title Specific Apply Patch Param 数据结构
 * @description OpenAI API 合约中的 Specific Apply Patch Param 结构定义。
 */
export type SpecificApplyPatchParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'apply_patch';
}

/**
 * @title Specific Function Shell Param 数据结构
 * @description OpenAI API 合约中的 Specific Function Shell Param 结构定义。
 */
export type SpecificFunctionShellParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'shell';
}

/**
 * @title Specific Programmatic Tool Calling Param 数据结构
 * @description OpenAI API 合约中的 Specific Programmatic Tool Calling Param 结构定义。
 */
export type SpecificProgrammaticToolCallingParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'programmatic_tool_calling';
}

/**
 * @title Speech Audio Delta Event 数据结构
 * @description OpenAI API 合约中的 Speech Audio Delta Event 结构定义。
 */
export type SpeechAudioDeltaEvent = {
  /**
   * @title audio 值
   * @description OpenAI API 合约中的 audio 值。
   */
  audio: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'speech.audio.delta';
}

/**
 * @title Speech Audio Done Event 数据结构
 * @description OpenAI API 合约中的 Speech Audio Done Event 结构定义。
 */
export type SpeechAudioDoneEvent = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'speech.audio.done';
  /**
   * @title usage 值
   * @description OpenAI API 合约中的 usage 值。
   */
  usage: {
    /**
     * @title input tokens 值
     * @description OpenAI API 合约中的 input tokens 值。
     */
    input_tokens: number;
    /**
     * @title output tokens 值
     * @description OpenAI API 合约中的 output tokens 值。
     */
    output_tokens: number;
    /**
     * @title total tokens 值
     * @description OpenAI API 合约中的 total tokens 值。
     */
    total_tokens: number
  };
}

/**
 * @title Spend Alert Notification Channel 数据结构
 * @description OpenAI API 合约中的 Spend Alert Notification Channel 结构定义。
 */
export type SpendAlertNotificationChannel = {
  /**
   * @title recipients 值
   * @description OpenAI API 合约中的 recipients 值。
   */
  recipients: Array<string>;
  /**
   * @title subject prefix 值
   * @description OpenAI API 合约中的 subject prefix 值。
   */
  subject_prefix?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'email';
}

/**
 * @title Spend Limit Currency 数据结构
 * @description OpenAI API 合约中的 Spend Limit Currency 结构定义。
 */
export type SpendLimitCurrency = any

/**
 * @title Spend Limit Enforcement 数据结构
 * @description OpenAI API 合约中的 Spend Limit Enforcement 结构定义。
 */
export type SpendLimitEnforcement = {
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: SpendLimitEnforcementStatus;
}

/**
 * @title Spend Limit Enforcement Status 数据结构
 * @description OpenAI API 合约中的 Spend Limit Enforcement Status 结构定义。
 */
export type SpendLimitEnforcementStatus = any

/**
 * @title Spend Limit Interval 数据结构
 * @description OpenAI API 合约中的 Spend Limit Interval 结构定义。
 */
export type SpendLimitInterval = any

/**
 * @title Static Chunking Strategy 数据结构
 * @description OpenAI API 合约中的 Static Chunking Strategy 结构定义。
 */
export type StaticChunkingStrategy = {
  /**
   * @title chunk overlap tokens 值
   * @description OpenAI API 合约中的 chunk overlap tokens 值。
   */
  chunk_overlap_tokens: number;
  /**
   * @title max chunk size tokens 值
   * @description OpenAI API 合约中的 max chunk size tokens 值。
   */
  max_chunk_size_tokens: number;
}

/**
 * @title Static Chunking Strategy Request Param 数据结构
 * @description OpenAI API 合约中的 Static Chunking Strategy Request Param 结构定义。
 */
export type StaticChunkingStrategyRequestParam = {
  /**
   * @title static 值
   * @description OpenAI API 合约中的 static 值。
   */
  static: StaticChunkingStrategy;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'static';
}

/**
 * @title Static Chunking Strategy Response Param 数据结构
 * @description OpenAI API 合约中的 Static Chunking Strategy Response Param 结构定义。
 */
export type StaticChunkingStrategyResponseParam = {
  /**
   * @title static 值
   * @description OpenAI API 合约中的 static 值。
   */
  static: StaticChunkingStrategy;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'static';
}

/**
 * @title Stop Configuration 数据结构
 * @description OpenAI API 合约中的 Stop Configuration 结构定义。
 */
export type StopConfiguration = any

/**
 * @title Submit Tool Outputs Run Request 数据结构
 * @description OpenAI API 合约中的 Submit Tool Outputs Run Request 结构定义。
 */
export type SubmitToolOutputsRunRequest = {
  /**
   * @title stream 值
   * @description OpenAI API 合约中的 stream 值。
   */
  stream?: any;
  /**
   * @title tool outputs 值
   * @description OpenAI API 合约中的 tool outputs 值。
   */
  tool_outputs: Array<{
    /**
     * @title output 值
     * @description OpenAI API 合约中的 output 值。
     */
    output?: string;
    /**
     * @title tool call id 值
     * @description OpenAI API 合约中的 tool call id 值。
     */
    tool_call_id?: string
  }>;
}

/**
 * @title Summary Text Content 数据结构
 * @description OpenAI API 合约中的 Summary Text Content 结构定义。
 */
export type SummaryTextContent = {
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'summary_text';
}

/**
 * @title Synth IDProvenance Result 数据结构
 * @description OpenAI API 合约中的 Synth IDProvenance Result 结构定义。
 */
export type SynthIDProvenanceResult = {
  /**
   * @title generated at 值
   * @description OpenAI API 合约中的 generated at 值。
   */
  generated_at: any;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: any;
  /**
   * @title outcome 值
   * @description OpenAI API 合约中的 outcome 值。
   */
  outcome: ProvenanceDetectionResultApi;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'synthid';
}

/**
 * @title Task Group Item 数据结构
 * @description OpenAI API 合约中的 Task Group Item 结构定义。
 */
export type TaskGroupItem = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'chatkit.thread_item';
  /**
   * @title tasks 值
   * @description OpenAI API 合约中的 tasks 值。
   */
  tasks: Array<TaskGroupTask>;
  /**
   * @title thread id 值
   * @description OpenAI API 合约中的 thread id 值。
   */
  thread_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'chatkit.task_group';
}

/**
 * @title Task Group Task 数据结构
 * @description OpenAI API 合约中的 Task Group Task 结构定义。
 */
export type TaskGroupTask = {
  /**
   * @title heading 值
   * @description OpenAI API 合约中的 heading 值。
   */
  heading: any;
  /**
   * @title summary 值
   * @description OpenAI API 合约中的 summary 值。
   */
  summary: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: TaskType;
}

/**
 * @title Task Item 数据结构
 * @description OpenAI API 合约中的 Task Item 结构定义。
 */
export type TaskItem = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title heading 值
   * @description OpenAI API 合约中的 heading 值。
   */
  heading: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'chatkit.thread_item';
  /**
   * @title summary 值
   * @description OpenAI API 合约中的 summary 值。
   */
  summary: any;
  /**
   * @title task type 值
   * @description OpenAI API 合约中的 task type 值。
   */
  task_type: TaskType;
  /**
   * @title thread id 值
   * @description OpenAI API 合约中的 thread id 值。
   */
  thread_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'chatkit.task';
}

/**
 * @title Task Type 数据结构
 * @description OpenAI API 合约中的 Task Type 结构定义。
 */
export type TaskType = 'custom' | 'thought'

/**
 * @title Text Content 数据结构
 * @description OpenAI API 合约中的 Text Content 结构定义。
 */
export type TextContent = {
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'text';
}

/**
 * @title Text Response Format Configuration 数据结构
 * @description OpenAI API 合约中的 Text Response Format Configuration 结构定义。
 */
export type TextResponseFormatConfiguration = any

/**
 * @title Text Response Format Json Schema 数据结构
 * @description OpenAI API 合约中的 Text Response Format Json Schema 结构定义。
 */
export type TextResponseFormatJsonSchema = {
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description?: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title schema 值
   * @description OpenAI API 合约中的 schema 值。
   */
  schema: ResponseFormatJsonSchemaSchema;
  /**
   * @title strict 值
   * @description OpenAI API 合约中的 strict 值。
   */
  strict?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'json_schema';
}

/**
 * @title Thread Item 数据结构
 * @description OpenAI API 合约中的 Thread Item 结构定义。
 */
export type ThreadItem = any

/**
 * @title Thread Item List Resource 数据结构
 * @description OpenAI API 合约中的 Thread Item List Resource 结构定义。
 */
export type ThreadItemListResource = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<ThreadItem>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id: any;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Thread List Resource 数据结构
 * @description OpenAI API 合约中的 Thread List Resource 结构定义。
 */
export type ThreadListResource = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<ThreadResource>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id: any;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Thread Object 数据结构
 * @description OpenAI API 合约中的 Thread Object 结构定义。
 */
export type ThreadObject = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata: Metadata;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'thread';
  /**
   * @title tool resources 值
   * @description OpenAI API 合约中的 tool resources 值。
   */
  tool_resources: any;
}

/**
 * @title Thread Resource 数据结构
 * @description OpenAI API 合约中的 Thread Resource 结构定义。
 */
export type ThreadResource = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'chatkit.thread';
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: any;
  /**
   * @title title 值
   * @description OpenAI API 合约中的 title 值。
   */
  title: any;
  /**
   * @title user 值
   * @description OpenAI API 合约中的 user 值。
   */
  user: string;
}

/**
 * @title Thread Stream Event 数据结构
 * @description OpenAI API 合约中的 Thread Stream Event 结构定义。
 */
export type ThreadStreamEvent = any

/**
 * @title Toggle Certificates Request 数据结构
 * @description OpenAI API 合约中的 Toggle Certificates Request 结构定义。
 */
export type ToggleCertificatesRequest = {
  /**
   * @title certificate ids 值
   * @description OpenAI API 合约中的 certificate ids 值。
   */
  certificate_ids: Array<string>;
}

/**
 * @title Token Counts Body 数据结构
 * @description OpenAI API 合约中的 Token Counts Body 结构定义。
 */
export type TokenCountsBody = {
  /**
   * @title conversation 值
   * @description OpenAI API 合约中的 conversation 值。
   */
  conversation?: any;
  /**
   * @title input 值
   * @description OpenAI API 合约中的 input 值。
   */
  input?: any;
  /**
   * @title instructions 值
   * @description OpenAI API 合约中的 instructions 值。
   */
  instructions?: any;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title parallel tool calls 值
   * @description OpenAI API 合约中的 parallel tool calls 值。
   */
  parallel_tool_calls?: any;
  /**
   * @title personality 值
   * @description OpenAI API 合约中的 personality 值。
   */
  personality?: PersonalityEnum;
  /**
   * @title previous response id 值
   * @description OpenAI API 合约中的 previous response id 值。
   */
  previous_response_id?: any;
  /**
   * @title reasoning 值
   * @description OpenAI API 合约中的 reasoning 值。
   */
  reasoning?: any;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text?: any;
  /**
   * @title tool choice 值
   * @description OpenAI API 合约中的 tool choice 值。
   */
  tool_choice?: any;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools?: any;
  /**
   * @title truncation 值
   * @description OpenAI API 合约中的 truncation 值。
   */
  truncation?: TruncationEnum;
}

/**
 * @title Token Counts Resource 数据结构
 * @description OpenAI API 合约中的 Token Counts Resource 结构定义。
 */
export type TokenCountsResource = {
  /**
   * @title input tokens 值
   * @description OpenAI API 合约中的 input tokens 值。
   */
  input_tokens: number;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'response.input_tokens';
}

/**
 * @title Tool 数据结构
 * @description OpenAI API 合约中的 Tool 结构定义。
 */
export type Tool = any

/**
 * @title Tool Call Caller 数据结构
 * @description OpenAI API 合约中的 Tool Call Caller 结构定义。
 */
export type ToolCallCaller = any

/**
 * @title Tool Call Caller Param 数据结构
 * @description OpenAI API 合约中的 Tool Call Caller Param 结构定义。
 */
export type ToolCallCallerParam = any

/**
 * @title Tool Choice 数据结构
 * @description OpenAI API 合约中的 Tool Choice 结构定义。
 */
export type ToolChoice = {
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
}

/**
 * @title Tool Choice Allowed 数据结构
 * @description OpenAI API 合约中的 Tool Choice Allowed 结构定义。
 */
export type ToolChoiceAllowed = {
  /**
   * @title mode 值
   * @description OpenAI API 合约中的 mode 值。
   */
  mode: 'auto' | 'required';
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools: Array<Record<any, any>>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'allowed_tools';
}

/**
 * @title Tool Choice Custom 数据结构
 * @description OpenAI API 合约中的 Tool Choice Custom 结构定义。
 */
export type ToolChoiceCustom = {
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'custom';
}

/**
 * @title Tool Choice Function 数据结构
 * @description OpenAI API 合约中的 Tool Choice Function 结构定义。
 */
export type ToolChoiceFunction = {
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'function';
}

/**
 * @title Tool Choice MCP 数据结构
 * @description OpenAI API 合约中的 Tool Choice MCP 结构定义。
 */
export type ToolChoiceMCP = {
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: any;
  /**
   * @title server label 值
   * @description OpenAI API 合约中的 server label 值。
   */
  server_label: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'mcp';
}

/**
 * @title Tool Choice Options 数据结构
 * @description OpenAI API 合约中的 Tool Choice Options 结构定义。
 */
export type ToolChoiceOptions = 'none' | 'auto' | 'required'

/**
 * @title Tool Choice Param 数据结构
 * @description OpenAI API 合约中的 Tool Choice Param 结构定义。
 */
export type ToolChoiceParam = any

/**
 * @title Tool Choice Types 数据结构
 * @description OpenAI API 合约中的 Tool Choice Types 结构定义。
 */
export type ToolChoiceTypes = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'file_search' | 'web_search_preview' | 'computer' | 'computer_use_preview' | 'computer_use' | 'web_search_preview_2025_03_11' | 'image_generation' | 'code_interpreter';
}

/**
 * @title Tool Search Call 数据结构
 * @description OpenAI API 合约中的 Tool Search Call 结构定义。
 */
export type ToolSearchCall = {
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: any;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: any;
  /**
   * @title created by 值
   * @description OpenAI API 合约中的 created by 值。
   */
  created_by?: string;
  /**
   * @title execution 值
   * @description OpenAI API 合约中的 execution 值。
   */
  execution: ToolSearchExecutionType;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: FunctionCallStatus;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'tool_search_call';
}

/**
 * @title Tool Search Call Item Param 数据结构
 * @description OpenAI API 合约中的 Tool Search Call Item Param 结构定义。
 */
export type ToolSearchCallItemParam = {
  /**
   * @title arguments 值
   * @description OpenAI API 合约中的 arguments 值。
   */
  arguments: EmptyModelParam;
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id?: any;
  /**
   * @title execution 值
   * @description OpenAI API 合约中的 execution 值。
   */
  execution?: ToolSearchExecutionType;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'tool_search_call';
}

/**
 * @title Tool Search Execution Type 数据结构
 * @description OpenAI API 合约中的 Tool Search Execution Type 结构定义。
 */
export type ToolSearchExecutionType = 'server' | 'client'

/**
 * @title Tool Search Output 数据结构
 * @description OpenAI API 合约中的 Tool Search Output 结构定义。
 */
export type ToolSearchOutput = {
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id: any;
  /**
   * @title created by 值
   * @description OpenAI API 合约中的 created by 值。
   */
  created_by?: string;
  /**
   * @title execution 值
   * @description OpenAI API 合约中的 execution 值。
   */
  execution: ToolSearchExecutionType;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: FunctionCallOutputStatusEnum;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools: Array<Tool>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'tool_search_output';
}

/**
 * @title Tool Search Output Item Param 数据结构
 * @description OpenAI API 合约中的 Tool Search Output Item Param 结构定义。
 */
export type ToolSearchOutputItemParam = {
  /**
   * @title call id 值
   * @description OpenAI API 合约中的 call id 值。
   */
  call_id?: any;
  /**
   * @title execution 值
   * @description OpenAI API 合约中的 execution 值。
   */
  execution?: ToolSearchExecutionType;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id?: any;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status?: any;
  /**
   * @title tools 值
   * @description OpenAI API 合约中的 tools 值。
   */
  tools: Array<Tool>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'tool_search_output';
}

/**
 * @title Tool Search Tool Param 数据结构
 * @description OpenAI API 合约中的 Tool Search Tool Param 结构定义。
 */
export type ToolSearchToolParam = {
  /**
   * @title description 值
   * @description OpenAI API 合约中的 description 值。
   */
  description?: any;
  /**
   * @title execution 值
   * @description OpenAI API 合约中的 execution 值。
   */
  execution?: ToolSearchExecutionType;
  /**
   * @title parameters 值
   * @description OpenAI API 合约中的 parameters 值。
   */
  parameters?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'tool_search';
}

/**
 * @title Tools Array 数据结构
 * @description OpenAI API 合约中的 Tools Array 结构定义。
 */
export type ToolsArray = Array<Tool>

/**
 * @title Top Log Prob 数据结构
 * @description OpenAI API 合约中的 Top Log Prob 结构定义。
 */
export type TopLogProb = {
  /**
   * @title bytes 值
   * @description OpenAI API 合约中的 bytes 值。
   */
  bytes: Array<number>;
  /**
   * @title logprob 值
   * @description OpenAI API 合约中的 logprob 值。
   */
  logprob: number;
  /**
   * @title token 值
   * @description OpenAI API 合约中的 token 值。
   */
  token: string;
}

/**
 * @title Transcript Text Delta Event 数据结构
 * @description OpenAI API 合约中的 Transcript Text Delta Event 结构定义。
 */
export type TranscriptTextDeltaEvent = {
  /**
   * @title delta 值
   * @description OpenAI API 合约中的 delta 值。
   */
  delta: string;
  /**
   * @title logprobs 值
   * @description OpenAI API 合约中的 logprobs 值。
   */
  logprobs?: Array<{
    /**
     * @title bytes 值
     * @description OpenAI API 合约中的 bytes 值。
     */
    bytes?: Array<number>;
    /**
     * @title logprob 值
     * @description OpenAI API 合约中的 logprob 值。
     */
    logprob?: number;
    /**
     * @title token 值
     * @description OpenAI API 合约中的 token 值。
     */
    token?: string
  }>;
  /**
   * @title segment id 值
   * @description OpenAI API 合约中的 segment id 值。
   */
  segment_id?: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'transcript.text.delta';
}

/**
 * @title Transcript Text Done Event 数据结构
 * @description OpenAI API 合约中的 Transcript Text Done Event 结构定义。
 */
export type TranscriptTextDoneEvent = {
  /**
   * @title languages 值
   * @description OpenAI API 合约中的 languages 值。
   */
  languages?: Array<TranscriptionLanguage>;
  /**
   * @title logprobs 值
   * @description OpenAI API 合约中的 logprobs 值。
   */
  logprobs?: Array<{
    /**
     * @title bytes 值
     * @description OpenAI API 合约中的 bytes 值。
     */
    bytes?: Array<number>;
    /**
     * @title logprob 值
     * @description OpenAI API 合约中的 logprob 值。
     */
    logprob?: number;
    /**
     * @title token 值
     * @description OpenAI API 合约中的 token 值。
     */
    token?: string
  }>;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'transcript.text.done';
  /**
   * @title usage 值
   * @description OpenAI API 合约中的 usage 值。
   */
  usage?: TranscriptTextUsageTokens;
}

/**
 * @title Transcript Text Segment Event 数据结构
 * @description OpenAI API 合约中的 Transcript Text Segment Event 结构定义。
 */
export type TranscriptTextSegmentEvent = {
  /**
   * @title end 值
   * @description OpenAI API 合约中的 end 值。
   */
  end: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title speaker 值
   * @description OpenAI API 合约中的 speaker 值。
   */
  speaker: string;
  /**
   * @title start 值
   * @description OpenAI API 合约中的 start 值。
   */
  start: number;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'transcript.text.segment';
}

/**
 * @title Transcript Text Usage Duration 数据结构
 * @description OpenAI API 合约中的 Transcript Text Usage Duration 结构定义。
 */
export type TranscriptTextUsageDuration = {
  /**
   * @title seconds 值
   * @description OpenAI API 合约中的 seconds 值。
   */
  seconds: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'duration';
}

/**
 * @title Transcript Text Usage Tokens 数据结构
 * @description OpenAI API 合约中的 Transcript Text Usage Tokens 结构定义。
 */
export type TranscriptTextUsageTokens = {
  /**
   * @title input token details 值
   * @description OpenAI API 合约中的 input token details 值。
   */
  input_token_details?: {
    /**
     * @title audio tokens 值
     * @description OpenAI API 合约中的 audio tokens 值。
     */
    audio_tokens?: number;
    /**
     * @title text tokens 值
     * @description OpenAI API 合约中的 text tokens 值。
     */
    text_tokens?: number
  };
  /**
   * @title input tokens 值
   * @description OpenAI API 合约中的 input tokens 值。
   */
  input_tokens: number;
  /**
   * @title output tokens 值
   * @description OpenAI API 合约中的 output tokens 值。
   */
  output_tokens: number;
  /**
   * @title total tokens 值
   * @description OpenAI API 合约中的 total tokens 值。
   */
  total_tokens: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'tokens';
}

/**
 * @title Transcription Chunking Strategy 数据结构
 * @description OpenAI API 合约中的 Transcription Chunking Strategy 结构定义。
 */
export type TranscriptionChunkingStrategy = any

/**
 * @title Transcription Diarized Segment 数据结构
 * @description OpenAI API 合约中的 Transcription Diarized Segment 结构定义。
 */
export type TranscriptionDiarizedSegment = {
  /**
   * @title end 值
   * @description OpenAI API 合约中的 end 值。
   */
  end: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title speaker 值
   * @description OpenAI API 合约中的 speaker 值。
   */
  speaker: string;
  /**
   * @title start 值
   * @description OpenAI API 合约中的 start 值。
   */
  start: number;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'transcript.text.segment';
}

/**
 * @title Transcription Include 数据结构
 * @description OpenAI API 合约中的 Transcription Include 结构定义。
 */
export type TranscriptionInclude = 'logprobs'

/**
 * @title Transcription Language 数据结构
 * @description OpenAI API 合约中的 Transcription Language 结构定义。
 */
export type TranscriptionLanguage = {
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: string;
}

/**
 * @title Transcription Segment 数据结构
 * @description OpenAI API 合约中的 Transcription Segment 结构定义。
 */
export type TranscriptionSegment = {
  /**
   * @title avg logprob 值
   * @description OpenAI API 合约中的 avg logprob 值。
   */
  avg_logprob: number;
  /**
   * @title compression ratio 值
   * @description OpenAI API 合约中的 compression ratio 值。
   */
  compression_ratio: number;
  /**
   * @title end 值
   * @description OpenAI API 合约中的 end 值。
   */
  end: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: number;
  /**
   * @title no speech prob 值
   * @description OpenAI API 合约中的 no speech prob 值。
   */
  no_speech_prob: number;
  /**
   * @title seek 值
   * @description OpenAI API 合约中的 seek 值。
   */
  seek: number;
  /**
   * @title start 值
   * @description OpenAI API 合约中的 start 值。
   */
  start: number;
  /**
   * @title temperature 值
   * @description OpenAI API 合约中的 temperature 值。
   */
  temperature: number;
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title tokens 值
   * @description OpenAI API 合约中的 tokens 值。
   */
  tokens: Array<number>;
}

/**
 * @title Transcription Word 数据结构
 * @description OpenAI API 合约中的 Transcription Word 结构定义。
 */
export type TranscriptionWord = {
  /**
   * @title end 值
   * @description OpenAI API 合约中的 end 值。
   */
  end: number;
  /**
   * @title start 值
   * @description OpenAI API 合约中的 start 值。
   */
  start: number;
  /**
   * @title word 值
   * @description OpenAI API 合约中的 word 值。
   */
  word: string;
}

/**
 * @title Truncation Enum 数据结构
 * @description OpenAI API 合约中的 Truncation Enum 结构定义。
 */
export type TruncationEnum = 'auto' | 'disabled'

/**
 * @title Truncation Object 数据结构
 * @description OpenAI API 合约中的 Truncation Object 结构定义。
 */
export type TruncationObject = {
  /**
   * @title last messages 值
   * @description OpenAI API 合约中的 last messages 值。
   */
  last_messages?: any;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'auto' | 'last_messages';
}

/**
 * @title Type Param 数据结构
 * @description OpenAI API 合约中的 Type Param 结构定义。
 */
export type TypeParam = {
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'type';
}

/**
 * @title Update Conversation Body 数据结构
 * @description OpenAI API 合约中的 Update Conversation Body 结构定义。
 */
export type UpdateConversationBody = {
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata: Metadata;
}

/**
 * @title Update Group Body 数据结构
 * @description OpenAI API 合约中的 Update Group Body 结构定义。
 */
export type UpdateGroupBody = {
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
}

/**
 * @title Update Organization Data Retention Body 数据结构
 * @description OpenAI API 合约中的 Update Organization Data Retention Body 结构定义。
 */
export type UpdateOrganizationDataRetentionBody = {
  /**
   * @title retention type 值
   * @description OpenAI API 合约中的 retention type 值。
   */
  retention_type: 'zero_data_retention' | 'modified_abuse_monitoring' | 'enhanced_zero_data_retention' | 'enhanced_modified_abuse_monitoring';
}

/**
 * @title Update Organization Spend Limit Body 数据结构
 * @description OpenAI API 合约中的 Update Organization Spend Limit Body 结构定义。
 */
export type UpdateOrganizationSpendLimitBody = {
  /**
   * @title currency 值
   * @description OpenAI API 合约中的 currency 值。
   */
  currency: 'USD';
  /**
   * @title interval 值
   * @description OpenAI API 合约中的 interval 值。
   */
  interval: 'month';
  /**
   * @title threshold amount 值
   * @description OpenAI API 合约中的 threshold amount 值。
   */
  threshold_amount: number;
}

/**
 * @title Update Project Data Retention Body 数据结构
 * @description OpenAI API 合约中的 Update Project Data Retention Body 结构定义。
 */
export type UpdateProjectDataRetentionBody = {
  /**
   * @title retention type 值
   * @description OpenAI API 合约中的 retention type 值。
   */
  retention_type: 'organization_default' | 'none' | 'zero_data_retention' | 'modified_abuse_monitoring' | 'enhanced_zero_data_retention' | 'enhanced_modified_abuse_monitoring';
}

/**
 * @title Update Project Service Account Body 数据结构
 * @description OpenAI API 合约中的 Update Project Service Account Body 结构定义。
 */
export type UpdateProjectServiceAccountBody = {
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: string;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role?: 'member' | 'owner';
}

/**
 * @title Update Project Spend Limit Body 数据结构
 * @description OpenAI API 合约中的 Update Project Spend Limit Body 结构定义。
 */
export type UpdateProjectSpendLimitBody = {
  /**
   * @title currency 值
   * @description OpenAI API 合约中的 currency 值。
   */
  currency: 'USD';
  /**
   * @title interval 值
   * @description OpenAI API 合约中的 interval 值。
   */
  interval: 'month';
  /**
   * @title threshold amount 值
   * @description OpenAI API 合约中的 threshold amount 值。
   */
  threshold_amount: number;
}

/**
 * @title Update Vector Store File Attributes Request 数据结构
 * @description OpenAI API 合约中的 Update Vector Store File Attributes Request 结构定义。
 */
export type UpdateVectorStoreFileAttributesRequest = {
  /**
   * @title attributes 值
   * @description OpenAI API 合约中的 attributes 值。
   */
  attributes: VectorStoreFileAttributes;
}

/**
 * @title Update Vector Store Request 数据结构
 * @description OpenAI API 合约中的 Update Vector Store Request 结构定义。
 */
export type UpdateVectorStoreRequest = {
  /**
   * @title expires after 值
   * @description OpenAI API 合约中的 expires after 值。
   */
  expires_after?: any;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata?: Metadata;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: string;
}

/**
 * @title Update Voice Consent Request 数据结构
 * @description OpenAI API 合约中的 Update Voice Consent Request 结构定义。
 */
export type UpdateVoiceConsentRequest = {
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
}

/**
 * @title Upload 数据结构
 * @description OpenAI API 合约中的 Upload 结构定义。
 */
export type Upload = {
  /**
   * @title bytes 值
   * @description OpenAI API 合约中的 bytes 值。
   */
  bytes: number;
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title expires at 值
   * @description OpenAI API 合约中的 expires at 值。
   */
  expires_at: number;
  /**
   * @title file 值
   * @description OpenAI API 合约中的 file 值。
   */
  file?: any;
  /**
   * @title filename 值
   * @description OpenAI API 合约中的 filename 值。
   */
  filename: string;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'upload';
  /**
   * @title purpose 值
   * @description OpenAI API 合约中的 purpose 值。
   */
  purpose: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'pending' | 'completed' | 'cancelled' | 'expired';
}

/**
 * @title Upload Certificate Request 数据结构
 * @description OpenAI API 合约中的 Upload Certificate Request 结构定义。
 */
export type UploadCertificateRequest = {
  /**
   * @title certificate 值
   * @description OpenAI API 合约中的 certificate 值。
   */
  certificate: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: string;
}

/**
 * @title Upload Part 数据结构
 * @description OpenAI API 合约中的 Upload Part 结构定义。
 */
export type UploadPart = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'upload.part';
  /**
   * @title upload id 值
   * @description OpenAI API 合约中的 upload id 值。
   */
  upload_id: string;
}

/**
 * @title Url Annotation 数据结构
 * @description OpenAI API 合约中的 Url Annotation 结构定义。
 */
export type UrlAnnotation = {
  /**
   * @title source 值
   * @description OpenAI API 合约中的 source 值。
   */
  source: UrlAnnotationSource;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'url';
}

/**
 * @title Url Annotation Source 数据结构
 * @description OpenAI API 合约中的 Url Annotation Source 结构定义。
 */
export type UrlAnnotationSource = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'url';
  /**
   * @title url 值
   * @description OpenAI API 合约中的 url 值。
   */
  url: string;
}

/**
 * @title Url Citation Body 数据结构
 * @description OpenAI API 合约中的 Url Citation Body 结构定义。
 */
export type UrlCitationBody = {
  /**
   * @title end index 值
   * @description OpenAI API 合约中的 end index 值。
   */
  end_index: number;
  /**
   * @title start index 值
   * @description OpenAI API 合约中的 start index 值。
   */
  start_index: number;
  /**
   * @title title 值
   * @description OpenAI API 合约中的 title 值。
   */
  title: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'url_citation';
  /**
   * @title url 值
   * @description OpenAI API 合约中的 url 值。
   */
  url: string;
}

/**
 * @title Url Citation Param 数据结构
 * @description OpenAI API 合约中的 Url Citation Param 结构定义。
 */
export type UrlCitationParam = {
  /**
   * @title end index 值
   * @description OpenAI API 合约中的 end index 值。
   */
  end_index: number;
  /**
   * @title start index 值
   * @description OpenAI API 合约中的 start index 值。
   */
  start_index: number;
  /**
   * @title title 值
   * @description OpenAI API 合约中的 title 值。
   */
  title: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'url_citation';
  /**
   * @title url 值
   * @description OpenAI API 合约中的 url 值。
   */
  url: string;
}

/**
 * @title Usage Audio Speeches Result 数据结构
 * @description OpenAI API 合约中的 Usage Audio Speeches Result 结构定义。
 */
export type UsageAudioSpeechesResult = {
  /**
   * @title api key id 值
   * @description OpenAI API 合约中的 api key id 值。
   */
  api_key_id?: any;
  /**
   * @title characters 值
   * @description OpenAI API 合约中的 characters 值。
   */
  characters: number;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title num model requests 值
   * @description OpenAI API 合约中的 num model requests 值。
   */
  num_model_requests: number;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.usage.audio_speeches.result';
  /**
   * @title project id 值
   * @description OpenAI API 合约中的 project id 值。
   */
  project_id?: any;
  /**
   * @title user id 值
   * @description OpenAI API 合约中的 user id 值。
   */
  user_id?: any;
}

/**
 * @title Usage Audio Transcriptions Result 数据结构
 * @description OpenAI API 合约中的 Usage Audio Transcriptions Result 结构定义。
 */
export type UsageAudioTranscriptionsResult = {
  /**
   * @title api key id 值
   * @description OpenAI API 合约中的 api key id 值。
   */
  api_key_id?: any;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title num model requests 值
   * @description OpenAI API 合约中的 num model requests 值。
   */
  num_model_requests: number;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.usage.audio_transcriptions.result';
  /**
   * @title project id 值
   * @description OpenAI API 合约中的 project id 值。
   */
  project_id?: any;
  /**
   * @title seconds 值
   * @description OpenAI API 合约中的 seconds 值。
   */
  seconds: number;
  /**
   * @title user id 值
   * @description OpenAI API 合约中的 user id 值。
   */
  user_id?: any;
}

/**
 * @title Usage Code Interpreter Sessions Result 数据结构
 * @description OpenAI API 合约中的 Usage Code Interpreter Sessions Result 结构定义。
 */
export type UsageCodeInterpreterSessionsResult = {
  /**
   * @title num sessions 值
   * @description OpenAI API 合约中的 num sessions 值。
   */
  num_sessions: number;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.usage.code_interpreter_sessions.result';
  /**
   * @title project id 值
   * @description OpenAI API 合约中的 project id 值。
   */
  project_id?: any;
}

/**
 * @title Usage Completions Result 数据结构
 * @description OpenAI API 合约中的 Usage Completions Result 结构定义。
 */
export type UsageCompletionsResult = {
  /**
   * @title api key id 值
   * @description OpenAI API 合约中的 api key id 值。
   */
  api_key_id?: any;
  /**
   * @title batch 值
   * @description OpenAI API 合约中的 batch 值。
   */
  batch?: any;
  /**
   * @title input audio tokens 值
   * @description OpenAI API 合约中的 input audio tokens 值。
   */
  input_audio_tokens?: number;
  /**
   * @title input cache write tokens 值
   * @description OpenAI API 合约中的 input cache write tokens 值。
   */
  input_cache_write_tokens?: number;
  /**
   * @title input cached audio tokens 值
   * @description OpenAI API 合约中的 input cached audio tokens 值。
   */
  input_cached_audio_tokens?: number;
  /**
   * @title input cached image tokens 值
   * @description OpenAI API 合约中的 input cached image tokens 值。
   */
  input_cached_image_tokens?: number;
  /**
   * @title input cached text tokens 值
   * @description OpenAI API 合约中的 input cached text tokens 值。
   */
  input_cached_text_tokens?: number;
  /**
   * @title input cached tokens 值
   * @description OpenAI API 合约中的 input cached tokens 值。
   */
  input_cached_tokens?: number;
  /**
   * @title input image tokens 值
   * @description OpenAI API 合约中的 input image tokens 值。
   */
  input_image_tokens?: number;
  /**
   * @title input text tokens 值
   * @description OpenAI API 合约中的 input text tokens 值。
   */
  input_text_tokens?: number;
  /**
   * @title input tokens 值
   * @description OpenAI API 合约中的 input tokens 值。
   */
  input_tokens: number;
  /**
   * @title input uncached tokens 值
   * @description OpenAI API 合约中的 input uncached tokens 值。
   */
  input_uncached_tokens?: number;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title num model requests 值
   * @description OpenAI API 合约中的 num model requests 值。
   */
  num_model_requests: number;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.usage.completions.result';
  /**
   * @title output audio tokens 值
   * @description OpenAI API 合约中的 output audio tokens 值。
   */
  output_audio_tokens?: number;
  /**
   * @title output image tokens 值
   * @description OpenAI API 合约中的 output image tokens 值。
   */
  output_image_tokens?: number;
  /**
   * @title output text tokens 值
   * @description OpenAI API 合约中的 output text tokens 值。
   */
  output_text_tokens?: number;
  /**
   * @title output tokens 值
   * @description OpenAI API 合约中的 output tokens 值。
   */
  output_tokens: number;
  /**
   * @title project id 值
   * @description OpenAI API 合约中的 project id 值。
   */
  project_id?: any;
  /**
   * @title service tier 值
   * @description OpenAI API 合约中的 service tier 值。
   */
  service_tier?: any;
  /**
   * @title user id 值
   * @description OpenAI API 合约中的 user id 值。
   */
  user_id?: any;
}

/**
 * @title Usage Embeddings Result 数据结构
 * @description OpenAI API 合约中的 Usage Embeddings Result 结构定义。
 */
export type UsageEmbeddingsResult = {
  /**
   * @title api key id 值
   * @description OpenAI API 合约中的 api key id 值。
   */
  api_key_id?: any;
  /**
   * @title input tokens 值
   * @description OpenAI API 合约中的 input tokens 值。
   */
  input_tokens: number;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title num model requests 值
   * @description OpenAI API 合约中的 num model requests 值。
   */
  num_model_requests: number;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.usage.embeddings.result';
  /**
   * @title project id 值
   * @description OpenAI API 合约中的 project id 值。
   */
  project_id?: any;
  /**
   * @title user id 值
   * @description OpenAI API 合约中的 user id 值。
   */
  user_id?: any;
}

/**
 * @title Usage File Search Calls Result 数据结构
 * @description OpenAI API 合约中的 Usage File Search Calls Result 结构定义。
 */
export type UsageFileSearchCallsResult = {
  /**
   * @title api key id 值
   * @description OpenAI API 合约中的 api key id 值。
   */
  api_key_id?: any;
  /**
   * @title num requests 值
   * @description OpenAI API 合约中的 num requests 值。
   */
  num_requests: number;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.usage.file_searches.result';
  /**
   * @title project id 值
   * @description OpenAI API 合约中的 project id 值。
   */
  project_id?: any;
  /**
   * @title user id 值
   * @description OpenAI API 合约中的 user id 值。
   */
  user_id?: any;
  /**
   * @title vector store id 值
   * @description OpenAI API 合约中的 vector store id 值。
   */
  vector_store_id?: any;
}

/**
 * @title Usage Images Result 数据结构
 * @description OpenAI API 合约中的 Usage Images Result 结构定义。
 */
export type UsageImagesResult = {
  /**
   * @title api key id 值
   * @description OpenAI API 合约中的 api key id 值。
   */
  api_key_id?: any;
  /**
   * @title images 值
   * @description OpenAI API 合约中的 images 值。
   */
  images: number;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title num model requests 值
   * @description OpenAI API 合约中的 num model requests 值。
   */
  num_model_requests: number;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.usage.images.result';
  /**
   * @title project id 值
   * @description OpenAI API 合约中的 project id 值。
   */
  project_id?: any;
  /**
   * @title size 值
   * @description OpenAI API 合约中的 size 值。
   */
  size?: any;
  /**
   * @title source 值
   * @description OpenAI API 合约中的 source 值。
   */
  source?: any;
  /**
   * @title user id 值
   * @description OpenAI API 合约中的 user id 值。
   */
  user_id?: any;
}

/**
 * @title Usage Moderations Result 数据结构
 * @description OpenAI API 合约中的 Usage Moderations Result 结构定义。
 */
export type UsageModerationsResult = {
  /**
   * @title api key id 值
   * @description OpenAI API 合约中的 api key id 值。
   */
  api_key_id?: any;
  /**
   * @title input tokens 值
   * @description OpenAI API 合约中的 input tokens 值。
   */
  input_tokens: number;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title num model requests 值
   * @description OpenAI API 合约中的 num model requests 值。
   */
  num_model_requests: number;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.usage.moderations.result';
  /**
   * @title project id 值
   * @description OpenAI API 合约中的 project id 值。
   */
  project_id?: any;
  /**
   * @title user id 值
   * @description OpenAI API 合约中的 user id 值。
   */
  user_id?: any;
}

/**
 * @title Usage Response 数据结构
 * @description OpenAI API 合约中的 Usage Response 结构定义。
 */
export type UsageResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<UsageTimeBucket>;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title next page 值
   * @description OpenAI API 合约中的 next page 值。
   */
  next_page: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'page';
}

/**
 * @title Usage Time Bucket 数据结构
 * @description OpenAI API 合约中的 Usage Time Bucket 结构定义。
 */
export type UsageTimeBucket = {
  /**
   * @title end time 值
   * @description OpenAI API 合约中的 end time 值。
   */
  end_time: number;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'bucket';
  /**
   * @title results 值
   * @description OpenAI API 合约中的 results 值。
   */
  results: Array<any>;
  /**
   * @title start time 值
   * @description OpenAI API 合约中的 start time 值。
   */
  start_time: number;
}

/**
 * @title Usage Vector Stores Result 数据结构
 * @description OpenAI API 合约中的 Usage Vector Stores Result 结构定义。
 */
export type UsageVectorStoresResult = {
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.usage.vector_stores.result';
  /**
   * @title project id 值
   * @description OpenAI API 合约中的 project id 值。
   */
  project_id?: any;
  /**
   * @title usage bytes 值
   * @description OpenAI API 合约中的 usage bytes 值。
   */
  usage_bytes: number;
}

/**
 * @title Usage Web Search Calls Result 数据结构
 * @description OpenAI API 合约中的 Usage Web Search Calls Result 结构定义。
 */
export type UsageWebSearchCallsResult = {
  /**
   * @title api key id 值
   * @description OpenAI API 合约中的 api key id 值。
   */
  api_key_id?: any;
  /**
   * @title context level 值
   * @description OpenAI API 合约中的 context level 值。
   */
  context_level?: any;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model?: any;
  /**
   * @title num model requests 值
   * @description OpenAI API 合约中的 num model requests 值。
   */
  num_model_requests: number;
  /**
   * @title num requests 值
   * @description OpenAI API 合约中的 num requests 值。
   */
  num_requests: number;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.usage.web_searches.result';
  /**
   * @title project id 值
   * @description OpenAI API 合约中的 project id 值。
   */
  project_id?: any;
  /**
   * @title user id 值
   * @description OpenAI API 合约中的 user id 值。
   */
  user_id?: any;
}

/**
 * @title User 数据结构
 * @description OpenAI API 合约中的 User 结构定义。
 */
export type User = {
  /**
   * @title added at 值
   * @description OpenAI API 合约中的 added at 值。
   */
  added_at: number;
  /**
   * @title api key last used at 值
   * @description OpenAI API 合约中的 api key last used at 值。
   */
  api_key_last_used_at?: any;
  /**
   * @title created 值
   * @description OpenAI API 合约中的 created 值。
   */
  created?: number;
  /**
   * @title developer persona 值
   * @description OpenAI API 合约中的 developer persona 值。
   */
  developer_persona?: any;
  /**
   * @title email 值
   * @description OpenAI API 合约中的 email 值。
   */
  email?: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title is default 值
   * @description OpenAI API 合约中的 is default 值。
   */
  is_default?: boolean;
  /**
   * @title is scale tier authorized purchaser 值
   * @description OpenAI API 合约中的 is scale tier authorized purchaser 值。
   */
  is_scale_tier_authorized_purchaser?: any;
  /**
   * @title is scim managed 值
   * @description OpenAI API 合约中的 is scim managed 值。
   */
  is_scim_managed?: boolean;
  /**
   * @title is service account 值
   * @description OpenAI API 合约中的 is service account 值。
   */
  is_service_account?: boolean;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name?: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'organization.user';
  /**
   * @title projects 值
   * @description OpenAI API 合约中的 projects 值。
   */
  projects?: any;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role?: any;
  /**
   * @title technical level 值
   * @description OpenAI API 合约中的 technical level 值。
   */
  technical_level?: any;
  /**
   * @title user 值
   * @description OpenAI API 合约中的 user 值。
   */
  user?: {
    /**
     * @title banned 值
     * @description OpenAI API 合约中的 banned 值。
     */
    banned?: any;
    /**
     * @title banned at 值
     * @description OpenAI API 合约中的 banned at 值。
     */
    banned_at?: any;
    /**
     * @title email 值
     * @description OpenAI API 合约中的 email 值。
     */
    email?: any;
    /**
     * @title enabled 值
     * @description OpenAI API 合约中的 enabled 值。
     */
    enabled?: any;
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id: string;
    /**
     * @title name 值
     * @description OpenAI API 合约中的 name 值。
     */
    name?: any;
    /**
     * @title object 值
     * @description OpenAI API 合约中的 object 值。
     */
    object: 'user';
    /**
     * @title picture 值
     * @description OpenAI API 合约中的 picture 值。
     */
    picture?: any
  };
}

/**
 * @title User Delete Response 数据结构
 * @description OpenAI API 合约中的 User Delete Response 结构定义。
 */
export type UserDeleteResponse = {
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
  object: 'organization.user.deleted';
}

/**
 * @title User List Resource 数据结构
 * @description OpenAI API 合约中的 User List Resource 结构定义。
 */
export type UserListResource = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<GroupUser>;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title next 值
   * @description OpenAI API 合约中的 next 值。
   */
  next: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title User List Response 数据结构
 * @description OpenAI API 合约中的 User List Response 结构定义。
 */
export type UserListResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<User>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id?: any;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id?: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title User Message Input Text 数据结构
 * @description OpenAI API 合约中的 User Message Input Text 结构定义。
 */
export type UserMessageInputText = {
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'input_text';
}

/**
 * @title User Message Item 数据结构
 * @description OpenAI API 合约中的 User Message Item 结构定义。
 */
export type UserMessageItem = {
  /**
   * @title attachments 值
   * @description OpenAI API 合约中的 attachments 值。
   */
  attachments: Array<Attachment>;
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: Array<any>;
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title inference options 值
   * @description OpenAI API 合约中的 inference options 值。
   */
  inference_options: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'chatkit.thread_item';
  /**
   * @title thread id 值
   * @description OpenAI API 合约中的 thread id 值。
   */
  thread_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'chatkit.user_message';
}

/**
 * @title User Message Quoted Text 数据结构
 * @description OpenAI API 合约中的 User Message Quoted Text 结构定义。
 */
export type UserMessageQuotedText = {
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'quoted_text';
}

/**
 * @title User Role Assignment 数据结构
 * @description OpenAI API 合约中的 User Role Assignment 结构定义。
 */
export type UserRoleAssignment = {
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'user.role';
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role: Role;
  /**
   * @title user 值
   * @description OpenAI API 合约中的 user 值。
   */
  user: User;
}

/**
 * @title User Role Update Request 数据结构
 * @description OpenAI API 合约中的 User Role Update Request 结构定义。
 */
export type UserRoleUpdateRequest = {
  /**
   * @title developer persona 值
   * @description OpenAI API 合约中的 developer persona 值。
   */
  developer_persona?: any;
  /**
   * @title role 值
   * @description OpenAI API 合约中的 role 值。
   */
  role?: any;
  /**
   * @title role id 值
   * @description OpenAI API 合约中的 role id 值。
   */
  role_id?: any;
  /**
   * @title technical level 值
   * @description OpenAI API 合约中的 technical level 值。
   */
  technical_level?: any;
}

/**
 * @title Vad Config 数据结构
 * @description OpenAI API 合约中的 Vad Config 结构定义。
 */
export type VadConfig = {
  /**
   * @title prefix padding ms 值
   * @description OpenAI API 合约中的 prefix padding ms 值。
   */
  prefix_padding_ms?: number;
  /**
   * @title silence duration ms 值
   * @description OpenAI API 合约中的 silence duration ms 值。
   */
  silence_duration_ms?: number;
  /**
   * @title threshold 值
   * @description OpenAI API 合约中的 threshold 值。
   */
  threshold?: number;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'server_vad';
}

/**
 * @title Validate Grader Request 数据结构
 * @description OpenAI API 合约中的 Validate Grader Request 结构定义。
 */
export type ValidateGraderRequest = {
  /**
   * @title grader 值
   * @description OpenAI API 合约中的 grader 值。
   */
  grader: any;
}

/**
 * @title Validate Grader Response 数据结构
 * @description OpenAI API 合约中的 Validate Grader Response 结构定义。
 */
export type ValidateGraderResponse = {
  /**
   * @title grader 值
   * @description OpenAI API 合约中的 grader 值。
   */
  grader?: any;
}

/**
 * @title Vector Store Expiration After 数据结构
 * @description OpenAI API 合约中的 Vector Store Expiration After 结构定义。
 */
export type VectorStoreExpirationAfter = {
  /**
   * @title anchor 值
   * @description OpenAI API 合约中的 anchor 值。
   */
  anchor: 'last_active_at';
  /**
   * @title days 值
   * @description OpenAI API 合约中的 days 值。
   */
  days: number;
}

/**
 * @title Vector Store File Attributes 数据结构
 * @description OpenAI API 合约中的 Vector Store File Attributes 结构定义。
 */
export type VectorStoreFileAttributes = any

/**
 * @title Vector Store File Batch Object 数据结构
 * @description OpenAI API 合约中的 Vector Store File Batch Object 结构定义。
 */
export type VectorStoreFileBatchObject = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title file counts 值
   * @description OpenAI API 合约中的 file counts 值。
   */
  file_counts: {
    /**
     * @title cancelled 值
     * @description OpenAI API 合约中的 cancelled 值。
     */
    cancelled: number;
    /**
     * @title completed 值
     * @description OpenAI API 合约中的 completed 值。
     */
    completed: number;
    /**
     * @title failed 值
     * @description OpenAI API 合约中的 failed 值。
     */
    failed: number;
    /**
     * @title in progress 值
     * @description OpenAI API 合约中的 in progress 值。
     */
    in_progress: number;
    /**
     * @title total 值
     * @description OpenAI API 合约中的 total 值。
     */
    total: number
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'vector_store.files_batch';
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'in_progress' | 'completed' | 'cancelled' | 'failed';
  /**
   * @title vector store id 值
   * @description OpenAI API 合约中的 vector store id 值。
   */
  vector_store_id: string;
}

/**
 * @title Vector Store File Content Response 数据结构
 * @description OpenAI API 合约中的 Vector Store File Content Response 结构定义。
 */
export type VectorStoreFileContentResponse = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<{
    /**
     * @title text 值
     * @description OpenAI API 合约中的 text 值。
     */
    text?: string;
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type?: string
  }>;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title next page 值
   * @description OpenAI API 合约中的 next page 值。
   */
  next_page: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'vector_store.file_content.page';
}

/**
 * @title Vector Store File Object 数据结构
 * @description OpenAI API 合约中的 Vector Store File Object 结构定义。
 */
export type VectorStoreFileObject = {
  /**
   * @title attributes 值
   * @description OpenAI API 合约中的 attributes 值。
   */
  attributes?: VectorStoreFileAttributes;
  /**
   * @title chunking strategy 值
   * @description OpenAI API 合约中的 chunking strategy 值。
   */
  chunking_strategy?: any;
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title last error 值
   * @description OpenAI API 合约中的 last error 值。
   */
  last_error: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'vector_store.file';
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'in_progress' | 'completed' | 'cancelled' | 'failed';
  /**
   * @title usage bytes 值
   * @description OpenAI API 合约中的 usage bytes 值。
   */
  usage_bytes: number;
  /**
   * @title vector store id 值
   * @description OpenAI API 合约中的 vector store id 值。
   */
  vector_store_id: string;
}

/**
 * @title Vector Store Object 数据结构
 * @description OpenAI API 合约中的 Vector Store Object 结构定义。
 */
export type VectorStoreObject = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title expires after 值
   * @description OpenAI API 合约中的 expires after 值。
   */
  expires_after?: VectorStoreExpirationAfter;
  /**
   * @title expires at 值
   * @description OpenAI API 合约中的 expires at 值。
   */
  expires_at?: any;
  /**
   * @title file counts 值
   * @description OpenAI API 合约中的 file counts 值。
   */
  file_counts: {
    /**
     * @title cancelled 值
     * @description OpenAI API 合约中的 cancelled 值。
     */
    cancelled: number;
    /**
     * @title completed 值
     * @description OpenAI API 合约中的 completed 值。
     */
    completed: number;
    /**
     * @title failed 值
     * @description OpenAI API 合约中的 failed 值。
     */
    failed: number;
    /**
     * @title in progress 值
     * @description OpenAI API 合约中的 in progress 值。
     */
    in_progress: number;
    /**
     * @title total 值
     * @description OpenAI API 合约中的 total 值。
     */
    total: number
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title last active at 值
   * @description OpenAI API 合约中的 last active at 值。
   */
  last_active_at: any;
  /**
   * @title metadata 值
   * @description OpenAI API 合约中的 metadata 值。
   */
  metadata: Metadata;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'vector_store';
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'expired' | 'in_progress' | 'completed';
  /**
   * @title usage bytes 值
   * @description OpenAI API 合约中的 usage bytes 值。
   */
  usage_bytes: number;
}

/**
 * @title Vector Store Search Request 数据结构
 * @description OpenAI API 合约中的 Vector Store Search Request 结构定义。
 */
export type VectorStoreSearchRequest = {
  /**
   * @title filters 值
   * @description OpenAI API 合约中的 filters 值。
   */
  filters?: any;
  /**
   * @title max num results 值
   * @description OpenAI API 合约中的 max num results 值。
   */
  max_num_results?: number;
  /**
   * @title query 值
   * @description OpenAI API 合约中的 query 值。
   */
  query: any;
  /**
   * @title ranking options 值
   * @description OpenAI API 合约中的 ranking options 值。
   */
  ranking_options?: {
    /**
     * @title ranker 值
     * @description OpenAI API 合约中的 ranker 值。
     */
    ranker?: 'none' | 'auto' | 'default-2024-11-15';
    /**
     * @title score threshold 值
     * @description OpenAI API 合约中的 score threshold 值。
     */
    score_threshold?: number
  };
  /**
   * @title rewrite query 值
   * @description OpenAI API 合约中的 rewrite query 值。
   */
  rewrite_query?: boolean;
}

/**
 * @title Vector Store Search Result Content Object 数据结构
 * @description OpenAI API 合约中的 Vector Store Search Result Content Object 结构定义。
 */
export type VectorStoreSearchResultContentObject = {
  /**
   * @title text 值
   * @description OpenAI API 合约中的 text 值。
   */
  text: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'text';
}

/**
 * @title Vector Store Search Result Item 数据结构
 * @description OpenAI API 合约中的 Vector Store Search Result Item 结构定义。
 */
export type VectorStoreSearchResultItem = {
  /**
   * @title attributes 值
   * @description OpenAI API 合约中的 attributes 值。
   */
  attributes: VectorStoreFileAttributes;
  /**
   * @title content 值
   * @description OpenAI API 合约中的 content 值。
   */
  content: Array<VectorStoreSearchResultContentObject>;
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id: string;
  /**
   * @title filename 值
   * @description OpenAI API 合约中的 filename 值。
   */
  filename: string;
  /**
   * @title score 值
   * @description OpenAI API 合约中的 score 值。
   */
  score: number;
}

/**
 * @title Vector Store Search Results Page 数据结构
 * @description OpenAI API 合约中的 Vector Store Search Results Page 结构定义。
 */
export type VectorStoreSearchResultsPage = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<VectorStoreSearchResultItem>;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title next page 值
   * @description OpenAI API 合约中的 next page 值。
   */
  next_page: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'vector_store.search_results.page';
  /**
   * @title search query 值
   * @description OpenAI API 合约中的 search query 值。
   */
  search_query: Array<string>;
}

/**
 * @title Verbosity 数据结构
 * @description OpenAI API 合约中的 Verbosity 结构定义。
 */
export type Verbosity = any

/**
 * @title Video Character Resource 数据结构
 * @description OpenAI API 合约中的 Video Character Resource 结构定义。
 */
export type VideoCharacterResource = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: any;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: any;
}

/**
 * @title Video Content Variant 数据结构
 * @description OpenAI API 合约中的 Video Content Variant 结构定义。
 */
export type VideoContentVariant = 'video' | 'thumbnail' | 'spritesheet'

/**
 * @title Video List Resource 数据结构
 * @description OpenAI API 合约中的 Video List Resource 结构定义。
 */
export type VideoListResource = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<VideoResource>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id: any;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Video Model 数据结构
 * @description OpenAI API 合约中的 Video Model 结构定义。
 */
export type VideoModel = any

/**
 * @title Video Reference Input Param 数据结构
 * @description OpenAI API 合约中的 Video Reference Input Param 结构定义。
 */
export type VideoReferenceInputParam = {
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
}

/**
 * @title Video Resource 数据结构
 * @description OpenAI API 合约中的 Video Resource 结构定义。
 */
export type VideoResource = {
  /**
   * @title completed at 值
   * @description OpenAI API 合约中的 completed at 值。
   */
  completed_at: any;
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title error 值
   * @description OpenAI API 合约中的 error 值。
   */
  error: any;
  /**
   * @title expires at 值
   * @description OpenAI API 合约中的 expires at 值。
   */
  expires_at: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title model 值
   * @description OpenAI API 合约中的 model 值。
   */
  model: VideoModel;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'video';
  /**
   * @title progress 值
   * @description OpenAI API 合约中的 progress 值。
   */
  progress: number;
  /**
   * @title prompt 值
   * @description OpenAI API 合约中的 prompt 值。
   */
  prompt: any;
  /**
   * @title remixed from video id 值
   * @description OpenAI API 合约中的 remixed from video id 值。
   */
  remixed_from_video_id: any;
  /**
   * @title seconds 值
   * @description OpenAI API 合约中的 seconds 值。
   */
  seconds: string;
  /**
   * @title size 值
   * @description OpenAI API 合约中的 size 值。
   */
  size: VideoSize;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: VideoStatus;
}

/**
 * @title Video Seconds 数据结构
 * @description OpenAI API 合约中的 Video Seconds 结构定义。
 */
export type VideoSeconds = '4' | '8' | '12'

/**
 * @title Video Size 数据结构
 * @description OpenAI API 合约中的 Video Size 结构定义。
 */
export type VideoSize = '720x1280' | '1280x720' | '1024x1792' | '1792x1024'

/**
 * @title Video Status 数据结构
 * @description OpenAI API 合约中的 Video Status 结构定义。
 */
export type VideoStatus = 'queued' | 'in_progress' | 'completed' | 'failed'

/**
 * @title Voice Consent Deleted Resource 数据结构
 * @description OpenAI API 合约中的 Voice Consent Deleted Resource 结构定义。
 */
export type VoiceConsentDeletedResource = {
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
  object: 'audio.voice_consent';
}

/**
 * @title Voice Consent List Resource 数据结构
 * @description OpenAI API 合约中的 Voice Consent List Resource 结构定义。
 */
export type VoiceConsentListResource = {
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: Array<VoiceConsentResource>;
  /**
   * @title first id 值
   * @description OpenAI API 合约中的 first id 值。
   */
  first_id?: any;
  /**
   * @title has more 值
   * @description OpenAI API 合约中的 has more 值。
   */
  has_more: boolean;
  /**
   * @title last id 值
   * @description OpenAI API 合约中的 last id 值。
   */
  last_id?: any;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'list';
}

/**
 * @title Voice Consent Resource 数据结构
 * @description OpenAI API 合约中的 Voice Consent Resource 结构定义。
 */
export type VoiceConsentResource = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title language 值
   * @description OpenAI API 合约中的 language 值。
   */
  language: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'audio.voice_consent';
}

/**
 * @title Voice Ids Or Custom Voice 数据结构
 * @description OpenAI API 合约中的 Voice Ids Or Custom Voice 结构定义。
 */
export type VoiceIdsOrCustomVoice = any

/**
 * @title Voice Ids Shared 数据结构
 * @description OpenAI API 合约中的 Voice Ids Shared 结构定义。
 */
export type VoiceIdsShared = any

/**
 * @title Voice Resource 数据结构
 * @description OpenAI API 合约中的 Voice Resource 结构定义。
 */
export type VoiceResource = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title name 值
   * @description OpenAI API 合约中的 name 值。
   */
  name: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'audio.voice';
}

/**
 * @title Wait Param 数据结构
 * @description OpenAI API 合约中的 Wait Param 结构定义。
 */
export type WaitParam = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'wait';
}

/**
 * @title Web Search Action Find 数据结构
 * @description OpenAI API 合约中的 Web Search Action Find 结构定义。
 */
export type WebSearchActionFind = {
  /**
   * @title pattern 值
   * @description OpenAI API 合约中的 pattern 值。
   */
  pattern: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'find_in_page';
  /**
   * @title url 值
   * @description OpenAI API 合约中的 url 值。
   */
  url: string;
}

/**
 * @title Web Search Action Open Page 数据结构
 * @description OpenAI API 合约中的 Web Search Action Open Page 结构定义。
 */
export type WebSearchActionOpenPage = {
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'open_page';
  /**
   * @title url 值
   * @description OpenAI API 合约中的 url 值。
   */
  url?: any;
}

/**
 * @title Web Search Action Search 数据结构
 * @description OpenAI API 合约中的 Web Search Action Search 结构定义。
 */
export type WebSearchActionSearch = {
  /**
   * @title queries 值
   * @description OpenAI API 合约中的 queries 值。
   */
  queries?: Array<string>;
  /**
   * @title query 值
   * @description OpenAI API 合约中的 query 值。
   */
  query?: string;
  /**
   * @title sources 值
   * @description OpenAI API 合约中的 sources 值。
   */
  sources?: Array<{
    /**
     * @title type 值
     * @description OpenAI API 合约中的 type 值。
     */
    type: 'url';
    /**
     * @title url 值
     * @description OpenAI API 合约中的 url 值。
     */
    url: string
  }>;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'search';
}

/**
 * @title Web Search Approximate Location 数据结构
 * @description OpenAI API 合约中的 Web Search Approximate Location 结构定义。
 */
export type WebSearchApproximateLocation = any

/**
 * @title Web Search Context Size 数据结构
 * @description OpenAI API 合约中的 Web Search Context Size 结构定义。
 */
export type WebSearchContextSize = 'low' | 'medium' | 'high'

/**
 * @title Web Search Location 数据结构
 * @description OpenAI API 合约中的 Web Search Location 结构定义。
 */
export type WebSearchLocation = {
  /**
   * @title city 值
   * @description OpenAI API 合约中的 city 值。
   */
  city?: string;
  /**
   * @title country 值
   * @description OpenAI API 合约中的 country 值。
   */
  country?: string;
  /**
   * @title region 值
   * @description OpenAI API 合约中的 region 值。
   */
  region?: string;
  /**
   * @title timezone 值
   * @description OpenAI API 合约中的 timezone 值。
   */
  timezone?: string;
}

/**
 * @title Web Search Preview Tool 数据结构
 * @description OpenAI API 合约中的 Web Search Preview Tool 结构定义。
 */
export type WebSearchPreviewTool = {
  /**
   * @title search content types 值
   * @description OpenAI API 合约中的 search content types 值。
   */
  search_content_types?: Array<SearchContentType>;
  /**
   * @title search context size 值
   * @description OpenAI API 合约中的 search context size 值。
   */
  search_context_size?: SearchContextSize;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'web_search_preview' | 'web_search_preview_2025_03_11';
  /**
   * @title user location 值
   * @description OpenAI API 合约中的 user location 值。
   */
  user_location?: any;
}

/**
 * @title Web Search Tool 数据结构
 * @description OpenAI API 合约中的 Web Search Tool 结构定义。
 */
export type WebSearchTool = {
  /**
   * @title external web access 值
   * @description OpenAI API 合约中的 external web access 值。
   */
  external_web_access?: boolean;
  /**
   * @title filters 值
   * @description OpenAI API 合约中的 filters 值。
   */
  filters?: any;
  /**
   * @title search context size 值
   * @description OpenAI API 合约中的 search context size 值。
   */
  search_context_size?: 'low' | 'medium' | 'high';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'web_search' | 'web_search_2025_08_26';
  /**
   * @title user location 值
   * @description OpenAI API 合约中的 user location 值。
   */
  user_location?: WebSearchApproximateLocation;
}

/**
 * @title Web Search Tool Call 数据结构
 * @description OpenAI API 合约中的 Web Search Tool Call 结构定义。
 */
export type WebSearchToolCall = {
  /**
   * @title action 值
   * @description OpenAI API 合约中的 action 值。
   */
  action: any;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title status 值
   * @description OpenAI API 合约中的 status 值。
   */
  status: 'in_progress' | 'searching' | 'completed' | 'failed';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'web_search_call';
}

/**
 * @title Webhook Batch Cancelled 数据结构
 * @description OpenAI API 合约中的 Webhook Batch Cancelled 结构定义。
 */
export type WebhookBatchCancelled = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id: string
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'event';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'batch.cancelled';
}

/**
 * @title Webhook Batch Completed 数据结构
 * @description OpenAI API 合约中的 Webhook Batch Completed 结构定义。
 */
export type WebhookBatchCompleted = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id: string
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'event';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'batch.completed';
}

/**
 * @title Webhook Batch Expired 数据结构
 * @description OpenAI API 合约中的 Webhook Batch Expired 结构定义。
 */
export type WebhookBatchExpired = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id: string
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'event';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'batch.expired';
}

/**
 * @title Webhook Batch Failed 数据结构
 * @description OpenAI API 合约中的 Webhook Batch Failed 结构定义。
 */
export type WebhookBatchFailed = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id: string
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'event';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'batch.failed';
}

/**
 * @title Webhook Eval Run Canceled 数据结构
 * @description OpenAI API 合约中的 Webhook Eval Run Canceled 结构定义。
 */
export type WebhookEvalRunCanceled = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id: string
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'event';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'eval.run.canceled';
}

/**
 * @title Webhook Eval Run Failed 数据结构
 * @description OpenAI API 合约中的 Webhook Eval Run Failed 结构定义。
 */
export type WebhookEvalRunFailed = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id: string
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'event';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'eval.run.failed';
}

/**
 * @title Webhook Eval Run Succeeded 数据结构
 * @description OpenAI API 合约中的 Webhook Eval Run Succeeded 结构定义。
 */
export type WebhookEvalRunSucceeded = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id: string
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'event';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'eval.run.succeeded';
}

/**
 * @title Webhook Fine Tuning Job Cancelled 数据结构
 * @description OpenAI API 合约中的 Webhook Fine Tuning Job Cancelled 结构定义。
 */
export type WebhookFineTuningJobCancelled = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id: string
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'event';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'fine_tuning.job.cancelled';
}

/**
 * @title Webhook Fine Tuning Job Failed 数据结构
 * @description OpenAI API 合约中的 Webhook Fine Tuning Job Failed 结构定义。
 */
export type WebhookFineTuningJobFailed = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id: string
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'event';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'fine_tuning.job.failed';
}

/**
 * @title Webhook Fine Tuning Job Succeeded 数据结构
 * @description OpenAI API 合约中的 Webhook Fine Tuning Job Succeeded 结构定义。
 */
export type WebhookFineTuningJobSucceeded = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id: string
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'event';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'fine_tuning.job.succeeded';
}

/**
 * @title Webhook Live Call Incoming 数据结构
 * @description OpenAI API 合约中的 Webhook Live Call Incoming 结构定义。
 */
export type WebhookLiveCallIncoming = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: {
    /**
     * @title session id 值
     * @description OpenAI API 合约中的 session id 值。
     */
    session_id: string;
    /**
     * @title sip headers 值
     * @description OpenAI API 合约中的 sip headers 值。
     */
    sip_headers: Array<{
      /**
       * @title name 值
       * @description OpenAI API 合约中的 name 值。
       */
      name: string;
      /**
       * @title value 值
       * @description OpenAI API 合约中的 value 值。
       */
      value: string
    }>
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'event';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'live.call.incoming';
}

/**
 * @title Webhook Realtime Call Incoming 数据结构
 * @description OpenAI API 合约中的 Webhook Realtime Call Incoming 结构定义。
 */
export type WebhookRealtimeCallIncoming = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: {
    /**
     * @title call id 值
     * @description OpenAI API 合约中的 call id 值。
     */
    call_id: string;
    /**
     * @title sip headers 值
     * @description OpenAI API 合约中的 sip headers 值。
     */
    sip_headers: Array<{
      /**
       * @title name 值
       * @description OpenAI API 合约中的 name 值。
       */
      name: string;
      /**
       * @title value 值
       * @description OpenAI API 合约中的 value 值。
       */
      value: string
    }>
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'event';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'realtime.call.incoming';
}

/**
 * @title Webhook Response Cancelled 数据结构
 * @description OpenAI API 合约中的 Webhook Response Cancelled 结构定义。
 */
export type WebhookResponseCancelled = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id: string
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'event';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.cancelled';
}

/**
 * @title Webhook Response Completed 数据结构
 * @description OpenAI API 合约中的 Webhook Response Completed 结构定义。
 */
export type WebhookResponseCompleted = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id: string
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'event';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.completed';
}

/**
 * @title Webhook Response Failed 数据结构
 * @description OpenAI API 合约中的 Webhook Response Failed 结构定义。
 */
export type WebhookResponseFailed = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id: string
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'event';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.failed';
}

/**
 * @title Webhook Response Incomplete 数据结构
 * @description OpenAI API 合约中的 Webhook Response Incomplete 结构定义。
 */
export type WebhookResponseIncomplete = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title data 值
   * @description OpenAI API 合约中的 data 值。
   */
  data: {
    /**
     * @title id 值
     * @description OpenAI API 合约中的 id 值。
     */
    id: string
  };
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object?: 'event';
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'response.incomplete';
}

/**
 * @title Widget Message Item 数据结构
 * @description OpenAI API 合约中的 Widget Message Item 结构定义。
 */
export type WidgetMessageItem = {
  /**
   * @title created at 值
   * @description OpenAI API 合约中的 created at 值。
   */
  created_at: number;
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title object 值
   * @description OpenAI API 合约中的 object 值。
   */
  object: 'chatkit.thread_item';
  /**
   * @title thread id 值
   * @description OpenAI API 合约中的 thread id 值。
   */
  thread_id: string;
  /**
   * @title type 值
   * @description OpenAI API 合约中的 type 值。
   */
  type: 'chatkit.widget';
  /**
   * @title widget 值
   * @description OpenAI API 合约中的 widget 值。
   */
  widget: string;
}

/**
 * @title Workflow Param 数据结构
 * @description OpenAI API 合约中的 Workflow Param 结构定义。
 */
export type WorkflowParam = {
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
  /**
   * @title state variables 值
   * @description OpenAI API 合约中的 state variables 值。
   */
  state_variables?: Record<any, any>;
  /**
   * @title tracing 值
   * @description OpenAI API 合约中的 tracing 值。
   */
  tracing?: WorkflowTracingParam;
  /**
   * @title version 值
   * @description OpenAI API 合约中的 version 值。
   */
  version?: string;
}

/**
 * @title Workflow Tracing Param 数据结构
 * @description OpenAI API 合约中的 Workflow Tracing Param 结构定义。
 */
export type WorkflowTracingParam = {
  /**
   * @title enabled 值
   * @description OpenAI API 合约中的 enabled 值。
   */
  enabled?: boolean;
}

/**
 * @title betaconversationparam2 数据结构
 * @description OpenAI API 合约中的 betaconversationparam2 结构定义。
 */
export type betaconversationparam2 = {
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
}

/**
 * @title betamessagephase2 数据结构
 * @description OpenAI API 合约中的 betamessagephase2 结构定义。
 */
export type betamessagephase2 = 'commentary' | 'final_answer'

/**
 * @title conversationparam2 数据结构
 * @description OpenAI API 合约中的 conversationparam2 结构定义。
 */
export type conversationparam2 = {
  /**
   * @title id 值
   * @description OpenAI API 合约中的 id 值。
   */
  id: string;
}

/**
 * @title error2 数据结构
 * @description OpenAI API 合约中的 error2 结构定义。
 */
export type error2 = {
  /**
   * @title code 值
   * @description OpenAI API 合约中的 code 值。
   */
  code: string;
  /**
   * @title message 值
   * @description OpenAI API 合约中的 message 值。
   */
  message: string;
}

/**
 * @title imagerefparam2 数据结构
 * @description OpenAI API 合约中的 imagerefparam2 结构定义。
 */
export type imagerefparam2 = {
  /**
   * @title file id 值
   * @description OpenAI API 合约中的 file id 值。
   */
  file_id?: string;
  /**
   * @title image url 值
   * @description OpenAI API 合约中的 image url 值。
   */
  image_url?: string;
}

/**
 * @title messagephase2 数据结构
 * @description OpenAI API 合约中的 messagephase2 结构定义。
 */
export type messagephase2 = 'commentary' | 'final_answer'