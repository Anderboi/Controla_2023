import React from "react";
import Header from "@/components/common/Header";
import ContainerBox from "@/components/common/ContainerBox";
import SearchContent from './components/SearchContent';
import SearchInput from '@/components/common/inputs/SearchInput';
import getProjectsByTitle from "@/actions/getProjectsByTitle";

export const revalidate = 0;

interface SearchProps {
  searchParams: {
    title: string;
  };
}

const Search = async ({ searchParams }: SearchProps) => {
  const projects = await getProjectsByTitle(searchParams.title);

  return (
    <>
      <Header title="Поиск" />
      <ContainerBox classname="w-full h-full flex flex-col gap-y-6">
        <SearchInput />
        <SearchContent data={projects} />
      </ContainerBox>
    </>
  );
};

export default Search;
