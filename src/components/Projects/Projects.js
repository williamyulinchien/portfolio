import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Recent Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, id) => {
        return (
          <BlogCard key={id}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title={p.title}>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TagList>
                {p.tags.map((t, id) => {
                  return <Tag key={id} disabled={id === 3}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
            {id === 3 ? (
          <>
            <ExternalLinks href={p.visit}>Document</ExternalLinks>
            <ExternalLinks href={p.source} disabled style={{ textDecoration: "line-through" }}> Source code</ExternalLinks>
          </>
        ) : (
          <>
            <ExternalLinks href={p.visit}>Website</ExternalLinks>
            <ExternalLinks href={p.source}>Source code</ExternalLinks>
          </>
        )}
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;