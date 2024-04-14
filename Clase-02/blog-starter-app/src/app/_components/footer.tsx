import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-full">
            <p className='text-sm lg:text-base'>Copyright © <a className='footer-href' href="https://github.com/NicolasNievas" target="_blank" rel="noopener noreferrer">Nicolas Nievas</a> 2024</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
