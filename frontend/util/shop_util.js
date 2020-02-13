

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