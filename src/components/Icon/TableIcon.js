import IconWrapper from './IconWrapper';

export default {
    name: 'TableIcon',
    props: {
        size: {
            type: String
        },
        primaryColor: {
            type: String
        },
        secondaryColor: {
            type: String
        }
    },
    render(h) {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M4 17.995h15.992c-.009 0-.009-9.99-.009-9.99H3.992c.008 0 .008 9.99.008 9.99zm-2-12C2 4.892 2.898 4 3.99 4h16.02C21.108 4 22 4.895 22 5.994v12.012A1.997 1.997 0 0 1 20.01 20H3.99A1.994 1.994 0 0 1 2 18.006V5.994z" fill-rule="nonzero"/><path fill-rule="nonzero" d="M8 6v12h2V6zm6 0v12h2V6z"/><path d="M4 12h17v2H4z"/></g></svg>' } });
    }
};
