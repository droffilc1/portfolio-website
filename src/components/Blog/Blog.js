import { useState, useEffect } from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  TitleContent,
  UtilityList,
  Img,
} from "../Projects/ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const query = `
        query Publication {
          publication(host: "cliffordmapesa.hashnode.dev") {
            isTeam
            title
            posts(first: 6) {
              edges {
                node {
                  title
                  brief
                  coverImage {
                    attribution
                    photographer
                    url
                  }
                  url
                }
              }
            }
          }
        }
        `;
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch("https://gql.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    setPosts(data.data.publication.posts.edges.map((edge => edge.node)));
  };

  return (
    <Section nopadding id="blog">
      <SectionDivider />
      <SectionTitle main>Blog</SectionTitle>
      <GridContainer>
        {posts.map((post) => (
          <BlogCard key={post.url}>
            <Img src={post.coverImage.url} alt={post.title} />
            <TitleContent>
              <HeaderThree title>{post.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{post.brief}</CardInfo>
            <UtilityList>
              <ExternalLinks
                href={post.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Read more about ${post.title}`}
              >
                Read More
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Blog;
