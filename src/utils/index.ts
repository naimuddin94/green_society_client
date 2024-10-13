// Utility function to extract <h1> content with window check
export const extractH1Content = (htmlContent: string): string | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");
  const h1Element = doc.querySelector("h1");

  return h1Element ? h1Element.textContent : null;
};
