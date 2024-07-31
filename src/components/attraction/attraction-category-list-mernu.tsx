import AttractionItemMenu from "@/components/attraction/attraction-item-menu";
import type { AttractionCategoriesType } from "@/type/attraction/attraction_categories";

const AttractionsCategoryListMenu = ({ categoriesAttr }: { categoriesAttr: AttractionCategoriesType[] }) => {
    return (
        <div>
            {categoriesAttr?.filter(attraction => !attraction.parent_id).map((attraction) => (
                <div key={attraction.id} className="flex flex-col gap-2 lg:gap-1">
                    <div className="flex flex-col items-start mb-3">
                        <h3 className="mb-2 text-xl lg:text-lg">
                            {attraction.title}
                        </h3>
                        <span className="block w-[130px] md:h-0.5 h-0.25 bg-orange-300"></span>
                    </div>
                    <AttractionItemMenu key={attraction.id} parentSlug="" attraction={attraction} />
                </div>
            ))}
       </div>
    );
};

export default AttractionsCategoryListMenu;