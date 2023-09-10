interface Props {
  title: string
}

const TitlePage = ({ title }: Props) => {
  return (
    <div className="relative mb-[2.3125rem]  text-[2rem] text-[#0B0909] font-semibold leading-[1.3]  overflow-hidden after:content-[''] after:inline-block after:absolute after:w-1/4 after:h-1 after:bg-gradient-line after:ml-[5px] after:bottom-3">
      {title}
    </div>
  )
}

export default TitlePage
