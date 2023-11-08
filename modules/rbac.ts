import { HttpProblems, ZuploContext, ZuploRequest } from "@zuplo/runtime";

type MyPolicyOptionsType = {
  role: string;
};

export default async function (
  request: ZuploRequest,
  context: ZuploContext,
  options: MyPolicyOptionsType,
  policyName: string
) {
  // your policy code goes here, and can use the options to perform any
  // configuration
  // See the docs: https://www.zuplo.com/docs/policies/custom-code-inbound

  if (request.user.data.roles.includes(options.role)) {
    return request;
  }

  return HttpProblems.unauthorized(request, context, { detail: "You do not have permissions" });
}
