import React from "react";
import g from "glamorous";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

export default ({ data }) => {
    console.log(data);
    return (
        <div>
            <h4>Всего {data.allMarkdownRemark.totalCount} записей</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <g.H3 marginBottom={rhythm(1 / 4)}>
                        <Link to={node.frontmatter.path}>
                        {node.frontmatter.title}{" "}
                    </Link>
                        <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
                    </g.H3>
                    <p>{node.excerpt}</p>
                </div>
            ))}
        </div>
    );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark (sort: {order: DESC, fields: [frontmatter___date]}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "DD.MM.YY")
          }
          excerpt
        }
      }
    }
  }
`;