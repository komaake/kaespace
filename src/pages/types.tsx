/**
 * Page Functional Component Interface
 * @param props
 * @returns
 */
type FunctionalComponent = (props: any) => JSX.Element;
export interface Page extends FunctionalComponent {
  /**
   * Refers to a react-router-dom route, will use the id (and a foward slash) if none is present.
   */
  route?: string;
  /**
   * The Id of the page, can be used to identify the page and also goto the page
   */
  id: string;
  /**
   * The full name of the page, will use the Id if none is present.
   */
  title?: string;
  /**
   * Which css framework this page is designed for.
   */
  framework?: "bootstrap" | "tailwind";
  /**
   * The icon of the page
   */
  icon?: string;
  /**
   * true if the page is a gem
   */
  gem?: boolean;
  /**
   * Various access permissions for the page
   */
  permissions?: {
    requireAdmin?: boolean;
    requireNetwork?: boolean;
    requireWallet?: boolean;
  };
  /**
   * various settings
   */
  settings?: {
    navbar?: {
      start?: boolean;
      middle?: boolean;
      end?: boolean;
      dropdown?: boolean;
    };
  };
}
