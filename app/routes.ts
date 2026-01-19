import { type RouteConfig, index,layout,route } from "@react-router/dev/routes";

export default [
  layout('routes/admin-layout.tsx',[
    route('dashboard','routes/dashboard.tsx'),
    route('all-users','routes/all-users.tsx'),

  ])
] satisfies RouteConfig;

