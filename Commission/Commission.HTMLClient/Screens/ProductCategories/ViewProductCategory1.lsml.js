/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewProductCategory1.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.ProductCategory.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.ProductCategory." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

