﻿using BlogCore.Core;
using System;

namespace BlogCore.PostContext.Domain
{
    public class NotFoundCommentException : CoreException
    {
        public NotFoundCommentException(string message)
            : this(message, null)
        {
        }

        public NotFoundCommentException(string message, Exception innerEx)
            : base(message, innerEx)
        {
        }
    }
}