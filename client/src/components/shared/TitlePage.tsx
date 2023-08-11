interface Props {
  title: string
}

const TitlePage = ({ title }: Props) => {
  return (
    <div className="relative mb-[2.3125rem] before:content-[''] before:h-[0.3125rem] before:absolute before:bottom-[-1.0625rem] before:w-10 before:z-[1] before:rounded-lg before:left-0 before:bg-white text-[2rem] text-[color:var(--color-heading)] font-semibold leading-[1.3] ">
      {title}
    </div>
  )
}

export default TitlePage
