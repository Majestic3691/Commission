/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewProductGroupItem.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.ProductGroupItem.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.ProductGroupItem." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

