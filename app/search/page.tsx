import getProjectsByTitle from "@/actions/getProjectsByTitle";
import ContainerBox from "@/components/common/ContainerBox";
import Header from "@/components/common/Header";
import SearchInput from '@/components/common/inputs/SearchInput';
import React from "react";
import SearchContent from './components/SearchContent';

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
      <ContainerBox classname="w-full h-full">
        <SearchInput />
        <SearchContent data={projects} />
      </ContainerBox>
    </>
  );
};

export default Search;
