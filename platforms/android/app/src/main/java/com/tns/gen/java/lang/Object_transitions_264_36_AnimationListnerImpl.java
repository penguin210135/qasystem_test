package com.tns.gen.java.lang;

public class Object_transitions_264_36_AnimationListnerImpl extends java.lang.Object implements com.tns.NativeScriptHashCodeProvider, android.animation.Animator.AnimatorListener {
	public Object_transitions_264_36_AnimationListnerImpl(){
		super();
		com.tns.Runtime.initInstance(this);
	}

	public void onAnimationStart(android.animation.Animator param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onAnimationStart", void.class, args);
	}

	public void onAnimationRepeat(android.animation.Animator param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onAnimationRepeat", void.class, args);
	}

	public void onAnimationEnd(android.animation.Animator param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onAnimationEnd", void.class, args);
	}

	public void onAnimationCancel(android.animation.Animator param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onAnimationCancel", void.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
