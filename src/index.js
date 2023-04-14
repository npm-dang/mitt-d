export const mitt = function (all) {
	// 初始化all事件集合
	all = all || new Map();
	return {
		all,
		on(handleType, handler) {
			const handlers = all.get(handleType);
			if (handlers) {
				handlers.push(handler);
			} else {
				all.set(handleType, [handler]);
			}
		},
		emit(handlerType, params) {
			const handlers = all.get(handlerType);
			if (handlers) {
				handlers.map((handler) => {
					handler(params);
				});
			}
		},
		off(handlerType, handler) {
			const handlers = all.get(handlerType);
			if (handlers) {
				if (handler) {
					let index = handlers.indexOf(handler);
					handlers.splice(index, 1);
				} else {
					all.set(handlers, []);
				}
			}
		},
	};
};
