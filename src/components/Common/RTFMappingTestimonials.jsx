const RTFMapping = ({ data }) => {
	//console.log("data", data);

	return (
		<>
			{data?.map((d, i) => {
				if (!d.type) {
					return (
						<p key={i}  className="text-center lg:text-left f-f-r text-white text-tiny  2xl:text-base mt-7 leading-[23px]">
							{d.children.map((child) => {
								if (child.bold) {
									return (
										<span key={child}>
											<b>{child.text}</b>
										</span>
									);
								} else if (child.italic) {
									return (
										<span  key={child}>
											<i>{child.text}</i>
										</span>
									);
								} else if (child.underline) {
									return (
										<span key={child}>
											<u>{child.text}</u>
										</span>
									);
								} else if (child.strikethrough) {
									return (
										<span key={child}>
											<s>{child.text}</s>
										</span>
									);
								} else if (child.type == 'link') {
									return (
										<span key={child}>
											<a  key={child+child.type} href={child.url} target={child.newTab ? "_blank" : ""}
                                            rel={child?.fields?.rel?.length > 0 && child?.fields?.rel[0]} >{child.children[0]?.text}</a>
										</span>
									);
								} else {
									return child.text;
								}
							})}
						</p>
					);
				} else if (d.type == "p") {
					return (
						<p key={i} className="text-center lg:text-left f-f-r text-white text-tiny  2xl:text-base mt-2 leading-[23px]">
							{d.children.map((child) => {
								if (child.bold) {
									return (
										<span  className="text-center lg:text-left f-f-r text-white text-tiny  2xl:text-base mt-2 leading-[23px]" >
											<b>{child.text}</b>
										</span>
									);
								} else if (child.italic) {
									return (
										<span className="text-center lg:text-left f-f-li text-white text-tiny  2xl:text-base mt-2 leading-[23px]">
											<i>{child.text}</i>
										</span>
									);
								} else if (child.underline) {
									return (
										<span>
											<u>{child.text}</u>
										</span>
									);
								} else if (child.strikethrough) {
									return (
										<span>
											<s>{child.text}</s>
										</span>
									);
                                } else if (child.type == 'link') {
									return (
										<span>
											<a style={{color: '#41A53D'}} href={child.url} target={child.newTab ? "_blank" : ""}
                                                rel={child?.fields?.rel?.length > 0 && child?.fields?.rel[0]}
                                                >{
                                                child.children.map(c => (
                                                    c.text
                                                ))
                                            }</a>
										</span>
									);
								} else {
									return child.text;
								}
							})}
						</p>
					);
				} else if (d.type == "upload") {
					return (
						<img key={i}
							src={`${process.env.NEXT_PUBLIC_BASE_URL}${d.value.url}`}
							width={d.value.width}
							height={d.value.height}
							style={{ width: "97%",margin: '2em 0' }}
						/>
					);
				} else if (d.type == "h1") {
					return (
						<h1 key={i}  className="text-center lg:text-left f-f-r text-green  my-4 text-lg md:text-xl  md:leading-[23px]">
							{d.children.map((child) => {
								if (child.bold) {
									return (
										<span>
											<b>{child.text}</b>
										</span>
									);
								} else if (child.italic) {
									return (
										<span>
											<i>{child.text}</i>
										</span>
									);
								} else if (child.underline) {
									return (
										<span>
											<u>{child.text}</u>
										</span>
									);
								} else if (child.strikethrough) {
									return (
										<span>
											<s>{child.text}</s>
										</span>
									);
                                } else if (child.type == 'link') {
									return (
										<span>
											<a href={child.url} target={child.newTab ? "_blank" : ""}
                                            rel={child?.fields?.rel?.length > 0 && child?.fields?.rel[0]}>{child.children[0]?.text}</a>
										</span>
									);
								} else {
									return child.text;
								}
							})}
						</h1>
					);
				} else if (d.type == "h2") {
					return (
						<h2 key={i} className="text-center lg:text-left f-f-r text-green  my-4 text-lg md:text-xl  md:leading-[23px]">
							{d.children.map((child) => {
								if (child.bold) {
									return (
										<span  >
											<b>{child.text}</b>
										</span>
									);
								} else if (child.italic) {
									return (
										<span>
											<i>{child.text}</i>
										</span>
									);
								} else if (child.underline) {
									return (
										<span>
											<u>{child.text}</u>
										</span>
									);
								} else if (child.strikethrough) {
									return (
										<span>
											<s>{child.text}</s>
										</span>
									);
                                } else if (child.type == 'link') {
									return (
										<span>
											<a href={child.url} target={child.newTab ? "_blank" : ""}
                                            rel={child?.fields?.rel?.length > 0 && child?.fields?.rel[0]}>{child.children[0]?.text}</a>
										</span>
									);
								} else {
									return child.text;
								}
							})}
						</h2>
					);
				} else if (d.type == "h3") {
					return (
						<h3 key={i} style={{ color: "black" }}>
							{d.children.map((child) => {
								if (child.bold) {
									return (
										<span>
											<b>{child.text}</b>
										</span>
									);
								} else if (child.italic) {
									return (
										<span>
											<i>{child.text}</i>
										</span>
									);
								} else if (child.underline) {
									return (
										<span>
											<u>{child.text}</u>
										</span>
									);
								} else if (child.strikethrough) {
									return (
										<span>
											<s>{child.text}</s>
										</span>
									);
                                } else if (child.type == 'link') {
									return (
										<span>
											<a href={child.url} target={child.newTab ? "_blank" : ""}
                                            rel={child?.fields?.rel?.length > 0 && child?.fields?.rel[0]}>{child.children[0]?.text}</a>
										</span>
									);
								} else {
									return child.text;
								}
							})}
						</h3>
					);
				} else if (d.type == "h4") {
					return (
						<h4 key={i}  className="text-center lg:text-left f-f-r text-white text-tiny 2xl:text-base mt-2 leading-[23px]" >
							{d.children.map((child) => {
								if (child.bold) {
									return (
										<span className="text-center lg:text-left f-f-it text-white text-tiny 2xl:text-base mt-2 leading-[23px]" >
											<b>{child.text}</b>
										</span>
									);
								} else if (child.italic) {
									return (
										<span>
											<i>{child.text}</i>
										</span>
									);
								} else if (child.underline) {
									return (
										<span>
											<u>{child.text}</u>
										</span>
									);
								} else if (child.strikethrough) {
									return (
										<span>
											<s>{child.text}</s>
										</span>
									);
                                } else if (child.type == 'link') {
									return (
										<span>
											<a href={child.url} target={child.newTab ? "_blank" : ""}
                                            rel={child?.fields?.rel?.length > 0 && child?.fields?.rel[0]}>{child.children[0]?.text}</a>
										</span>
									);
								} else {
									return child.text;
								}
							})}
						</h4>
					);
				} else if (d.type == "h5") {
					return (
						<h5 key={i} style={{ color: "black" }}>
							{d.children.map((child) => {
								if (child.bold) {
									return (
										<span>
											<b>{child.text}</b>
										</span>
									);
								} else if (child.italic) {
									return (
										<span>
											<i>{child.text}</i>
										</span>
									);
								} else if (child.underline) {
									return (
										<span>
											<u>{child.text}</u>
										</span>
									);
								} else if (child.strikethrough) {
									return (
										<span>
											<s>{child.text}</s>
										</span>
									);
                                } else if (child.type == 'link') {
									return (
										<span>
											<a href={child.url} target={child.newTab ? "_blank" : ""}
                                            rel={child?.fields?.rel?.length > 0 && child?.fields?.rel[0]}>{child.children[0]?.text}</a>
										</span>
									);
								} else {
									return child.text;
								}
							})}
						</h5>
					);
				} else if (d.type == "h6") {
					return (
						<h6 key={i} style={{ color: "black" }}>
							{d.children.map((child) => {
								if (child.bold) {
									return (
										<span>
											<b>{child.text}</b>
										</span>
									);
								} else if (child.italic) {
									return (
										<span>
											<i>{child.text}</i>
										</span>
									);
								} else if (child.underline) {
									return (
										<span>
											<u>{child.text}</u>
										</span>
									);
								} else if (child.strikethrough) {
									return (
										<span>
											<s>{child.text}</s>
										</span>
									);
                                } else if (child.type == 'link') {
									return (
										<span>
											<a href={child.url} target={child.newTab ? "_blank" : ""}
                                            rel={child?.fields?.rel?.length > 0 && child?.fields?.rel[0]}>{child.children[0]?.text}</a>
										</span>
									);
								} else {
									return child.text;
								}
							})}
						</h6>
					);
				} else if (d.type == "ol") {
					return (
						<ol key={i}>
							{d.children.map((child) => {
								if (child.type == "li") {
									return (
										<li style={{ listStyleType: "decimal" }}>
											{child.children.map((c) => {
												if (c.bold) {
													return (
														<span>
															<b>{c.text}</b>
														</span>
													);
												} else if (c.italic) {
													return (
														<span>
															<i>{c.text}</i>
														</span>
													);
												} else if (c.underline) {
													return (
														<span>
															<u>{c.text}</u>
														</span>
													);
												} else if (c.strikethrough) {
													return (
														<span>
															<s>{c.text}</s>
														</span>
													);
                                                } else if (child.type == 'link') {
                                                    return (
                                                        <span>
                                                            <a href={child.url} target={child.newTab ? "_blank" : ""}
                                                            rel={child?.fields?.rel?.length > 0 && child?.fields?.rel[0]}>{child.children[0]?.text}</a>
                                                        </span>
                                                    );
												} else {
													return c.text;
												}
											})}
										</li>
									);
								}
							})}
						</ol>
					);
				} else if (d.type == "ul") {
					return (
						<ul key={i}>
							{d.children.map((child) => {
								if (child.type == "li") {
									return (
										<li style={{ listStyleType: "disc" }}>
											{child.children.map((c) => {
												if (c.bold) {
													return (
														<span>
															<b>{c.text}</b>
														</span>
													);
												} else if (c.italic) {
													return (
														<span>
															<i>{c.text}</i>
														</span>
													);
												} else if (c.underline) {
													return (
														<span>
															<u>{c.text}</u>
														</span>
													);
												} else if (c.strikethrough) {
													return (
														<span>
															<s>{c.text}</s>
														</span>
													);
                                                } else if (child.type == 'link') {
                                                    return (
                                                        <span>
                                                            <a href={child.url} target={child.newTab ? "_blank" : ""}
                                                            rel={child?.fields?.rel?.length > 0 && child?.fields?.rel[0]}>{child.children[0]?.text}</a>
                                                        </span>
                                                    );
												} else {
													return c.text;
												}
											})}
										</li>
									);
								}
							})}
						</ul>
					);
				}
			})}
		</>
	);
};

export default RTFMapping;
