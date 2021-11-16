import { ReactNode, LazyExoticComponent, ComponentType, lazy } from "react";

export interface IRoute {
  // Path, like in basic prop
  path: string;
  // Exact, like in basic prop
  exact: boolean;
  // Preloader for lazy loading
  fallback: NonNullable<ReactNode> | null;
  // Lazy Loaded component
  component?: LazyExoticComponent<ComponentType<any>>;
  // Sub routes
  routes?: IRoute[];
  // Redirect path
  redirect?: string;
  // If router is private, this is going to be true
  private?: boolean;
}

export const routes: IRoute[] = [
  {
    path: "/",
    component: lazy(() => import("../pages/landing/landing")),
    exact: true,
    private: false,
    fallback: <div>Loading...</div>,
  },
  {
    path: "/register",
    component: lazy(() => import("../pages/register/register")),
    exact: true,
    private: false,
    fallback: <div>Loading...</div>,
  },
  {
    path: "/privacy_and_policy",
    component: lazy(() => import("../pages/policy/policy")),
    exact: true,
    private: false,
    fallback: <div>Loading...</div>,
  },
  {
    path: "/blog",
    component: lazy(() => import("../pages/blog/blog-page")),
    exact: true,
    private: false,
    fallback: <div>Loading...</div>,
  },
  {
    path: "/support",
    component: lazy(() => import("../pages/support/support")),
    exact: true,
    private: false,
    fallback: <div>Loading...</div>,
  },
  {
    path: "",
    exact: false,
    component: lazy(() => import("../pages/not-found/not-found")),
    fallback: <div>Loading...</div>,
  },
];
