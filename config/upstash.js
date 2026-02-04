import { Client as WorkflowClient } from "@upstash/workflow";
import { QSTASH_URL, QSTASH_TOKEN } from "./env.js";

export const workflowClient = new WorkflowClient({
    baseUrl: QSTASH_URL || "http://127.0.0.1:8090",
    token: QSTASH_TOKEN || "development",
});

//Log qstash configuration on setup
console.log("Qstash Configuration:",{
    baseUrl: QSTASH_URL || "http://127.0.0.1:8090",
    hasToken: !!QSTASH_TOKEN,
});