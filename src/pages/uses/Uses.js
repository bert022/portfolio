// import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
// import usesBackground from 'assets/uses-background.mp4';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Uses.module.css';

export const Uses = () => {
  return (
    <Fragment>
      <Meta
        title="Uses"
        description="A list of hardware and software I use to do my thing"
      />
      <ProjectContainer className={styles.uses}>
        {/* <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        /> */}
        <ProjectHeader title="Uses" description="Products used" />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  {/* <ListItem>
                    <Link href="https://www.figma.com">Figma</Link> is my primary tool for
                    UI design these days. Made the switch from Sketch in 2020 and haven’t
                    looked back. I’ve also created{' '}
                    <Link href="https://www.figma.com/@hamish">a few plugins</Link> that
                    you can install.
                  </ListItem> */}
                  {/* <ListItem>
                    Any motion graphics I create are created in Adobe After Effects. So
                    far I haven’t found a non-Adobe product that’s as good. If anyone has
                    suggestions please <Link href="/contact">message me</Link>.
                  </ListItem> */}
                  <ListItem>
                    For any 3D models <Link href="https://www.blender.org/">Blender</Link>{' '}
                    was used. Since 2.8 it’s become way simpler to use and in a lot of
                    ways better than expensive paid tools like 3DS Max or Maya.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use{' '}
                    <Link href="https://code.visualstudio.com/">Visual Studio Code</Link>{' '}
                    as my text editor, with the Atom One Dark theme and Operator Mono as
                    my typeface of choice.
                  </ListItem>
                  <ListItem>
                    Google Chrome is my main browser for development, Research and general
                    use.
                  </ListItem>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> is my front end
                    Javascript library of choice. The component-centric mental model is
                    the first thing that truly made sense to me as a designer.
                  </ListItem>
                  <ListItem>
                    Product research I mainly use{' '}
                    <Link href="https://www.helium10.com/">Helium10</Link>.
                  </ListItem>
                  <ListItem>
                    For video editing I use{' '}
                    <Link href="https://www.apple.com/final-cut-pro/">Final Cut Pro</Link>{' '}
                    the most powerful video editing software in the market which is also
                    native to Apple environment.
                  </ListItem>
                  <ListItem>
                    For photo editing I use{' '}
                    <Link href="https://www.adobe.com/ph_en/products/photoshop/landpa.html?sdid=G4FRYR56&mv=search&ef_id=Cj0KCQjw_7KXBhCoARIsAPdPTfh-QO5blD74ygTimpTVx-Wc4M_o0_sX4VZHwUhtKNDAHYW0UO0JL6QaAsTaEALw_wcB:G:s&s_kwcid=AL!3085!3!444512451750!e!!g!!adobe%20photoshop!703953000!39399096689&gclid=Cj0KCQjw_7KXBhCoARIsAPdPTfh-QO5blD74ygTimpTVx-Wc4M_o0_sX4VZHwUhtKNDAHYW0UO0JL6QaAsTaEALw_wcB">
                      Adobe Photoshop
                    </Link>{' '}
                    and{' '}
                    <Link href="https://www.adobe.com/ph_en/products/illustrator.html?sdid=FZPQYVW7&mv=search&ef_id=Cj0KCQjw_7KXBhCoARIsAPdPTfhmTqOPxgOGmd3c5idz8Kd4aRAo221m-ZPLGMQUPHivCSFqEI8GPmYaAgtlEALw_wcB:G:s&s_kwcid=AL!3085!3!161729082389!e!!g!!adobe%20illustrator%20cc!703952820!39399075249&gclid=Cj0KCQjw_7KXBhCoARIsAPdPTfhmTqOPxgOGmd3c5idz8Kd4aRAo221m-ZPLGMQUPHivCSFqEI8GPmYaAgtlEALw_wcB">
                      Adobe Illustrator
                    </Link>
                    , these are 2 of the most powerful tools to produce images with
                    excellent quality.
                  </ListItem>
                  <ListItem>
                    For Architecture 3D Modeling I use{' '}
                    <Link href="https://www.sketchup.com/">SketchUp</Link>.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Hardware</ProjectSectionHeading>
              <Table>
                <TableBody>
                  {/* <TableRow>
                    <TableHeadCell>CPU</TableHeadCell>
                    <TableCell>AMD Ryzen 5800x</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>GPU</TableHeadCell>
                    <TableCell>MSI Gaming X Trio RTX 3080</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Memory</TableHeadCell>
                    <TableCell>GSkill 32GB DDR4 3600mhz CAS 18</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Motherboard</TableHeadCell>
                    <TableCell>MSI B550 Tomahawk</TableCell>
                  </TableRow> */}
                  <TableRow>
                    <TableHeadCell>Monitor</TableHeadCell>
                    <TableCell>24inch Samsung</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>Magic Keyboard</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Magic Mouse</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>Macbook Pro (13″, M1, 2020)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>HP Stereo 3.5mm Headset</TableCell>
                  </TableRow>
                  {/* <TableRow>
                    <TableHeadCell>Microphone</TableHeadCell>
                    <TableCell>Blue Yeti</TableCell>
                  </TableRow> */}
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
