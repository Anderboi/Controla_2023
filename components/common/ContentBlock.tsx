// import ContainerBox from "./ContainerBox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ContentBlockProps {
  title: string;
  children: React.ReactNode;
}

const ContentBlock = ({ title, children }: ContentBlockProps) => {
  return (
    <Accordion type="multiple" className='rounded-lg px-4 dark:bg-secondary-bg-dark' >
      <AccordionItem value="item-1" defaultValue={"item-1"}>
        <AccordionTrigger className='text-lg'>{title}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>

      {/* <ContainerBox className="transition ease-in-out delay-50"> */}
      {/* <h2
        className="
          text-start
          text-base
          px-4
          sm:px-6
          "
      ></h2> */}

      {/* </ContainerBox> */}
    </Accordion>
  );
};

export default ContentBlock;
