import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';

const About = () => {
  return (
    <div>
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/270"
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle tag="h5">
            About Software Developer <span>Barry</span>
          </CardTitle>
          <br />
          <CardText>
            Hi, I'am Barry
            <br />
            <br />
            I’m currently learning Full-Stack Development Languages.
            <br />
            <br />I know JS, ReactJS, Django, NodeJS, MongoDB,SQL, Python, AWS
            Services.
            <br />
            <br />
            <a href="mailto:barry@clarusway.com">Send email</a> :
            barry@clarusway.com
          </CardText>
          <CardText>
            <small className="text-muted">Last updated 1 week ago</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default About;
