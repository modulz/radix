import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { RadixProvider, Flex, Box, Menu, Heading, Badge, Divider, Container } from '@modulz/radix';
import NavItem from './components/NavItem';

export const wrapPageElement = ({ element, props }) => {
  const query = graphql`
    fragment mdxContent on MdxConnection {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
    query {
      pinned: allMdx(
        sort: { order: ASC, fields: [frontmatter___title] }
        filter: { frontmatter: { pinned: { ne: null } } }
      ) {
        ...mdxContent
      }
      components: allMdx(
        sort: { order: ASC, fields: [frontmatter___title] }
        filter: { frontmatter: { component: { ne: null } } }
      ) {
        ...mdxContent
      }
      recipes: allMdx(
        sort: { order: ASC, fields: [frontmatter___title] }
        filter: { frontmatter: { recipe: { ne: null } } }
      ) {
        ...mdxContent
      }
    }
  `;

  const pathname = props.location.pathname;

  return (
    <RadixProvider>
      <StaticQuery
        query={query}
        render={data => {
          return (
            <>
              <Box
                position={['static', 'fixed']}
                width={['100%', 200, 250]}
                height={['auto', '100vh']}
                overflow={['auto', 'scroll']}
                pb={[0, 8]}
                borderRight={[0, '1px solid']}
                borderBottom={['1px solid', 0]}
                borderColor={['grays.2', 'grays.2']}
                style={{ WebkitOverflowScrolling: 'touch', overflowX: 'hidden' }}
              >
                <Box py={2} px={4}>
                  <Flex alignItems="center">
                    <Box>
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 26.5L4 31V22L10 26.5Z" />
                        <path d="M10 14.5L4 19V10L10 14.5Z" />
                        <path d="M17 8.5L11 13V4L17 8.5Z" />
                        <path d="M24 14.5L18 19V10L24 14.5Z" />
                        <path d="M31 8.5L25 13V4L31 8.5Z" />
                        <path d="M31 20.5L25 25V16L31 20.5Z" />
                        <path d="M10 25L4 20.5L10 16V25Z" />
                        <path d="M17 19L11 14.5L17 10V19Z" />
                        <path d="M10 13L4 8.5L10 4V13Z" />
                        <path d="M24 13L18 8.5L24 4V13Z" />
                        <path d="M31 19L25 14.5L31 10V19Z" />
                        <path d="M31 31L25 26.5L31 22V31Z" />
                      </svg>
                    </Box>
                    <Badge ml={3} variant="gray">
                      Alpha
                    </Badge>
                  </Flex>
                </Box>

                <Divider mb={1} />

                <Menu>
                  <Heading size={0} fontWeight="bold" mx={5} mb={2} mt={2}>
                    Overview
                  </Heading>
                  {data.pinned.edges.map(({ node }) => (
                    <NavItem
                      key={node.frontmatter.title}
                      to={node.fields.slug}
                      active={pathname === node.fields.slug}
                      label={node.frontmatter.title}
                    />
                  ))}
                </Menu>

                <Divider mb={1} />

                <Menu>
                  <Heading size={0} fontWeight="bold" mx={5} mb={2} mt={2}>
                    Components
                  </Heading>
                  {data.components.edges.map(({ node }) => (
                    <NavItem
                      key={node.frontmatter.title}
                      to={node.fields.slug}
                      active={pathname === node.fields.slug}
                      label={node.frontmatter.title}
                    />
                  ))}
                </Menu>

                <Divider mb={1} />

                <Menu>
                  <Heading size={0} fontWeight="bold" mx={5} mb={2} mt={2}>
                    Recipes
                  </Heading>
                  {data.recipes.edges.map(({ node }) => (
                    <NavItem
                      key={node.frontmatter.title}
                      to={node.fields.slug}
                      active={pathname === node.fields.slug}
                      label={node.frontmatter.title}
                    />
                  ))}
                </Menu>
              </Box>
              <Box py={8} marginLeft={[0, 200, 250]} maxWidth={['100%']}>
                <Container size={1}>{element}</Container>
              </Box>
            </>
          );
        }}
      />
    </RadixProvider>
  );
};
