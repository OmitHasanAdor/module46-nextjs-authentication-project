import HomeLeftSideBar from '@/app/components/HomeLeftSideBar';
import HomeRightSide from '@/app/components/HomeRightSide';
import NewsCard from '@/app/components/NewsCard';
import { getCatagories, getNewsByCategory } from '@/lib/data';
import React from 'react';


const CategoryDetailsPage =async ({params}) => {
    const {id} = await params;
      const categories = await getCatagories()
  const newsByCategory = await getNewsByCategory(id)
    console.log(id)
    return (
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
<HomeLeftSideBar categories={categories} activeId={id}></HomeLeftSideBar>
<NewsCard newsByCategory={newsByCategory}></NewsCard>
  <HomeRightSide categories={categories}></HomeRightSide>
</div>
    );
};

export default CategoryDetailsPage;