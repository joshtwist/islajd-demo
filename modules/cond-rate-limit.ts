import { ZuploContext, ZuploRequest } from "@zuplo/runtime";


export default async function (
  request: ZuploRequest,
  context: ZuploContext,
  options: never,
  policyName: string
) {
  // your policy code goes here, and can use the options to perform any
  // configuration
  // See the docs: https://www.zuplo.com/docs/policies/custom-code-inbound
  if (request.user.data.rateLimitMode === "foo") {
    return context.invokeInboundPolicy("rate-limit-foo", request);
  }

  return request;
}
