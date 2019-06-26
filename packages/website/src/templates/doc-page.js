import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import * as RC from '@modulz/radix';
import * as RI from '@modulz/radix-icons';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import { SystemPropsTable } from '../components/SystemPropsTable';

export const components = {
  ...RC,
  ...RI,
  pre: props => <div {...props} />,
  code: CodeBlock,
  table: RC.Table,
  thead: RC.Thead,
  tbody: RC.Tbody,
  tfoot: RC.Tfoot,
  tr: RC.Tr,
  th: RC.Th,
  td: RC.Td,
  inlineCode: RC.Code,
  a: RC.Link,
  h1: props => <RC.Heading {...props} fontWeight="bold" size={3} mt={8} mb={4} />,
  h2: props => <RC.Heading {...props} as="h2" fontWeight="bold" size={2} mt={8} mb={4} />,
  h3: props => <RC.Heading {...props} as="h3" fontWeight="bold" size={1} mt={8} mb={4} />,
  SystemProps: SystemPropsTable,
};

function DocPageTemplate({ data, location, ...props }) {
  const children = <MDXRenderer children={data.mdx.code.body} />;

  return (
    <Layout pathname={location.pathname}>
      <MDXProvider components={components}>
        <RC.Box>
          <RC.Heading size={3} fontWeight="bold">
            {data.mdx.frontmatter.title}
          </RC.Heading>
          {children}
        </RC.Box>
      </MDXProvider>
    </Layout>
  );
}

export default DocPageTemplate;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        component
      }
      code {
        body
      }
    }
  }
`;
