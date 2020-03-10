

export const fetchShops = () => (
    $.ajax({
        method: "GET",
        url: `api/shops`
    })
);

export const fetchShop = (shopId) => (
    $.ajax({
        method: "GET",
        url: `api/shops/${shopId}`
    })
);

export const createShop = (shop) => (
    $.ajax({
        method: "POST",
        url: `api/shops`,
        data: { shop }
    })
);

export const updateShop = (shop) => (
    $.ajax({
        method: "PATCH",
        url: `/api/shops/${shop.id}`,
        data: { shop }
    })
);

export const deleteShop = (shopId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/shops/${shopId}`
    })
);

export const fetchShopReviews = (shopId) => (
    $.ajax({
        method: "GET",
        url: `/api/shops/${shopId}/shop_reviews`
    })
)

export const fetchShopShow = (shopId) => (
    $.ajax({
        method: "GET",
        url: `/api/shops/${shopId}/shop_show`
    })
)

export const fetchOwnedShops = () => (
    $.ajax({
        method : "GET",
        url: "/api/shops/owned"
    })
);

export const fetchOwnedShopInfo = () => (
    $.ajax({
        method: "GET",
        url: "/api/shops/owned_info"
    })
);

export const fetchOwnedShopView = (id) => (
    $.ajax({
        method: "GET",
        url: `/api/shops/${id}/owned_view`
    })
);

export const fetchOwnedShopListings = (id) => {
    return(
        $.ajax({
            method: "GET",
            url: `/api/shops/${id}/owned_listings`
        })
    )
};

export const createShopProduct = (id, formData) => (
    $.ajax({
        method: "POST",
        url: `/api/shops/${id}/add_product`,
        data: formData,
        contentType: false,
        processData: false
    })
);

export const fetchTrendingItems = () => (
    $.ajax({
        method: "GET",
        url: '/api/shops/trending_items'
    })
);