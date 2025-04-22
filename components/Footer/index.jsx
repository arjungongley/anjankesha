
import Link from 'next/link';
import{Container,FooterTitles, Section} from './Footer.styled'

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
    return (
      <Section>
      <Container>
        <FooterTitles>&copy; {year} All Rights Reserved</FooterTitles>
        <FooterTitles>Designed And Developed By <strong><Link href="https://anjankesahaenterprises.netlify.app/">Anjankesaha Enterprises</Link></strong></FooterTitles>
        <Link href="mailto:anjankeshaenterprises@gmail.com"><FooterTitles>anjankeshaenterprises@gmail.com</FooterTitles></Link>
      </Container>
      </Section>
    )
  }
  
  export default Footer
