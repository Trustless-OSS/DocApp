import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import {
  FeatureGrid,
  FeatureCard,
  Steps,
  Step,
} from './components/docs-ui'

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components) {
  return {
    ...docsComponents,
    // Trustless OSS custom icon-powered components, usable in any .mdx file
    FeatureGrid,
    FeatureCard,
    Steps,
    Step,
    ...components,
  }
}
