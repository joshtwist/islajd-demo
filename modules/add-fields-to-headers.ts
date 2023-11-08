import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (
  request: ZuploRequest,
  context: ZuploContext,
  options: never,
  policyName: string
) {
  const additionalFields = request.user.data.additionalFields;

  if (additionalFields) {
    const headers = new Headers(request.headers);
    for (const [key, value] of Object.entries(additionalFields)) {
      headers.set(key, value.toString());
    }

    return new ZuploRequest(request, {
      headers,
      method: request.method
    });
  }

  return request;
}
