/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewProductCategoryItem.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.ProductCategoryItem.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.ProductCategoryItem." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

