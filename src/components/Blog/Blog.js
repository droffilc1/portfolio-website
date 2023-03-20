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
        query {
            user(username: "cliff984") {
            publication {
                posts(page:0){
                slug
                title
                brief
                coverImage
                cuid
                _id
                }
            }
            }
        }
        `; 
  useEffect(() => {
    fetchPosts();
  }, []); 

  const fetchPosts = async () => {
    const response = await fetch("https://api.hashnode.com", {
      method: "POST",
      headers: {
        "Content-type": "application/json",        
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();   
    setPosts(data.data.user.publication.posts);    
  };

  return (
    <Section nopadding id="blog">
      <SectionDivider />
      <SectionTitle main>Blog</SectionTitle>
      <GridContainer>
        {posts.map((post) => (
          <BlogCard>
            <Img src={post.coverImage} alt={post.title} />
            <TitleContent>
              <HeaderThree title>{post.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{post.brief}</CardInfo>
            <UtilityList>
              <ExternalLinks
                href={`https://cliffordmapesa.hashnode.dev///${post.slug}`}
                target="_blank"
                rel="noreferrer"
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
