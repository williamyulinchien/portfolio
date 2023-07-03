import React from 'react';
import { DiCss3, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { TbBrandNextjs,TbBrandMongodb, TbBrandPython, TbBrandJavascript, TbBrandReactNative} from  "react-icons/tb";
import { SiExpress, SiKeras, SiNodedotjs, SiOpencv, SiPandas, SiPytorch, SiRos, SiTypescript } from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle,Picture } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <Picture>
          <DiReact size="3rem" />
          <TbBrandNextjs size = '3rem'/>
        </Picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js and Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <Picture>
          <DiFirebase size="3rem" />
          <TbBrandMongodb size="3rem" />
          <SiExpress size='3rem'/>
        </Picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      < ListItem>
          <Picture>
            <TbBrandPython size="3rem" />
            <SiNodedotjs size="3rem" />
            <SiTypescript size = '3rem'/>
            <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 512 512"><path fill="currentColor" d="M495.855 367.604c-28.98-73.177-53.037-148.231-80.725-221.893c-12.23-31.362-24.198-62.986-40.868-92.33c-6.62-10.535-12.956-22.119-23.814-28.86c-2.739-1.74-5.828-2.479-8.88-2.42c-5.084.096-10.14 2.37-14.025 5.65c-14.571 11.543-23.209 28.334-32.896 43.793c-17.114 28.698-35.156 58.748-63.773 77.396c-13.44 9.485-31.039 10.514-43.995 20.686c-17.72 13.36-29.767 32.31-44.298 48.737c-3.31 3.956-8.436 5.53-12.916 7.67C86.315 243.71 42.945 261.35 0 279.916c36.367 28.132 75.115 53.157 112.208 80.321c10.172-2.018 20.383-6.196 30.877-4.339c16.63 5.207 26.377 21.15 34.006 35.721c15.5 31.765 26.7 65.307 39.253 98.283c20.988-1.493 39.878-12.31 56.104-25.025c31.24-25.307 55.034-58.001 81.23-88.192c12.552-13.199 25.347-28.92 44.197-32.593c19.05-4.601 39.454 2.22 53.581 15.338c19.818 17.719 37.376 38.203 60.544 51.765c-3.108-15.338-10.575-29.101-16.145-43.592zm-324.011-51.563c-18.284 10.817-37.699 19.717-56.71 29.162c-29.828-19.98-58.889-41.15-88.192-61.856c39.515-17.315 79.635-33.4 119.675-49.545c18.97 14.813 38.547 28.88 57.517 43.693c-8.92 14.248-19.657 27.487-32.29 38.546zm40.665-49.646c-18.85-14.167-37.94-27.951-56.508-42.482c11.907-16.226 24.945-31.906 40.565-44.701c10.333-6.62 22.966-8.456 33.703-14.43c25.469-12.714 42.845-36.044 59.434-58.324c-21.271 55.216-43.975 110.654-77.194 159.937z"/></svg>
          </Picture>
          <ListContainer>
            <ListTitle>Language</ListTitle>
            <ListParagraph>
              Experience with Python <br />
              JavaScript/TypeScript <br/> MATLAB
            </ListParagraph>
          </ListContainer>
        </ListItem>
        < ListItem>
          <Picture>
            <SiKeras size="3rem" />
            <SiPytorch size ="3rem" /> 
            <SiOpencv size ='3rem'/>
            <SiRos size ='3rem'/>
          </Picture>
          <ListContainer>
            <ListTitle>AI related library</ListTitle>
            <ListParagraph>
              Experience with Keras/Pytorch<br />
              OpenCV and ROS
            </ListParagraph>
          </ListContainer>
        </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
