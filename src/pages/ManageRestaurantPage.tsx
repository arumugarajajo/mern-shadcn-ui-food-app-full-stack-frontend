import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestuarantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();

  //give me the truthy value
  const isEditing = !!restaurant;

  return (
    <ManageRestaurantForm
      onSave={isEditing ? createRestaurant : updateRestaurant}
      isLoading={isCreateLoading || isUpdateLoading}
      restaurant={restaurant}
    />
  );
};

export default ManageRestaurantPage;
