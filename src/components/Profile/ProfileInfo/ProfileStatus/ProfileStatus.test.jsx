import React         from "react";
import { create }    from "react-test-renderer";
import ProfileStatus from "./ProfileStatus.tsx";



describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status='test-status' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("test-status");
    });

    test("after creation SPAN with status should be displayed", () => {
        const component = create(<ProfileStatus status='test-status' />);
        const root = component.root;
        let span = root.findByType("span")

        expect(span).not.toBeNull();
    });
    test("after creation INPUT  shouldn't be displayed", () => {
        const component = create(<ProfileStatus status='test-status' />);
        const root = component.root;


        expect(() => {
            let input = root.findByType("input")
        }).toThrow();
    });
    test("after creation SPAN should contains correct status", () => {
        const component = create(<ProfileStatus status='test-status' />);
        const root = component.root;
        let span = root.findByType("span")

        expect(span.children[0]).toBe('test-status');
    });

    test("INPUT should be displayed in EditMode instead of SPAN", () => {
        const component = create(<ProfileStatus status='test-status' />);
        const root = component.root;
        let span = root.findByType("span")
        span.props.onDoubleClick()

        let input = root.findByType("input")

        expect(input.props.value).toBe('test-status');
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();

        const component = create(<ProfileStatus updateStatus={mockCallback} status='test-status' />);
        const instance = component.getInstance();
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});

