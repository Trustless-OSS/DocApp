import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { Callout } from 'nextra/components'
import { FeatureGrid, FeatureCard, Steps, Step } from './components/docs-ui'
import { MediaSlot } from './components/media-slot'
import { CommandBlock } from './components/command-block'
import { NextStep, StuckLink } from './components/next-step'
import { TimeEstimate } from './components/time-estimate'

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components) {
  return {
    ...docsComponents,
    // Trustless OSS custom icon-powered components, usable in any .mdx file
    FeatureGrid,
    FeatureCard,
    Steps,
    Step,
    MediaSlot,
    CommandBlock,
    NextStep,
    StuckLink,
    TimeEstimate,
    Callout,
    ...components,
  }
}
