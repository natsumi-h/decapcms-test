const instagram = new Proxy({"src":"/_astro/instagram.DaLTEIAA.png","width":139,"height":140,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/horinatsumi/Desktop/d2l/decapcms-test/src/assets/images/instagram.png";
							}
							
							return target[name];
						}
					});

const facebook = new Proxy({"src":"/_astro/facebook.Cut0C8cX.png","width":140,"height":140,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/horinatsumi/Desktop/d2l/decapcms-test/src/assets/images/facebook.png";
							}
							
							return target[name];
						}
					});

const linkedin = new Proxy({"src":"/_astro/linkedin.CzHt2MwO.png","width":140,"height":140,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/horinatsumi/Desktop/d2l/decapcms-test/src/assets/images/linkedin.png";
							}
							
							return target[name];
						}
					});

export { facebook as f, instagram as i, linkedin as l };
