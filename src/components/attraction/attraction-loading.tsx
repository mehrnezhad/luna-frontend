import { Skeleton } from "@nextui-org/react";
const AttractionShowLoading = () => {

    const skeletonItems = [];
  
    for (let i = 0; i < 12; i++) {
      skeletonItems.push(
          <div className="rounded-2xl bg-white shadow-normal dark:bg-zinc-700 overflow-hidden" key={i}>
            <div className="relative">
              <Skeleton className="h-32 w-full" />
            </div>
            <div className="mb-2.5 md:h-14 h-10 text-sm md:text-lg dark:text-white text-zinc-700 font-medium line-clamp-2 p-2 md:p-5 text-center">
              <Skeleton className="h-8 w-32 mx-auto" />
            </div>
          </div>
        
      );
    }
  
    return (
      <>
        {/* products body */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5">
            {skeletonItems}
        </div>
      </>
    );
  };
  
  export default AttractionShowLoading;