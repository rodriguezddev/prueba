
hbspt.forms.create({
  target: "#contact-form",
  portalId: "8710915",
  formId: "0a438674-3f66-4e8e-978b-aab5c0afa03d"
});

hbspt.forms.create({
  target: "#subscribe-form",
  portalId: "8710915",
  formId: "3f68ec21-ff93-4b0c-86a7-620ad77015f1",
  onFormReady() {
    const button = $("iframe")
      .contents()
      .find(".hs-button");
    button.css({
      "border-radius": "10px",
      padding: "12px 48px",
      "font-weight": "700",
      "font-size": "1rem",
      "line-height": "1.5",
      display: "block",
      "margin-left": "auto",
      "margin-right": "auto"
    });

    const input = $("iframe")
      .contents()
      .find(".hs-input");

    input.css({
      "background-color": "transparent",
      "border-color": "#50b3e6",
      color: "#123291",
      "font-weight": "bold",
      padding: ".5rem 1rem",
      "font-size": "1rem",
      "line-height": "1.5",
      "border-radius": ".3rem"
    });
  }
});
