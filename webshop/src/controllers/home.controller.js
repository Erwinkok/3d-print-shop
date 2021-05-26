import axios from "axios";

export const index = async (req, res) => {
    const response = await axios.get("http://localhost:1001/?page=/");
    const pageModel = response.data;

    pageModel.products = [
        {
            name: "product 1",
            price: 12.99,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar iaculis lorem, eget malesuada arcu blandit sollicitudin. Aliquam erat volutpat. Mauris porta velit nec lorem pulvinar, non aliquam elit interdum. Vivamus at sem tortor. Donec est elit, elementum vitae neque vitae, hendrerit dapibus mauris. Suspendisse a orci magna. Pellentesque lobortis auctor massa id euismod. Fusce pulvinar mollis sapien, ut mollis ex venenatis vel. Suspendisse finibus, ex et tempor elementum, mi metus ultricies nunc, non suscipit leo mi eu est. Integer at commodo orci. Sed nec nulla et urna lacinia feugiat. Sed non dui pretium, pulvinar mi nec, dapibus est. Aenean lacinia elementum vulputate. Duis lobortis tellus magna, nec posuere ligula pharetra eu."
        },
        {
            name: "product 2",
            price: 9.99,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar iaculis lorem, eget malesuada arcu blandit sollicitudin. Aliquam erat volutpat. Mauris porta velit nec lorem pulvinar, non aliquam elit interdum. Vivamus at sem tortor. Donec est elit, elementum vitae neque vitae, hendrerit dapibus mauris. Suspendisse a orci magna. Pellentesque lobortis auctor massa id euismod. Fusce pulvinar mollis sapien, ut mollis ex venenatis vel. Suspendisse finibus, ex et tempor elementum, mi metus ultricies nunc, non suscipit leo mi eu est. Integer at commodo orci. Sed nec nulla et urna lacinia feugiat. Sed non dui pretium, pulvinar mi nec, dapibus est. Aenean lacinia elementum vulputate. Duis lobortis tellus magna, nec posuere ligula pharetra eu."
        },
        {
            name: "product 3",
            price: 24.99,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar iaculis lorem, eget malesuada arcu blandit sollicitudin. Aliquam erat volutpat. Mauris porta velit nec lorem pulvinar, non aliquam elit interdum. Vivamus at sem tortor. Donec est elit, elementum vitae neque vitae, hendrerit dapibus mauris. Suspendisse a orci magna. Pellentesque lobortis auctor massa id euismod. Fusce pulvinar mollis sapien, ut mollis ex venenatis vel. Suspendisse finibus, ex et tempor elementum, mi metus ultricies nunc, non suscipit leo mi eu est. Integer at commodo orci. Sed nec nulla et urna lacinia feugiat. Sed non dui pretium, pulvinar mi nec, dapibus est. Aenean lacinia elementum vulputate. Duis lobortis tellus magna, nec posuere ligula pharetra eu."
        },
        {
            name: "product 4",
            price: 12.99,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar iaculis lorem, eget malesuada arcu blandit sollicitudin. Aliquam erat volutpat. Mauris porta velit nec lorem pulvinar, non aliquam elit interdum. Vivamus at sem tortor. Donec est elit, elementum vitae neque vitae, hendrerit dapibus mauris. Suspendisse a orci magna. Pellentesque lobortis auctor massa id euismod. Fusce pulvinar mollis sapien, ut mollis ex venenatis vel. Suspendisse finibus, ex et tempor elementum, mi metus ultricies nunc, non suscipit leo mi eu est. Integer at commodo orci. Sed nec nulla et urna lacinia feugiat. Sed non dui pretium, pulvinar mi nec, dapibus est. Aenean lacinia elementum vulputate. Duis lobortis tellus magna, nec posuere ligula pharetra eu."
        },
        {
            name: "product 5",
            price: 9.99,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar iaculis lorem, eget malesuada arcu blandit sollicitudin. Aliquam erat volutpat. Mauris porta velit nec lorem pulvinar, non aliquam elit interdum. Vivamus at sem tortor. Donec est elit, elementum vitae neque vitae, hendrerit dapibus mauris. Suspendisse a orci magna. Pellentesque lobortis auctor massa id euismod. Fusce pulvinar mollis sapien, ut mollis ex venenatis vel. Suspendisse finibus, ex et tempor elementum, mi metus ultricies nunc, non suscipit leo mi eu est. Integer at commodo orci. Sed nec nulla et urna lacinia feugiat. Sed non dui pretium, pulvinar mi nec, dapibus est. Aenean lacinia elementum vulputate. Duis lobortis tellus magna, nec posuere ligula pharetra eu."
        },
        {
            name: "product 6",
            price: 24.99,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar iaculis lorem, eget malesuada arcu blandit sollicitudin. Aliquam erat volutpat. Mauris porta velit nec lorem pulvinar, non aliquam elit interdum. Vivamus at sem tortor. Donec est elit, elementum vitae neque vitae, hendrerit dapibus mauris. Suspendisse a orci magna. Pellentesque lobortis auctor massa id euismod. Fusce pulvinar mollis sapien, ut mollis ex venenatis vel. Suspendisse finibus, ex et tempor elementum, mi metus ultricies nunc, non suscipit leo mi eu est. Integer at commodo orci. Sed nec nulla et urna lacinia feugiat. Sed non dui pretium, pulvinar mi nec, dapibus est. Aenean lacinia elementum vulputate. Duis lobortis tellus magna, nec posuere ligula pharetra eu."
        }
    ];

    return res.render("home/main", {model: pageModel});
}; 