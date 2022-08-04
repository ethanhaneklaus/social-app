import React, { useState, createContext, useCallback } from "react";

export const CommentContext = createContext(null);

export function CommentProvider(props) {


    return (
        <CommentContext.Provider>
            {props.children}
        </CommentContext.Provider>
    );
}