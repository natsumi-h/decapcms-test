const toggle = new Proxy({"src":"/_astro/toggle.BJj_VMqV.png","width":64,"height":64,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/horinatsumi/Desktop/d2l/decapcms-test/src/assets/images/contact/toggle.png";
							}
							
							return target[name];
						}
					});

const arrow = new Proxy({"src":"/_astro/arrow.C8Sn--Bt.png","width":64,"height":64,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/horinatsumi/Desktop/d2l/decapcms-test/src/assets/images/contact/arrow.png";
							}
							
							return target[name];
						}
					});

export { arrow as a, toggle as t };
