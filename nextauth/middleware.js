export {default} from "next-auth/middleware";

export const config = {matcher: ["/Dashboard"]};

// here we are protecting out dashboard so that you cannot rollback